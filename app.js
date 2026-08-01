// ==========================================================================
// APP STATE & STORAGE CONTROLLER
// ==========================================================================
let state = {
    activeMode: 'flashcard',      // 'flashcard' | 'quiz' | 'list'
    currentDeck: [],             // Active questions after applying filters
    originalDeckOrder: [],       // Backup of filtered questions to toggle shuffle
    currentIndex: 0,             // Current active card index
    flashcardIndex: 0,           // Saved Flashcard index
    quizIndex: 0,                // Saved Quiz index
    isShuffled: false,
    starredOnly: false,
    pageFilter: 'all',           // 'all' | '1-10' | '11-20' etc.
    searchQuery: '',
    starredQuestionIds: new Set(),
    learnedQuestionIds: new Set(),
    theme: 'dark',
    showOptionsOnFront: false,
    // Quiz sub-mode state
    quizSubMode: 'study',        // 'study' | 'exam'
    exam: {
        running: false,
        finished: false,
        questions: [],
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        answered: false,
        selectedKey: null,
        totalQuestions: 60
    },
    // Quiz persistent state
    quizAnswers: {},             // Map of questionId -> { selectedKey, isCorrect }
    quizScore: {
        correct: 0,
        incorrect: 0,
        answered: false,
        selectedKey: null
    },
    // List temporary state
    showListAnswers: false,
    // Pending multi-select set for study mode
    quizPendingMultiSelect: new Set()
};

// Assign IDs to all questions on load
if (typeof QUESTIONS !== 'undefined') {
    QUESTIONS.forEach((q, idx) => {
        q.id = idx;
    });
} else {
    window.QUESTIONS = [];
}

if (typeof QUESTIONS_MLN122 !== 'undefined') {
    QUESTIONS_MLN122.forEach((q, idx) => {
        q.id = idx;
    });
} else {
    window.QUESTIONS_MLN122 = [];
}

// Helper to get active questions array based on current subject
function getActiveQuestionsSet() {
    if (state.currentSubject === 'MLN122') {
        return (typeof QUESTIONS_MLN122 !== 'undefined') ? QUESTIONS_MLN122 : [];
    }
    return (typeof QUESTIONS !== 'undefined') ? QUESTIONS : [];
}

// Helper to compare user answer(s) with correct answer(s)
function isAnswerCorrect(userAns, correctAnswers) {
    if (!userAns || !correctAnswers) return false;
    let userArr = Array.isArray(userAns) ? userAns : userAns.toString().split('');
    let targetArr = Array.isArray(correctAnswers) ? correctAnswers : correctAnswers.toString().split('');
    
    userArr = Array.from(new Set(userArr.map(s => s.trim().toUpperCase()))).sort();
    targetArr = Array.from(new Set(targetArr.map(s => s.trim().toUpperCase()))).sort();
    
    if (userArr.length !== targetArr.length) return false;
    return userArr.every((val, idx) => val === targetArr[idx]);
}

// Local Storage Helper
function getStoragePrefix() {
    const subj = (state && state.currentSubject) ? state.currentSubject.toLowerCase() : 'mln111';
    return `quizlet_${subj}_`;
}

function saveToStorage(key, value, isGlobal = false) {
    try {
        const prefix = isGlobal ? 'quizlet_global_' : getStoragePrefix();
        localStorage.setItem(prefix + key, JSON.stringify(value));
    } catch (e) {
        console.error('Error saving to LocalStorage:', e);
    }
}

function loadFromStorage(key, defaultValue, isGlobal = false) {
    try {
        const prefix = isGlobal ? 'quizlet_global_' : getStoragePrefix();
        const item = localStorage.getItem(prefix + key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.error('Error loading from LocalStorage:', e);
        return defaultValue;
    }
}

// ==========================================================================
// APP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load data from LocalStorage
    state.theme = loadFromStorage('theme', 'dark', true);
    state.currentSubject = loadFromStorage('currentSubject', 'MLN111', true);
    state.activeMode = loadFromStorage('activeMode', 'flashcard', true);

    state.pageFilter = loadFromStorage('pageFilter', 'all');
    state.flashcardIndex = loadFromStorage('flashcardIndex', 0);
    state.quizIndex = loadFromStorage('quizIndex', 0);
    state.quizScore = loadFromStorage('quizScore', { correct: 0, incorrect: 0, answered: false, selectedKey: null });
    state.showOptionsOnFront = loadFromStorage('showOptionsOnFront', false);
    state.quizSubMode = loadFromStorage('quizSubMode', 'study');
    state.exam = loadFromStorage('exam', {
        running: false,
        finished: false,
        questions: [],
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        answered: false,
        selectedKey: null,
        totalQuestions: 60
    });
    state.quizAnswers = loadFromStorage('quizAnswers', {});
    
    // Set current active index based on active mode
    if (state.activeMode === 'quiz') {
        state.currentIndex = (state.quizSubMode === 'exam') ? state.exam.currentIndex : state.quizIndex;
    } else {
        state.currentIndex = state.flashcardIndex;
    }
    
    const savedStars = loadFromStorage('starred', []);
    state.starredQuestionIds = new Set(savedStars);
    
    const savedLearned = loadFromStorage('learned', []);
    state.learnedQuestionIds = new Set(savedLearned);

    // 2. Apply theme & subject UI
    applyTheme();
    updateSubjectUI();

    // 3. Generate page filter options dynamically
    generatePageFilterOptions();

    // 4. Set page filter dropdown value
    const pageSelect = document.getElementById('page-filter');
    if (pageSelect) {
        pageSelect.value = state.pageFilter;
    }

    // 5. Build deck & render
    buildDeck();
    switchMode(state.activeMode);
    updateGlobalProgress();
    updateStarredBtnCounter();

    // Update show options front button active style on start
    const showOptionsBtn = document.getElementById('btn-show-options-front');
    if (showOptionsBtn && state.showOptionsOnFront) {
        showOptionsBtn.classList.add('active');
    }

    // 6. Bind keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
});

// Subject Switching Logic
function switchSubject(subject) {
    if (state.currentSubject === subject) return;

    if (state.activeMode === 'flashcard') {
        state.flashcardIndex = state.currentIndex;
        saveToStorage('flashcardIndex', state.flashcardIndex);
    } else if (state.activeMode === 'quiz') {
        if (state.quizSubMode === 'study') {
            state.quizIndex = state.currentIndex;
            saveToStorage('quizIndex', state.quizIndex);
        }
    }

    state.currentSubject = subject;
    saveToStorage('currentSubject', subject, true);

    // Reset page filter and search query when switching subjects so user doesn't get stuck on invalid page ranges
    state.pageFilter = 'all';
    saveToStorage('pageFilter', 'all');
    state.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    updateSubjectUI();

    state.flashcardIndex = loadFromStorage('flashcardIndex', 0);
    state.quizIndex = loadFromStorage('quizIndex', 0);
    state.quizScore = loadFromStorage('quizScore', { correct: 0, incorrect: 0, answered: false, selectedKey: null });
    state.quizSubMode = loadFromStorage('quizSubMode', 'study');
    state.exam = loadFromStorage('exam', {
        running: false,
        finished: false,
        questions: [],
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        answered: false,
        selectedKey: null,
        totalQuestions: 60
    });
    state.quizAnswers = loadFromStorage('quizAnswers', {});

    const savedStars = loadFromStorage('starred', []);
    state.starredQuestionIds = new Set(savedStars);
    
    const savedLearned = loadFromStorage('learned', []);
    state.learnedQuestionIds = new Set(savedLearned);

    if (state.activeMode === 'quiz') {
        state.currentIndex = (state.quizSubMode === 'exam') ? state.exam.currentIndex : state.quizIndex;
    } else {
        state.currentIndex = state.flashcardIndex;
    }

    generatePageFilterOptions();

    const pageSelect = document.getElementById('page-filter');
    if (pageSelect) {
        pageSelect.value = state.pageFilter;
    }

    buildDeck();
    renderActiveMode();
    updateGlobalProgress();
    updateStarredBtnCounter();
    flashSaveStatus();
}

function updateSubjectUI() {
    document.querySelectorAll('.subject-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`subject-${state.currentSubject.toLowerCase()}`);
    if (activeTab) activeTab.classList.add('active');

    const subBrand = document.querySelector('.sub-brand');
    if (subBrand) subBrand.textContent = state.currentSubject;

    const examSubjTitle = document.getElementById('exam-subject-title');
    if (examSubjTitle) examSubjTitle.textContent = state.currentSubject;

    document.title = `Quizlet ${state.currentSubject} - Chuẩn Nhung Hoàng`;
    updateSubjectBadges();
}

function updateSubjectBadges() {
    const badge111 = document.getElementById('badge-mln111');
    const badge122 = document.getElementById('badge-mln122');

    const count111 = (typeof QUESTIONS !== 'undefined') ? QUESTIONS.length : 0;
    const count122 = (typeof QUESTIONS_MLN122 !== 'undefined') ? QUESTIONS_MLN122.length : 0;

    if (badge111) badge111.textContent = `${count111} câu`;
    if (badge122) badge122.textContent = `${count122} câu`;
}

// Generate page ranges dynamically
function generatePageFilterOptions() {
    const pageSelect = document.getElementById('page-filter');
    if (!pageSelect) return;

    pageSelect.innerHTML = '';
    const activeSet = getActiveQuestionsSet();
    let maxPage = 1;
    activeSet.forEach(q => {
        if (q.page > maxPage) maxPage = q.page;
    });

    const defaultOpt = document.createElement('option');
    defaultOpt.value = 'all';
    defaultOpt.textContent = `Tất cả trang (1-${maxPage})`;
    pageSelect.appendChild(defaultOpt);

    const validValues = ['all'];
    const step = 10;
    for (let i = 1; i <= maxPage; i += step) {
        const start = i;
        const end = Math.min(i + step - 1, maxPage);
        const option = document.createElement('option');
        option.value = `${start}-${end}`;
        option.textContent = `Trang ${start} - ${end}`;
        pageSelect.appendChild(option);
        validValues.push(option.value);
    }

    if (!validValues.includes(state.pageFilter)) {
        state.pageFilter = 'all';
        saveToStorage('pageFilter', 'all');
    }
}

// ==========================================================================
// THEME & NAVIGATION CONTROLLERS
// ==========================================================================
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveToStorage('theme', state.theme);
}

function applyTheme() {
    const body = document.body;
    const themeText = document.getElementById('theme-text');
    const themeIcon = document.querySelector('#theme-toggle i');
    
    if (state.theme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        if (themeText) themeText.textContent = 'Chế độ sáng';
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        if (themeText) themeText.textContent = 'Chế độ tối';
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }
}

function switchMode(mode) {
    // Save current index for the old mode
    if (state.activeMode === 'flashcard') {
        state.flashcardIndex = state.currentIndex;
        saveToStorage('flashcardIndex', state.flashcardIndex);
    } else if (state.activeMode === 'quiz') {
        if (state.quizSubMode === 'exam') {
            if (state.exam && state.exam.running) {
                state.exam.currentIndex = state.currentIndex;
                saveToStorage('exam', state.exam);
            }
        } else {
            state.quizIndex = state.currentIndex;
            saveToStorage('quizIndex', state.quizIndex);
        }
    }

    state.activeMode = mode;
    saveToStorage('activeMode', mode);

    // Update sidebar navigation active style
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`mode-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Toggle active sections in main content
    document.querySelectorAll('.mode-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(`section-${mode}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Restore index and scoreboard for the new mode
    if (mode === 'flashcard') {
        state.currentIndex = state.flashcardIndex;
    } else if (mode === 'quiz') {
        state.currentIndex = (state.quizSubMode === 'exam') ? state.exam.currentIndex : state.quizIndex;
        updateQuizScoreboard();
        
        const studyTab = document.getElementById('quiz-tab-study');
        const examTab = document.getElementById('quiz-tab-exam');
        if (studyTab && examTab) {
            if (state.quizSubMode === 'exam') {
                studyTab.classList.remove('active');
                examTab.classList.add('active');
            } else {
                studyTab.classList.add('active');
                examTab.classList.remove('active');
            }
        }
    }

    // Render active mode
    renderActiveMode();
}

function renderActiveMode() {
    if (state.activeMode === 'flashcard') {
        renderFlashcard();
    } else if (state.activeMode === 'quiz') {
        renderQuizQuestion();
    } else if (state.activeMode === 'list') {
        renderList();
    }
}

// ==========================================================================
// DATA DECK FILTERS & SHUFFLE
// ==========================================================================
function buildDeck() {
    let filtered = [...getActiveQuestionsSet()];

    // 1. Apply page range filter
    if (state.pageFilter !== 'all') {
        const [start, end] = state.pageFilter.split('-').map(Number);
        filtered = filtered.filter(q => q.page >= start && q.page <= end);
    }

    // 2. Apply search filter
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(q => {
            const inQuestion = q.question.toLowerCase().includes(query);
            let inOptions = false;
            for (let k in q.options) {
                if (q.options[k].toLowerCase().includes(query)) {
                    inOptions = true;
                    break;
                }
            }
            return inQuestion || inOptions;
        });
    }

    // 3. Apply starred only filter
    if (state.starredOnly) {
        filtered = filtered.filter(q => state.starredQuestionIds.has(q.id));
    }

    state.currentDeck = filtered;
    state.originalDeckOrder = [...filtered];

    // Reset index if it exceeds boundaries of the filtered deck
    if (state.activeMode === 'quiz' && state.quizSubMode === 'exam') {
        // Do not reset index based on currentDeck length
    } else {
        if (state.currentIndex >= state.currentDeck.length) {
            state.currentIndex = 0;
        }
    }
    
    // Maintain shuffle if active
    if (state.isShuffled) {
        shuffleArray(state.currentDeck);
    }

    // Save index under appropriate mode name
    if (state.activeMode === 'quiz') {
        if (state.quizSubMode === 'exam') {
            if (state.exam && state.exam.running) {
                state.exam.currentIndex = state.currentIndex;
                saveToStorage('exam', state.exam);
            }
        } else {
            state.quizIndex = state.currentIndex;
            saveToStorage('quizIndex', state.quizIndex);
        }
    } else {
        state.flashcardIndex = state.currentIndex;
        saveToStorage('flashcardIndex', state.flashcardIndex);
    }
}

function shuffleDeck() {
    state.isShuffled = !state.isShuffled;
    const shuffleBtn = document.getElementById('btn-shuffle');
    
    if (state.isShuffled) {
        shuffleBtn.classList.add('active');
        shuffleArray(state.currentDeck);
    } else {
        shuffleBtn.classList.remove('active');
        state.currentDeck = [...state.originalDeckOrder];
    }
    
    state.currentIndex = 0;
    renderActiveMode();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Handlers for Filters UI
function handlePageFilter() {
    const pageSelect = document.getElementById('page-filter');
    state.pageFilter = pageSelect.value;
    saveToStorage('pageFilter', state.pageFilter);
    state.currentIndex = 0;
    
    // Notify user visually
    flashSaveStatus();
    buildDeck();
    renderActiveMode();
}

function handleSearch() {
    const searchInput = document.getElementById('search-input');
    state.searchQuery = searchInput.value;
    state.currentIndex = 0;
    buildDeck();
    renderActiveMode();
}

function toggleStarFilter() {
    state.starredOnly = !state.starredOnly;
    const starBtn = document.getElementById('star-filter-btn');
    
    if (state.starredOnly) {
        starBtn.classList.add('active');
    } else {
        starBtn.classList.remove('active');
    }
    
    state.currentIndex = 0;
    buildDeck();
    renderActiveMode();
}

// ==========================================================================
// 1. FLASHCARD MODE LOGIC
// ==========================================================================
function renderFlashcard() {
    const flashcard = document.getElementById('main-flashcard');
    const totalCountSpan = document.getElementById('total-card-num');
    const currentNumSpan = document.getElementById('current-card-num');
    const markLearnedBtn = document.getElementById('btn-mark-learned');

    // Remove flip class on card load
    if (flashcard) flashcard.classList.remove('flipped');

    if (state.currentDeck.length === 0) {
        document.getElementById('card-question-text').innerHTML = `<span class="muted-text"><i class="fa-regular fa-folder-open" style="font-size: 40px; margin-bottom: 15px; display: block; color: var(--text-muted);"></i>Không tìm thấy câu hỏi phù hợp bộ lọc.<br>Vui lòng đổi bộ lọc khác.</span>`;
        if (totalCountSpan) totalCountSpan.textContent = '0';
        if (currentNumSpan) currentNumSpan.textContent = '0';
        return;
    }

    const currentQuestion = state.currentDeck[state.currentIndex];
    
    // Render Counts
    if (totalCountSpan) totalCountSpan.textContent = state.currentDeck.length;
    if (currentNumSpan) currentNumSpan.textContent = state.currentIndex + 1;

    // Render Front Question
    document.getElementById('card-question-text').textContent = currentQuestion.question;
    document.getElementById('card-page-num').textContent = currentQuestion.page;

    // Render Front Options if toggled
    const frontOptionsContainer = document.getElementById('card-options-front');
    if (frontOptionsContainer) {
        if (state.showOptionsOnFront) {
            flashcard.classList.add('has-options-front');
            frontOptionsContainer.innerHTML = '';
            for (let key in currentQuestion.options) {
                const optionVal = currentQuestion.options[key];
                const optionPill = document.createElement('div');
                optionPill.className = 'option-pill-front';
                optionPill.innerHTML = `
                    <div class="option-letter-front">${key}</div>
                    <div class="option-text-front">${optionVal}</div>
                `;
                frontOptionsContainer.appendChild(optionPill);
            }
        } else {
            flashcard.classList.remove('has-options-front');
            frontOptionsContainer.innerHTML = '';
        }
    }

    // Render Back Info
    document.getElementById('card-question-text-back').textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById('card-options-back');
    optionsContainer.innerHTML = '';

    for (let key in currentQuestion.options) {
        const optionVal = currentQuestion.options[key];
        const isCorrect = currentQuestion.correctAnswers.includes(key);

        // If showOptionsOnFront is true, only render the correct answer on the back
        if (state.showOptionsOnFront && !isCorrect) {
            continue;
        }

        const optionPill = document.createElement('div');
        optionPill.className = `option-pill-back ${isCorrect ? 'correct-answer' : ''}`;
        
        optionPill.innerHTML = `
            <div class="option-letter-back">${key}</div>
            <div class="option-text-back">${optionVal}</div>
        `;
        optionsContainer.appendChild(optionPill);
    }

    // Render explanation on back of card if available
    if (currentQuestion.explanation) {
        const expDiv = document.createElement('div');
        expDiv.className = 'card-explanation-box';
        expDiv.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${currentQuestion.explanation}</span>`;
        optionsContainer.appendChild(expDiv);
    }

    // Toggle Star Active Style
    const isStarred = state.starredQuestionIds.has(currentQuestion.id);
    const starIconFront = document.getElementById('card-star-icon');
    const starIconBack = document.getElementById('card-star-icon-back');
    
    if (isStarred) {
        starIconFront.className = 'fa-solid fa-star';
        starIconFront.parentElement.classList.add('active');
        starIconBack.className = 'fa-solid fa-star';
        starIconBack.parentElement.classList.add('active');
    } else {
        starIconFront.className = 'fa-regular fa-star';
        starIconFront.parentElement.classList.remove('active');
        starIconBack.className = 'fa-regular fa-star';
        starIconBack.parentElement.classList.remove('active');
    }

    // Toggle Learned Checkbox Style
    const isLearned = state.learnedQuestionIds.has(currentQuestion.id);
    if (isLearned) {
        markLearnedBtn.className = 'control-btn learned-active';
        markLearnedBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    } else {
        markLearnedBtn.className = 'control-btn';
        markLearnedBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    }
}

function toggleOptionsOnFront() {
    state.showOptionsOnFront = !state.showOptionsOnFront;
    saveToStorage('showOptionsOnFront', state.showOptionsOnFront);
    
    const btn = document.getElementById('btn-show-options-front');
    if (btn) {
        if (state.showOptionsOnFront) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
    
    renderFlashcard();
}

function flipCard() {
    const flashcard = document.getElementById('main-flashcard');
    if (state.currentDeck.length > 0) {
        flashcard.classList.toggle('flipped');
    }
}

function nextCard() {
    if (state.currentDeck.length === 0) return;
    state.currentIndex = (state.currentIndex + 1) % state.currentDeck.length;
    saveToStorage('flashcardIndex', state.currentIndex);
    renderFlashcard();
}

function prevCard() {
    if (state.currentDeck.length === 0) return;
    state.currentIndex = (state.currentIndex - 1 + state.currentDeck.length) % state.currentDeck.length;
    saveToStorage('flashcardIndex', state.currentIndex);
    renderFlashcard();
}

function toggleStarCurrent() {
    if (state.currentDeck.length === 0) return;
    const currentQ = state.currentDeck[state.currentIndex];
    
    if (state.starredQuestionIds.has(currentQ.id)) {
        state.starredQuestionIds.delete(currentQ.id);
    } else {
        state.starredQuestionIds.add(currentQ.id);
    }

    saveToStorage('starred', Array.from(state.starredQuestionIds));
    updateStarredBtnCounter();
    renderFlashcard();
    flashSaveStatus();
}

function markCurrentAsLearned() {
    if (state.currentDeck.length === 0) return;
    const currentQ = state.currentDeck[state.currentIndex];
    
    if (state.learnedQuestionIds.has(currentQ.id)) {
        state.learnedQuestionIds.delete(currentQ.id);
    } else {
        state.learnedQuestionIds.add(currentQ.id);
    }

    saveToStorage('learned', Array.from(state.learnedQuestionIds));
    updateGlobalProgress();
    renderFlashcard();
    flashSaveStatus();
}

// ==========================================================================
// 2. QUIZ MODE LOGIC
// ==========================================================================
function resetQuizScore() {
    state.quizScore.correct = 0;
    state.quizScore.incorrect = 0;
    state.quizScore.answered = false;
    updateQuizScoreboard();
}

function updateQuizScoreboard() {
    const correctEl = document.getElementById('quiz-correct-count');
    const incorrectEl = document.getElementById('quiz-incorrect-count');
    const scoreEl = document.getElementById('quiz-score-percent');
    const scoreboard = document.getElementById('quiz-scoreboard');
    const scoreCard = document.getElementById('quiz-score-card');
    if (!correctEl || !incorrectEl || !scoreEl) return;

    if (state.quizSubMode === 'exam') {
        if (scoreboard) scoreboard.classList.add('hidden');
    } else {
        if (scoreboard) scoreboard.classList.remove('hidden');
        // Hide score card in study mode, only show correct/incorrect
        if (scoreCard) scoreCard.style.display = 'none';
        
        let correctCount = 0;
        let incorrectCount = 0;
        for (let qId in state.quizAnswers) {
            if (state.quizAnswers[qId] && state.quizAnswers[qId].isCorrect) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        }
        
        correctEl.textContent = correctCount;
        incorrectEl.textContent = incorrectCount;
    }
}

function updateExamProgress() {
    const wrapper = document.getElementById('exam-progress-wrapper');
    const fill = document.getElementById('exam-progress-fill');
    const answeredEl = document.getElementById('exam-answered-count');
    const totalEl = document.getElementById('exam-total-count');
    
    if (!wrapper || !fill) return;
    
    if (state.quizSubMode === 'exam' && state.exam && state.exam.running) {
        wrapper.classList.remove('hidden');
        const total = state.exam.questions.length;
        let answered = 0;
        state.exam.questions.forEach(q => {
            if (q.userAnswer) answered++;
        });
        
        answeredEl.textContent = answered;
        totalEl.textContent = total;
        
        const percent = total > 0 ? (answered / total * 100) : 0;
        fill.style.width = percent + '%';
        
        if (answered === total) {
            fill.classList.add('complete');
        } else {
            fill.classList.remove('complete');
        }
    } else {
        wrapper.classList.add('hidden');
    }
}

function getActiveQuizQuestion() {
    if (state.quizSubMode === 'exam') {
        if (state.exam && state.exam.questions && state.exam.questions.length > 0) {
            return state.exam.questions[state.exam.currentIndex];
        }
        return null;
    } else {
        if (state.currentDeck && state.currentDeck.length > 0) {
            return state.currentDeck[state.currentIndex];
        }
        return null;
    }
}

function switchQuizSubMode(subMode) {
    state.quizSubMode = subMode;
    saveToStorage('quizSubMode', subMode);

    // Update active tab styling
    const studyTab = document.getElementById('quiz-tab-study');
    const examTab = document.getElementById('quiz-tab-exam');
    if (studyTab && examTab) {
        if (subMode === 'exam') {
            studyTab.classList.remove('active');
            examTab.classList.add('active');
        } else {
            studyTab.classList.add('active');
            examTab.classList.remove('active');
        }
    }

    // Set correct active index based on active subMode
    if (subMode === 'exam') {
        state.currentIndex = state.exam.running ? state.exam.currentIndex : 0;
    } else {
        state.currentIndex = state.quizIndex;
    }

    updateQuizScoreboard();
    renderQuizQuestion();
}

function startExam() {
    const qCountInput = document.getElementById('exam-q-count');
    let qCount = qCountInput ? parseInt(qCountInput.value, 10) : 60;
    if (isNaN(qCount) || qCount < 1) qCount = 60;

    if (state.currentDeck.length === 0) {
        alert('Không có câu hỏi trong bộ lọc hiện tại để tạo đề thi. Vui lòng thay đổi bộ lọc trang hoặc xóa ô tìm kiếm.');
        return;
    }

    const N = Math.min(qCount, state.currentDeck.length);
    const shuffled = [...state.currentDeck];
    shuffleArray(shuffled);
    const examQ = shuffled.slice(0, N);

    state.exam = {
        running: true,
        finished: false,
        questions: examQ,
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        answered: false,
        selectedKey: null,
        totalQuestions: N
    };

    state.currentIndex = 0;
    saveToStorage('exam', state.exam);
    saveToStorage('quizSubMode', 'exam');
    
    // Also visually reflect the tab
    const studyTab = document.getElementById('quiz-tab-study');
    const examTab = document.getElementById('quiz-tab-exam');
    if (studyTab && examTab) {
        studyTab.classList.remove('active');
        examTab.classList.add('active');
    }

    updateQuizScoreboard();
    updateExamProgress();
    
    // Hide exam review panel when starting a new exam
    const reviewPanel = document.getElementById('exam-review-panel');
    if (reviewPanel) reviewPanel.classList.add('hidden');

    renderQuizQuestion();
}

function exitExam() {
    state.exam.running = false;
    state.exam.finished = false;
    state.exam.questions = [];
    state.exam.currentIndex = 0;
    saveToStorage('exam', state.exam);

    state.quizSubMode = 'study';
    saveToStorage('quizSubMode', 'study');
    state.currentIndex = state.quizIndex;
    const studyTab = document.getElementById('quiz-tab-study');
    const examTab = document.getElementById('quiz-tab-exam');
    if (studyTab && examTab) {
        studyTab.classList.add('active');
        examTab.classList.remove('active');
    }

    updateQuizScoreboard();
    updateExamProgress();
    
    // Hide exam review panel when exiting the exam
    const reviewPanel = document.getElementById('exam-review-panel');
    if (reviewPanel) reviewPanel.classList.add('hidden');

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const questionTextEl = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const starIcon = document.getElementById('quiz-star-icon');
    const mainCard = document.getElementById('quiz-main-card');
    const scoreboard = document.getElementById('quiz-scoreboard');
    const setupCard = document.getElementById('quiz-exam-setup');
    const resultCard = document.getElementById('quiz-exam-result');

    if (state.quizSubMode === 'exam') {
        if (!state.exam.running) {
            // Hide exam questions, result cards, and scoreboard. Show setup card.
            if (mainCard) mainCard.classList.add('hidden');
            if (scoreboard) scoreboard.classList.add('hidden');
            if (state.exam.finished) {
                if (setupCard) setupCard.classList.add('hidden');
                if (resultCard) {
                    resultCard.classList.remove('hidden');
                    
                    const score = (state.exam.correct / state.exam.totalQuestions * 10).toFixed(1);
                    const badge = document.getElementById('exam-result-score');
                    if (badge) {
                        badge.textContent = score;
                        if (parseFloat(score) >= 5.0) {
                            badge.className = 'result-badge pass';
                        } else {
                            badge.className = 'result-badge fail';
                        }
                    }
                    
                    const correctDetail = document.getElementById('exam-correct-detail');
                    const incorrectDetail = document.getElementById('exam-incorrect-detail');
                    const totalDetail = document.getElementById('exam-total-detail');
                    if (correctDetail) correctDetail.textContent = state.exam.correct;
                    if (incorrectDetail) incorrectDetail.textContent = state.exam.incorrect;
                    if (totalDetail) totalDetail.textContent = state.exam.totalQuestions;

                    const titleEl = document.getElementById('exam-result-title');
                    if (titleEl) {
                        const s = parseFloat(score);
                        if (s >= 8.5) titleEl.textContent = 'Xuất sắc! Bạn đã sẵn sàng cho kỳ thi chính thức.';
                        else if (s >= 7.0) titleEl.textContent = 'Khá tốt! Luyện tập thêm một chút nữa nhé.';
                        else if (s >= 5.0) titleEl.textContent = 'Đạt! Bạn cần ôn tập thêm để nâng cao điểm số.';
                        else titleEl.textContent = 'Chưa đạt! Hãy cố gắng ôn tập kỹ hơn.';
                    }
                }
            } else {
                if (resultCard) resultCard.classList.add('hidden');
                if (setupCard) {
                    setupCard.classList.remove('hidden');
                    const qCountInput = document.getElementById('exam-q-count');
                    if (qCountInput) {
                        qCountInput.value = state.exam.totalQuestions || 60;
                    }
                }
            }
            return;
        }

        // Exam is running! Show main card. Scoreboard is hidden in updateQuizScoreboard.
        if (mainCard) mainCard.classList.remove('hidden');
        if (setupCard) setupCard.classList.add('hidden');
        if (resultCard) resultCard.classList.add('hidden');
        updateExamProgress();

        const q = getActiveQuizQuestion();
        if (!q) {
            questionTextEl.innerHTML = `<span class="muted-text"><i class="fa-regular fa-folder-open" style="font-size: 40px; margin-bottom: 15px; display: block; color: var(--text-muted);"></i>Đề thi trống hoặc có lỗi xảy ra.</span>`;
            optionsContainer.innerHTML = '';
            feedbackBox.classList.add('hidden');
            return;
        }

        // Set page label & star status
        document.getElementById('quiz-page-num').textContent = q.page;
        if (state.starredQuestionIds.has(q.id)) {
            starIcon.className = 'fa-solid fa-star';
            starIcon.parentElement.classList.add('active');
        } else {
            starIcon.className = 'fa-regular fa-star';
            starIcon.parentElement.classList.remove('active');
        }

        // Set question text
        const isMulti = q.correctAnswers && q.correctAnswers.length > 1;
        const badgeHtml = isMulti ? `<span class="multi-select-badge"><i class="fa-solid fa-list-check"></i> Chọn ${q.correctAnswers.length} đáp án</span>` : '';
        questionTextEl.innerHTML = `[Câu ${state.exam.currentIndex + 1}/${state.exam.totalQuestions}] ${q.question} ${badgeHtml}`;

        // Render options
        optionsContainer.innerHTML = '';
        let userAnsArr = Array.isArray(q.userAnswer) ? q.userAnswer : (q.userAnswer ? q.userAnswer.split('') : []);
        for (let key in q.options) {
            const optionVal = q.options[key];
            
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            if (userAnsArr.includes(key)) {
                optionBtn.classList.add('selected');
            }
            optionBtn.innerHTML = `
                <div class="quiz-option-letter">${key}</div>
                <div class="quiz-option-text">${optionVal}</div>
            `;
            optionBtn.onclick = () => selectQuizOption(key, optionBtn);
            optionsContainer.appendChild(optionBtn);
        }

        // Always hide feedback box in exam taking mode
        feedbackBox.classList.add('hidden');

        // Update nav counters
        const currentQuizNum = document.getElementById('current-quiz-num');
        const totalQuizNum = document.getElementById('total-quiz-num');
        if (currentQuizNum) currentQuizNum.textContent = state.exam.currentIndex + 1;
        if (totalQuizNum) totalQuizNum.textContent = state.exam.questions.length;

        // Next/Submit button styling
        const nextBtn = document.getElementById('quiz-next-btn-nav');
        if (nextBtn) {
            if (state.exam.currentIndex === state.exam.questions.length - 1) {
                nextBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Nộp bài';
                nextBtn.classList.add('submit-exam-btn');
            } else {
                nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
                nextBtn.classList.remove('submit-exam-btn');
            }
        }

    } else {
        // Study mode
        if (mainCard) mainCard.classList.remove('hidden');
        if (scoreboard) scoreboard.classList.remove('hidden');
        if (setupCard) setupCard.classList.add('hidden');
        if (resultCard) resultCard.classList.add('hidden');

        if (state.currentDeck.length === 0) {
            questionTextEl.innerHTML = `<span class="muted-text"><i class="fa-regular fa-folder-open" style="font-size: 40px; margin-bottom: 15px; display: block; color: var(--text-muted);"></i>Không có câu hỏi trong bộ lọc hiện tại.</span>`;
            optionsContainer.innerHTML = '';
            feedbackBox.classList.add('hidden');
            return;
        }

        const q = getActiveQuizQuestion();
        if (!q) return;

        // Set page label & star status
        document.getElementById('quiz-page-num').textContent = q.page;
        if (state.starredQuestionIds.has(q.id)) {
            starIcon.className = 'fa-solid fa-star';
            starIcon.parentElement.classList.add('active');
        } else {
            starIcon.className = 'fa-regular fa-star';
            starIcon.parentElement.classList.remove('active');
        }

        const isMulti = q.correctAnswers && q.correctAnswers.length > 1;
        const badgeHtml = isMulti ? `<span class="multi-select-badge"><i class="fa-solid fa-list-check"></i> Chọn ${q.correctAnswers.length} đáp án</span>` : '';

        // Set question text
        questionTextEl.innerHTML = `${q.question} ${badgeHtml}`;

        // Render options
        optionsContainer.innerHTML = '';
        const savedAnswer = state.quizAnswers[q.id];

        for (let key in q.options) {
            const optionVal = q.options[key];
            
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';

            if (!savedAnswer && isMulti && state.quizPendingMultiSelect && state.quizPendingMultiSelect.has(key)) {
                optionBtn.classList.add('selected');
            }

            optionBtn.innerHTML = `
                <div class="quiz-option-letter">${key}</div>
                <div class="quiz-option-text">${optionVal}</div>
            `;
            if (!savedAnswer) {
                optionBtn.onclick = () => selectQuizOption(key, optionBtn);
            }
            optionsContainer.appendChild(optionBtn);
        }

        if (!savedAnswer && isMulti) {
            const confirmBtn = document.createElement('button');
            confirmBtn.id = 'quiz-confirm-multi-btn';
            confirmBtn.className = 'confirm-multi-btn';
            const selectedCount = state.quizPendingMultiSelect ? state.quizPendingMultiSelect.size : 0;
            confirmBtn.innerHTML = `<i class="fa-solid fa-check"></i> Xác nhận đáp án (${selectedCount}/${q.correctAnswers.length})`;
            if (selectedCount === 0) {
                confirmBtn.style.opacity = '0.5';
                confirmBtn.style.cursor = 'not-allowed';
                confirmBtn.disabled = true;
            } else {
                confirmBtn.style.opacity = '1';
                confirmBtn.style.cursor = 'pointer';
                confirmBtn.disabled = false;
            }
            confirmBtn.onclick = () => submitMultiSelectAnswer();
            optionsContainer.appendChild(confirmBtn);
        }

        // Restore answered state elements if already answered
        if (savedAnswer) {
            const optionButtons = optionsContainer.querySelectorAll('.quiz-option');
            let userAnsArr = Array.isArray(savedAnswer.selectedKeys) ? savedAnswer.selectedKeys : (savedAnswer.selectedKey ? savedAnswer.selectedKey.split('') : []);

            optionButtons.forEach(btn => {
                btn.classList.add('disabled');
                const letter = btn.querySelector('.quiz-option-letter').textContent.trim();
                
                // Highlight correct answer
                if (q.correctAnswers.includes(letter)) {
                    btn.classList.add('correct');
                }
                
                // Highlight selected answer if incorrect
                if (userAnsArr.includes(letter) && !q.correctAnswers.includes(letter)) {
                    btn.classList.add('incorrect');
                }
            });

            const feedbackIcon = document.getElementById('feedback-icon');
            const feedbackMessage = document.getElementById('feedback-message');
            const isCorrect = savedAnswer.isCorrect;

            if (isCorrect) {
                feedbackIcon.className = 'fa-solid fa-circle-check correct';
                feedbackMessage.innerHTML = `Chính xác! Bạn đã chọn đúng tất cả các đáp án.` +
                    (q.explanation ? `<div class="quiz-explanation-text"><i class="fa-solid fa-circle-info"></i> ${q.explanation}</div>` : '');
            } else {
                feedbackIcon.className = 'fa-solid fa-circle-xmark incorrect';
                feedbackMessage.innerHTML = `Sai mất rồi. Đáp án đúng là: ${q.correctAnswers.join(', ')}` +
                    (q.explanation ? `<div class="quiz-explanation-text"><i class="fa-solid fa-circle-info"></i> ${q.explanation}</div>` : '');
            }

            feedbackBox.classList.remove('hidden');
        } else {
            feedbackBox.classList.add('hidden');
        }

        // Update nav counters
        const currentQuizNum = document.getElementById('current-quiz-num');
        const totalQuizNum = document.getElementById('total-quiz-num');
        if (currentQuizNum) currentQuizNum.textContent = state.currentIndex + 1;
        if (totalQuizNum) totalQuizNum.textContent = state.currentDeck.length;

        // Reset Next button navigation style
        const nextBtn = document.getElementById('quiz-next-btn-nav');
        if (nextBtn) {
            nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            nextBtn.classList.remove('submit-exam-btn');
        }
    }
}

function selectQuizOption(selectedKey, optionBtnElement) {
    const isExam = (state.quizSubMode === 'exam');
    const q = getActiveQuizQuestion();
    if (!q) return;

    if (isExam) {
        const isMulti = q.correctAnswers && q.correctAnswers.length > 1;
        if (isMulti) {
            let userAnsArr = Array.isArray(q.userAnswer) ? [...q.userAnswer] : (q.userAnswer ? q.userAnswer.split('') : []);
            if (userAnsArr.includes(selectedKey)) {
                userAnsArr = userAnsArr.filter(k => k !== selectedKey);
            } else {
                userAnsArr.push(selectedKey);
            }
            q.userAnswer = userAnsArr;
        } else {
            q.userAnswer = selectedKey;
        }
        saveToStorage('exam', state.exam);
        renderQuizQuestion();
        updateExamProgress();
        return;
    }

    // Study mode grading
    if (state.quizAnswers[q.id]) return; // Prevent double answering

    const isMulti = q.correctAnswers && q.correctAnswers.length > 1;
    if (isMulti) {
        if (!state.quizPendingMultiSelect) {
            state.quizPendingMultiSelect = new Set();
        }
        if (state.quizPendingMultiSelect.has(selectedKey)) {
            state.quizPendingMultiSelect.delete(selectedKey);
        } else {
            state.quizPendingMultiSelect.add(selectedKey);
        }
        renderQuizQuestion();
        return;
    }

    const isCorrect = isAnswerCorrect(selectedKey, q.correctAnswers);
    state.quizAnswers[q.id] = {
        selectedKey: selectedKey,
        selectedKeys: [selectedKey],
        isCorrect: isCorrect
    };
    saveToStorage('quizAnswers', state.quizAnswers);

    // Disable all options and show results
    const optionButtons = document.querySelectorAll('.quiz-option');
    optionButtons.forEach(btn => {
        btn.classList.add('disabled');
        const letter = btn.querySelector('.quiz-option-letter').textContent.trim();
        
        // Highlight correct answer
        if (q.correctAnswers.includes(letter)) {
            btn.classList.add('correct');
        }
        
        // Highlight selected answer if incorrect
        if (letter === selectedKey && !q.correctAnswers.includes(letter)) {
            btn.classList.add('incorrect');
        }
    });

    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackBox = document.getElementById('quiz-feedback-box');

    if (isCorrect) {
        optionBtnElement.classList.add('correct');
        
        // Add to learned database if not already
        if (!state.learnedQuestionIds.has(q.id)) {
            state.learnedQuestionIds.add(q.id);
            saveToStorage('learned', Array.from(state.learnedQuestionIds));
            updateGlobalProgress();
        }

        feedbackIcon.className = 'fa-solid fa-circle-check correct';
        feedbackMessage.innerHTML = `Chính xác! Bạn đã ghi nhớ được kiến thức này.` +
            (q.explanation ? `<div class="quiz-explanation-text"><i class="fa-solid fa-circle-info"></i> ${q.explanation}</div>` : '');
    } else {
        optionBtnElement.classList.add('incorrect');

        feedbackIcon.className = 'fa-solid fa-circle-xmark incorrect';
        feedbackMessage.innerHTML = `Sai mất rồi. Đáp án đúng là: ${q.correctAnswers.join(', ')}` +
            (q.explanation ? `<div class="quiz-explanation-text"><i class="fa-solid fa-circle-info"></i> ${q.explanation}</div>` : '');
    }

    updateQuizScoreboard();
    feedbackBox.classList.remove('hidden');
}

function submitMultiSelectAnswer() {
    const q = getActiveQuizQuestion();
    if (!q || !state.quizPendingMultiSelect || state.quizPendingMultiSelect.size === 0) return;
    if (state.quizAnswers[q.id]) return;

    const selectedArray = Array.from(state.quizPendingMultiSelect);
    const isCorrect = isAnswerCorrect(selectedArray, q.correctAnswers);

    state.quizAnswers[q.id] = {
        selectedKey: selectedArray.join(''),
        selectedKeys: selectedArray,
        isCorrect: isCorrect
    };
    saveToStorage('quizAnswers', state.quizAnswers);

    state.quizPendingMultiSelect.clear();

    if (isCorrect) {
        if (!state.learnedQuestionIds.has(q.id)) {
            state.learnedQuestionIds.add(q.id);
            saveToStorage('learned', Array.from(state.learnedQuestionIds));
            updateGlobalProgress();
        }
    }

    renderQuizQuestion();
    updateQuizScoreboard();
}

function prevQuizQuestion() {
    if (state.quizPendingMultiSelect) state.quizPendingMultiSelect.clear();
    const isExam = (state.quizSubMode === 'exam');
    
    if (isExam) {
        if (state.exam.questions.length === 0) return;
        if (state.exam.currentIndex > 0) {
            state.exam.currentIndex--;
            state.currentIndex = state.exam.currentIndex;
            saveToStorage('exam', state.exam);
            renderQuizQuestion();
        }
    } else {
        if (state.currentDeck.length === 0) return;
        state.currentIndex = (state.currentIndex - 1 + state.currentDeck.length) % state.currentDeck.length;
        state.quizIndex = state.currentIndex;
        saveToStorage('quizIndex', state.quizIndex);
        renderQuizQuestion();
    }
}

function nextQuizQuestion() {
    if (state.quizPendingMultiSelect) state.quizPendingMultiSelect.clear();
    const isExam = (state.quizSubMode === 'exam');
    
    if (isExam) {
        if (state.exam.questions.length === 0) return;
        
        if (state.exam.currentIndex === state.exam.questions.length - 1) {
            submitExam();
            return;
        }
        
        state.exam.currentIndex++;
        state.currentIndex = state.exam.currentIndex;
        saveToStorage('exam', state.exam);
    } else {
        if (state.currentDeck.length === 0) return;
        
        state.currentIndex = (state.currentIndex + 1) % state.currentDeck.length;
        state.quizIndex = state.currentIndex;
        saveToStorage('quizIndex', state.quizIndex);
    }
    
    renderQuizQuestion();
}

function submitExam() {
    let correctCount = 0;
    let incorrectCount = 0;
    state.exam.questions.forEach(q => {
        if (q.userAnswer) {
            if (isAnswerCorrect(q.userAnswer, q.correctAnswers)) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            incorrectCount++;
        }
    });
    
    state.exam.correct = correctCount;
    state.exam.incorrect = incorrectCount;
    state.exam.running = false;
    state.exam.finished = true;
    saveToStorage('exam', state.exam);
    
    renderQuizQuestion();
}

function toggleExamReview() {
    const reviewPanel = document.getElementById('exam-review-panel');
    if (!reviewPanel) return;

    const isHidden = reviewPanel.classList.contains('hidden');
    if (isHidden) {
        reviewPanel.classList.remove('hidden');
        renderExamReviewList();
        
        // Scroll smoothly to review panel
        setTimeout(() => {
            reviewPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        reviewPanel.classList.add('hidden');
    }
}

function renderExamReviewList() {
    const listContainer = document.getElementById('exam-review-list');
    if (!listContainer) return;

    if (!state.exam.questions || state.exam.questions.length === 0) {
        listContainer.innerHTML = `<div class="stats-pill" style="justify-content: center; padding: 40px;"><i class="fa-regular fa-folder-open"></i> Đề thi trống hoặc chưa có dữ liệu.</div>`;
        return;
    }

    listContainer.innerHTML = '';

    state.exam.questions.forEach((q, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'review-item';
        
        const isCorrect = q.userAnswer && isAnswerCorrect(q.userAnswer, q.correctAnswers);
        const isAnswered = !!q.userAnswer && (Array.isArray(q.userAnswer) ? q.userAnswer.length > 0 : true);
        
        let statusClass = 'unanswered';
        let statusText = 'Chưa trả lời';
        if (isAnswered) {
            if (isCorrect) {
                statusClass = 'correct';
                statusText = 'Đúng';
            } else {
                statusClass = 'incorrect';
                statusText = 'Sai';
            }
        }

        let userAnsArr = Array.isArray(q.userAnswer) ? q.userAnswer : (q.userAnswer ? q.userAnswer.split('') : []);

        let optionsHtml = '';
        for (let key in q.options) {
            const isOptionCorrect = q.correctAnswers.includes(key);
            const isOptionSelected = userAnsArr.includes(key);
            
            let optionClass = '';
            if (isOptionCorrect) {
                optionClass = 'correct';
            } else if (isOptionSelected && !isOptionCorrect) {
                optionClass = 'incorrect';
            }

            optionsHtml += `
                <div class="review-option ${optionClass}">
                    <div class="review-option-letter">${key}</div>
                    <div class="review-option-text">${q.options[key]}</div>
                </div>
            `;
        }

        itemDiv.innerHTML = `
            <div class="review-item-header">
                <div class="review-item-meta">
                    <span class="review-item-page">Trang ${q.page}</span>
                    <span class="review-status-badge ${statusClass}">${statusText}</span>
                </div>
            </div>
            <h3 class="review-question-text">Câu ${idx + 1}: ${q.question}</h3>
            <div class="review-options">
                ${optionsHtml}
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });
}


function toggleStarQuizCurrent() {
    const currentQ = getActiveQuizQuestion();
    if (!currentQ) return;
    
    if (state.starredQuestionIds.has(currentQ.id)) {
        state.starredQuestionIds.delete(currentQ.id);
    } else {
        state.starredQuestionIds.add(currentQ.id);
    }

    saveToStorage('starred', Array.from(state.starredQuestionIds));
    updateStarredBtnCounter();
    
    // Update star UI in Quiz
    const starIcon = document.getElementById('quiz-star-icon');
    if (state.starredQuestionIds.has(currentQ.id)) {
        starIcon.className = 'fa-solid fa-star';
        starIcon.parentElement.classList.add('active');
    } else {
        starIcon.className = 'fa-regular fa-star';
        starIcon.parentElement.classList.remove('active');
    }
    flashSaveStatus();
}

// ==========================================================================
// 3. LIST MODE LOGIC
// ==========================================================================
function renderList() {
    const listContainer = document.getElementById('questions-list-element');
    const totalCountEl = document.getElementById('list-total-count');
    
    if (!listContainer) return;

    if (totalCountEl) totalCountEl.textContent = state.currentDeck.length;

    if (state.currentDeck.length === 0) {
        listContainer.innerHTML = `<div class="stats-pill" style="justify-content: center; padding: 40px; border-radius: var(--radius-md);"><i class="fa-regular fa-folder-open"></i> Không tìm thấy câu hỏi phù hợp bộ lọc.</div>`;
        return;
    }

    listContainer.innerHTML = '';
    
    state.currentDeck.forEach((q, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `list-item ${state.showListAnswers ? 'show-answers' : ''}`;
        itemDiv.id = `list-item-${q.id}`;
        
        const isStarred = state.starredQuestionIds.has(q.id);

        let optionsHtml = '';
        for (let key in q.options) {
            const isCorrect = q.correctAnswers.includes(key);
            optionsHtml += `
                <div class="list-option-pill ${isCorrect ? 'correct' : ''}">
                    <div class="list-option-letter">${key}</div>
                    <div class="list-option-text">${q.options[key]}</div>
                </div>
            `;
        }

        const explanationHtml = q.explanation ? `
            <div class="list-explanation-text">
                <i class="fa-solid fa-circle-info"></i>
                <span>${q.explanation}</span>
            </div>
        ` : '';

        itemDiv.innerHTML = `
            <div class="list-item-header">
                <span class="list-item-page">Trang ${q.page}</span>
                <div class="list-item-actions">
                    <button class="list-star-btn ${isStarred ? 'active' : ''}" onclick="toggleStarList(${q.id}, this)">
                        <i class="${isStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                    </button>
                </div>
            </div>
            <h3 class="list-question-text">${q.question}</h3>
            <div class="list-options">
                ${optionsHtml}
            </div>
            ${explanationHtml}
        `;
        listContainer.appendChild(itemDiv);
    });
}

function toggleStarList(id, buttonEl) {
    if (state.starredQuestionIds.has(id)) {
        state.starredQuestionIds.delete(id);
        buttonEl.classList.remove('active');
        buttonEl.querySelector('i').className = 'fa-regular fa-star';
    } else {
        state.starredQuestionIds.add(id);
        buttonEl.classList.add('active');
        buttonEl.querySelector('i').className = 'fa-solid fa-star';
    }
    saveToStorage('starred', Array.from(state.starredQuestionIds));
    updateStarredBtnCounter();
    flashSaveStatus();
}

function toggleAllListAnswers() {
    state.showListAnswers = !state.showListAnswers;
    const btnText = document.getElementById('toggle-answers-text');
    const btnIcon = document.querySelector('.list-toggle-answers-btn i');

    if (state.showListAnswers) {
        btnText.textContent = 'Ẩn tất cả đáp án';
        btnIcon.className = 'fa-solid fa-eye-slash';
        document.querySelectorAll('.list-item').forEach(item => {
            item.classList.add('show-answers');
        });
    } else {
        btnText.textContent = 'Hiện tất cả đáp án';
        btnIcon.className = 'fa-solid fa-eye';
        document.querySelectorAll('.list-item').forEach(item => {
            item.classList.remove('show-answers');
        });
    }
}

// ==========================================================================
// KEYBOARD NAVIGATION SHORTCUTS
// ==========================================================================
function handleKeyboardShortcuts(e) {
    // Disable keyboard shortcuts when typing in search input
    if (document.activeElement.tagName === 'INPUT') return;

    if (state.activeMode === 'flashcard') {
        if (e.key === ' ' || e.code === 'Space') {
            e.preventDefault();
            flipCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            prevCard();
        } else if (e.key === 's' || e.key === 'S') {
            toggleStarCurrent();
        } else if (e.key === 'l' || e.key === 'L') {
            markCurrentAsLearned();
        }
    } else if (state.activeMode === 'quiz') {
        if (e.key === 'ArrowRight') {
            nextQuizQuestion();
        } else if (e.key === 'ArrowLeft') {
            prevQuizQuestion();
        } else if (e.key === 's' || e.key === 'S') {
            toggleStarQuizCurrent();
        }
    }
}

// ==========================================================================
// PROGRESS UPDATES & GLOBAL HELPERS
// ==========================================================================
function updateGlobalProgress() {
    const totalCount = getActiveQuestionsSet().length;
    if (totalCount === 0) return;

    const learnedCount = state.learnedQuestionIds.size;
    const percent = Math.round((learnedCount / totalCount) * 100);

    const progressBar = document.getElementById('global-progress-bar');
    const learnedSpan = document.getElementById('stats-learned-count');
    const percentSpan = document.getElementById('stats-percent');
    
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (learnedSpan) learnedSpan.textContent = learnedCount;
    if (percentSpan) percentSpan.textContent = `${percent}%`;

    // Apply to headers as well
    document.querySelectorAll('.total-q-count').forEach(el => {
        el.textContent = totalCount;
    });
}

function updateStarredBtnCounter() {
    const countSpan = document.getElementById('starred-count');
    if (countSpan) {
        countSpan.textContent = state.starredQuestionIds.size;
    }
}

function flashSaveStatus() {
    const saveStatus = document.getElementById('save-status');
    if (!saveStatus) return;

    saveStatus.style.opacity = '0.5';
    setTimeout(() => {
        saveStatus.style.opacity = '1';
    }, 200);
}

function resetProgress() {
    showCustomConfirmModal(
        'Xác nhận đặt lại',
        'Bạn có chắc chắn muốn đặt lại toàn bộ tiến trình và bắt đầu học lại từ đầu không? Thao tác này sẽ xóa tất cả câu hỏi đã thuộc, các câu hỏi đã đánh dấu và đáp án trắc nghiệm đã trả lời.',
        () => {
            state.starredQuestionIds.clear();
            state.learnedQuestionIds.clear();
            state.currentIndex = 0;
            state.flashcardIndex = 0;
            state.quizIndex = 0;
            state.isShuffled = false;
            state.quizScore = { correct: 0, incorrect: 0, answered: false, selectedKey: null };
            state.quizAnswers = {};
            state.quizSubMode = 'study';
            state.exam = {
                running: false,
                finished: false,
                questions: [],
                currentIndex: 0,
                correct: 0,
                incorrect: 0,
                answered: false,
                selectedKey: null,
                totalQuestions: 60
            };
            
            const shuffleBtn = document.getElementById('btn-shuffle');
            if (shuffleBtn) shuffleBtn.classList.remove('active');

            // Update sub-mode tabs active class visually
            const studyTab = document.getElementById('quiz-tab-study');
            const examTab = document.getElementById('quiz-tab-exam');
            if (studyTab && examTab) {
                studyTab.classList.add('active');
                examTab.classList.remove('active');
            }

            saveToStorage('starred', []);
            saveToStorage('learned', []);
            saveToStorage('flashcardIndex', 0);
            saveToStorage('quizIndex', 0);
            saveToStorage('quizScore', state.quizScore);
            saveToStorage('quizAnswers', {});
            saveToStorage('quizSubMode', 'study');
            saveToStorage('exam', state.exam);

            updateGlobalProgress();
            updateStarredBtnCounter();
            updateQuizScoreboard();
            buildDeck();
            renderActiveMode();
            
            // Hide exam review panel when resetting progress
            const reviewPanel = document.getElementById('exam-review-panel');
            if (reviewPanel) reviewPanel.classList.add('hidden');

            flashSaveStatus();
        }
    );
}

function showCustomConfirmModal(title, message, onConfirm) {
    const modal = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('modal-title');
    const msgEl = document.getElementById('modal-message');
    const confirmBtn = document.getElementById('modal-confirm-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');

    if (!modal) return;

    titleEl.textContent = title;
    msgEl.textContent = message;
    modal.classList.remove('hidden');

    confirmBtn.onclick = () => {
        modal.classList.add('hidden');
        if (onConfirm) onConfirm();
    };

    cancelBtn.onclick = () => {
        modal.classList.add('hidden');
    };

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    };
}

// ==========================================================================
// CARD INDEX & SLIDE PAGE DIRECT JUMP LOGIC
// ==========================================================================
function enableCounterJump(mode) {
    const counterEl = document.getElementById(mode === 'flashcard' ? 'flashcard-deck-counter' : 'quiz-deck-counter');
    if (!counterEl) return;
    
    // Prevent re-entry if already editing
    if (counterEl.querySelector('.counter-jump-input')) return;

    let maxCount = 0;
    let currentVal = 0;

    if (mode === 'flashcard') {
        maxCount = state.currentDeck.length;
        currentVal = state.currentIndex + 1;
    } else {
        const isExam = (state.quizSubMode === 'exam');
        if (isExam) {
            maxCount = (state.exam && state.exam.questions) ? state.exam.questions.length : 0;
            currentVal = (state.exam ? state.exam.currentIndex : 0) + 1;
        } else {
            maxCount = state.currentDeck.length;
            currentVal = state.currentIndex + 1;
        }
    }

    if (maxCount <= 0) return;

    // Create interactive inline input
    counterEl.innerHTML = `
        <span class="counter-jump-wrapper" onclick="event.stopPropagation()">
            <input type="number" class="counter-jump-input" id="counter-jump-input-${mode}" min="1" max="${maxCount}" value="${currentVal}">
            <span style="color: var(--text-muted); font-size: 16px; font-weight: 700;">/ ${maxCount}</span>
        </span>
    `;

    const inputEl = document.getElementById(`counter-jump-input-${mode}`);
    if (!inputEl) return;

    inputEl.focus();
    inputEl.select();

    let committed = false;

    const commitJump = () => {
        if (committed) return;
        committed = true;

        let val = parseInt(inputEl.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        if (val > maxCount) val = maxCount;

        const targetIndex = val - 1;

        if (mode === 'flashcard') {
            state.currentIndex = targetIndex;
            saveToStorage('flashcardIndex', state.currentIndex);
            renderFlashcard();
        } else {
            const isExam = (state.quizSubMode === 'exam');
            if (isExam) {
                state.exam.currentIndex = targetIndex;
                state.currentIndex = targetIndex;
                saveToStorage('exam', state.exam);
            } else {
                state.currentIndex = targetIndex;
                state.quizIndex = targetIndex;
                saveToStorage('quizIndex', state.quizIndex);
            }
            renderQuizQuestion();
        }
    };

    inputEl.addEventListener('keydown', (e) => {
        e.stopPropagation(); // Stop Space / Arrow keys from triggering global navigation while typing
        if (e.key === 'Enter') {
            commitJump();
        } else if (e.key === 'Escape') {
            committed = true;
            renderActiveMode();
        }
    });

    inputEl.addEventListener('blur', () => {
        commitJump();
    });
}

function jumpToPagePrompt(mode) {
    const activeSet = state.currentDeck;
    if (!activeSet || activeSet.length === 0) return;

    let maxPage = 1;
    activeSet.forEach(q => { if (q.page > maxPage) maxPage = q.page; });

    const currentQ = (mode === 'quiz' && state.quizSubMode === 'exam')
        ? (state.exam && state.exam.questions ? state.exam.questions[state.exam.currentIndex] : null)
        : activeSet[state.currentIndex];
        
    const currentPage = currentQ ? currentQ.page : 1;

    const input = prompt(`Nhập số trang slide bạn muốn đến (1 - ${maxPage}):`, currentPage);
    if (!input) return;

    const pageNum = parseInt(input.trim(), 10);
    if (isNaN(pageNum)) return;

    // Find first question matching page >= pageNum
    let foundIndex = activeSet.findIndex(q => q.page >= pageNum);
    if (foundIndex === -1) {
        foundIndex = activeSet.length - 1;
    }

    if (mode === 'flashcard') {
        state.currentIndex = foundIndex;
        saveToStorage('flashcardIndex', state.currentIndex);
        renderFlashcard();
    } else {
        if (state.quizSubMode === 'exam') {
            state.exam.currentIndex = foundIndex;
            state.currentIndex = foundIndex;
            saveToStorage('exam', state.exam);
        } else {
            state.currentIndex = foundIndex;
            state.quizIndex = foundIndex;
            saveToStorage('quizIndex', state.quizIndex);
        }
        renderQuizQuestion();
    }
}

