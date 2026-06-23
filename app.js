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
    showListAnswers: false
};

// Assign IDs to all questions on load
if (typeof QUESTIONS !== 'undefined') {
    QUESTIONS.forEach((q, idx) => {
        q.id = idx;
    });
} else {
    window.QUESTIONS = [];
}

// Local Storage Helper
const STORAGE_PREFIX = 'quizlet_mln111_';
function saveToStorage(key, value) {
    try {
        localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (e) {
        console.error('Error saving to LocalStorage:', e);
    }
}

function loadFromStorage(key, defaultValue) {
    try {
        const item = localStorage.getItem(STORAGE_PREFIX + key);
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
    state.theme = loadFromStorage('theme', 'dark');
    state.activeMode = loadFromStorage('activeMode', 'flashcard');
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

    // 2. Apply theme
    applyTheme();

    // 3. Generate page filter options dynamically (123 pages in blocks of 10)
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

// Generate page ranges
function generatePageFilterOptions() {
    const pageSelect = document.getElementById('page-filter');
    if (!pageSelect) return;

    // We have 123 pages
    const totalPages = 123;
    const step = 10;
    
    for (let i = 1; i <= totalPages; i += step) {
        const start = i;
        const end = Math.min(i + step - 1, totalPages);
        const option = document.createElement('option');
        option.value = `${start}-${end}`;
        option.textContent = `Trang ${start} - ${end}`;
        pageSelect.appendChild(option);
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
    let filtered = [...QUESTIONS];

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
        questionTextEl.textContent = `[Câu ${state.exam.currentIndex + 1}/${state.exam.totalQuestions}] ${q.question}`;

        // Render options
        optionsContainer.innerHTML = '';
        for (let key in q.options) {
            const optionVal = q.options[key];
            
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            if (q.userAnswer === key) {
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

        // Set question text
        questionTextEl.textContent = q.question;

        // Render options
        optionsContainer.innerHTML = '';
        for (let key in q.options) {
            const optionVal = q.options[key];
            
            const optionBtn = document.createElement('button');
            optionBtn.className = 'quiz-option';
            optionBtn.innerHTML = `
                <div class="quiz-option-letter">${key}</div>
                <div class="quiz-option-text">${optionVal}</div>
            `;
            optionBtn.onclick = () => selectQuizOption(key, optionBtn);
            optionsContainer.appendChild(optionBtn);
        }

        // Restore answered state elements if already answered
        const savedAnswer = state.quizAnswers[q.id];
        if (savedAnswer) {
            const optionButtons = optionsContainer.querySelectorAll('.quiz-option');
            optionButtons.forEach(btn => {
                btn.classList.add('disabled');
                const letter = btn.querySelector('.quiz-option-letter').textContent.trim();
                
                // Highlight correct answer
                if (q.correctAnswers.includes(letter)) {
                    btn.classList.add('correct');
                }
                
                // Highlight selected answer if incorrect
                if (letter === savedAnswer.selectedKey && !q.correctAnswers.includes(letter)) {
                    btn.classList.add('incorrect');
                }
            });

            const feedbackIcon = document.getElementById('feedback-icon');
            const feedbackMessage = document.getElementById('feedback-message');
            const isCorrect = savedAnswer.isCorrect;

            if (isCorrect) {
                feedbackIcon.className = 'fa-solid fa-circle-check correct';
                feedbackMessage.textContent = 'Chính xác! Bạn đã ghi nhớ được kiến thức này.';
            } else {
                feedbackIcon.className = 'fa-solid fa-circle-xmark incorrect';
                feedbackMessage.textContent = `Sai mất rồi. Đáp án đúng là: ${q.correctAnswers.join(', ')}`;
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
        // Toggle selected state
        q.userAnswer = selectedKey;
        saveToStorage('exam', state.exam);

        const optionButtons = document.querySelectorAll('.quiz-option');
        optionButtons.forEach(btn => {
            const letter = btn.querySelector('.quiz-option-letter').textContent.trim();
            if (letter === selectedKey) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
        updateExamProgress();
        return;
    }

    // Study mode grading
    if (state.quizAnswers[q.id]) return; // Prevent double answering

    const isCorrect = q.correctAnswers.includes(selectedKey);
    state.quizAnswers[q.id] = {
        selectedKey: selectedKey,
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
        feedbackMessage.textContent = 'Chính xác! Bạn đã ghi nhớ được kiến thức này.';
    } else {
        optionBtnElement.classList.add('incorrect');

        feedbackIcon.className = 'fa-solid fa-circle-xmark incorrect';
        feedbackMessage.textContent = `Sai mất rồi. Đáp án đúng là: ${q.correctAnswers.join(', ')}`;
    }

    updateQuizScoreboard();
    feedbackBox.classList.remove('hidden');
}

function prevQuizQuestion() {
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
            if (q.correctAnswers.includes(q.userAnswer)) {
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
        
        const isCorrect = q.userAnswer && q.correctAnswers.includes(q.userAnswer);
        const isAnswered = !!q.userAnswer;
        
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

        let optionsHtml = '';
        for (let key in q.options) {
            const isOptionCorrect = q.correctAnswers.includes(key);
            const isOptionSelected = q.userAnswer === key;
            
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
    const totalCount = QUESTIONS.length;
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
