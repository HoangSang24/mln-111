const QUESTIONS = [
  {
    page: 1,
    question: "Xanh-ximông là đại biểu của trường phải nào?",
    options: {
      A: "Chủ nghĩa xã hội không tưởng Pháp",
      B: "Chủ nghĩa xã hội không tưởng Đức",
      C: "Triết hoc cổ điển Đức",
      D: "Kinh tế chính trị học Anh",
    },
    correctAnswers: ["A"],
  },
  {
    page: 1,
    question:
      "Quan hệ giữa người với người trong quá trình sản xuất được gọi la gì?",
    options: {
      A: "Quan hệ xã hội",
      B: "Quan hệ tổ chức quản lý",
      C: "Quan hệ sản xuất",
      D: "Quan hệ điều tiết",
    },
    correctAnswers: ["C"],
  },
  {
    page: 1,
    question:
      "Một sinh viên tóm tắt nội dung quy luật về sự phủ hợp giữa quan hệ sản xuất với trình độ của như sau. Đáp án nào sau đây là đúng?",
    options: {
      A: "Quy luật này vạch rõ sự phụ thuộc khách quan của lực lượng sản xuất vào quan hệ sản xuất",
      B: "Sự hình thành, biến đổi và phát triển của quan hệ sản xuất được quyết định bởi lực lượng",
      C: "Lực lượng sản xuất và quan hệ sản xuất là hai mặt của phương thức sản xuất, chúng tồn tại",
      D: "Quy luật này chỉ tồn tại trong một vài xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 1,
    question:
      "Tri thức nào sau đây nảy sinh một cách trực tiếp từ thực tiễn lao động sản xuất?",
    options: {
      A: "Tri thức kinh nghiệm",
      B: "Tri thức lý luận",
      C: "Tri thức lý luận khoa học",
      D: "Tri thức lý luận thực tiễn",
    },
    correctAnswers: ["A"],
  },
  {
    page: 2,
    question:
      "Theo V.I.Lênin. Quan điểm về đời sống, về thực tiễn phải là...của lý luận nhận thức:",
    options: {
      A: "Điểm thứ nhất",
      B: "Quan điểm đầu tiên",
      C: "Quan điểm thứ nhất và cơ bản",
      D: "Điều quan trọng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 2,
    question: "Công lao của C.Mác và Ph.Ăngghen với nhận thức là gì?",
    options: {
      A: "Phát hiện ra thế giới khách quan",
      B: "Đưa phương pháp luận vào nhận thức",
      C: "Đưa thực tiễn vào triết học",
      D: "Đề ra tư tưởng đấu tranh chống lại giai cấp tư sản",
    },
    correctAnswers: ["C"],
  },
  {
    page: 2,
    question: "Nhận thức cảm tính được thực hiện dưới những hình thức nào?",
    options: {
      A: "Tri giác, phán đoán và suy luận",
      B: "Cảm giác, tri giác và khái niệm",
      C: "Cảm giác, tri giác và biểu tượng",
      D: "Khái niệm và phán đoán",
    },
    correctAnswers: ["C"],
  },
  {
    page: 2,
    question:
      "Đứng im, cân bằng chỉ xảy ra trong một số quan hệ nhất định chứ không phải trong mọi quan hệ là: (Kiểu hỏi khác: Tính chất nào của đứng im khi nói đứng im, cân bằng chỉ xảy ra trong một số quan hệ nhất định chứ không phải trong mọi quan hệ?)",
    options: {
      A: "Thực tế",
      B: "Tuyệt đối",
      C: "Tương đối",
      D: "Thường xuyên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 3,
    question:
      "A là một sinh viên có học lực kém, nên gia đình và Thầy/Cô đã khuyên A nên có gắng nhiều thấy được vần đề, A đã ra sức học tập để tích lũy kién thức, trải qua một khoảng thời gian bạn thành một học sinh giỏi mà còn đạt được học bổng do Đại học FPT cung cấp. Căn cứ vào kiến thức ở môn Triết học, Anh/Chị hãy cho biết trường hợp bạn A thuộc 1 trong 3 quy luật nào sau đây",
    options: {
      A: "Quy luật từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      B: "Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật phát triển",
    },
    correctAnswers: ["A"],
  },
  {
    page: 3,
    question:
      "Đâu là một phát minh vĩ đại của C.Mác đã đem lại một cuộc cách mạng trong triết học về xã hội",
    options: {
      A: "Chủ nghĩa duy vật lịch sử",
      B: "Chủ nghĩa duy tâm khách quan",
      C: "Chủ nghĩa duy tâm chủ quan",
      D: "Chủ nghĩa duy vật chất phát",
    },
    correctAnswers: ["A"],
  },
  {
    page: 3,
    question:
      "Sự khác biệt cơ bản nhất giữa các giai cấp là địa vị của họ trong",
    options: {
      A: "Quyền lực chính trị",
      B: "Quyền lực nhà nước",
      C: "Quyền lực quản lý kinh tế",
      D: "Quyền lực sở hữu tư liệu sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 3,
    question:
      "Thuyết có thể biết còn gọi là gì? (Hoặc còn gọi là khả tri -> Không thể biết là bất khả tri luận)",
    options: {
      A: "Thuyết nhận biết",
      B: "Thuyết khả tri",
      C: "Thuyết khả tri luận",
      D: "Thuyết nhận biết luận",
    },
    correctAnswers: ["C"],
  },
  {
    page: 4,
    question:
      "Nhân tố quyết định xu hướng phát triển của các hình thái kinh tế - xã hội là:",
    options: {
      A: "Ý thức của giai cấp nắm quyền lực nhà nước",
      B: "Ý chí của nhân dân",
      C: "Quy luật khách quan",
      D: "Điều kiện khách quan và chủ quan của mỗi xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 4,
    question:
      "Khi quan hệ sản xuất được xem là phù hợp với tính chất và trình độ phát triển của lực lượng sản xuất? (Kiều hỏi khác: Khi nào quan hệ sản xuất được xem là phù hợp với tính chất và trình độ phát triển của lực lượng sản xuất thì điều gì sẽ xảy ra?)",
    options: {
      A: "Thúc đẩy lực lượng sản xuất phát triển",
      B: "Cải thiện đời sống nhân dân",
      C: "Tạo điều kiện thực hiện công bằng xã hội",
      D: "Yêu cầu phải thay thế lực lượng sản xuất mới",
    },
    correctAnswers: ["A"],
  },
  {
    page: 4,
    question:
      "Theo cách phân chia các hình thức vận động của Ph.Ăngghen, hình thức vận động nào là thấp nhất, đơn giản nhất?",
    options: {
      A: "Hình thức vận động cơ học",
      B: "Hình thức vận động vật lý",
      C: "Hình thức vận động hóa học",
      D: "Hình thức vận động xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 4,
    question:
      "Luận điểm sau thuộc lập trường triết học nào: Quy luật trong các khoa học là sự sáng tạo chủ quan của con người và được áp dụng vào tự nhiên và xã hội.",
    options: {
      A: "Chủ nghĩa duy vật siêu hình",
      B: "Chủ nghĩa duy tâm khách quan",
      C: "Chủ nghĩa duy vật biện chứng",
      D: "Chủ nghĩa duy tâm chủ quan",
    },
    correctAnswers: ["D"],
  },
  {
    page: 5,
    question:
      "Theo quan điểm duy vật lịch sử, sự ra đời của nhà nước là để giải quyết các mâu thuẫn trong xã hội vì:",
    options: {
      A: "Xã hội có mâu thuẫn thì cần phải có lực lượng đại diện cho xã hội để giải quyết nó",
      B: "Kinh nghiệm thực tế cho thấy đúng như vậy",
      C: "Nếu mâu thuẫn có thể giải quyết được thì không cần đến sự ra đời của nhà nước, sự ra đời của nó chỉ chứng tỏ rằng mâu thuẫn đã phát triển đến chỗ không thể giải quyết được nên cần đến sự ra đời của nhà nước.",
      D: "Tất yếu của lịch sử nhân loại",
    },
    correctAnswers: ["C"],
  },
  {
    page: 5,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng, ý thức lý luận đạt trình độ cao và mang tính hệ thống tạo thành các:",
    options: {
      A: "Hệ tư tưởng",
      B: "Hệ kiến thức",
      C: "Tri thức tổng hợp",
      D: "Hệ thống tri thức",
    },
    correctAnswers: ["A"],
  },
  {
    page: 5,
    question:
      "Chọn câu trả lời sai: Trong một hình thái kinh tế xã hội, quan hệ sản xuất có vai trò sau đây.",
    options: {
      A: "Là quan hệ cơ bản, quyết định tất cả các quan hệ xã hội khác",
      B: "Là cơ sở kinh tế của các hiện tượng xã hội",
      C: "Thể hiện tính liên tục trong sự phát triển của xã hội loài người",
      D: "Tiêu biểu cho bộ mặt xã hội ở mỗi giai đoạn phát triển nhất định",
    },
    correctAnswers: ["C"],
  },
  {
    page: 5,
    question: "Triết học có mấy vấn đề? Trong vấn đề có mấy mặt?",
    options: {
      A: "1 mặt, 2 vấn đề",
      B: "1 vấn đề, 1 mặt",
      C: "1 vấn đề, 2 mặt",
      D: "2 mặt, 2 vấn đề",
    },
    correctAnswers: ["C"],
  },
  {
    page: 6,
    question: "Nguyên nhân là phạm trù triết học chỉ",
    options: {
      A: "Tác động qua lại giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật khác tạo ra những biến đổi nhất định",
      B: "Quan hệ giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật kia tạo nhất định",
      C: "Sự chuyển hóa giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật khác biến đổi nhất định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 6,
    question:
      "Điều khẳng định nào sau đây đúng về mối quan hệ giữa lý luận và kinh nghiệm?",
    options: {
      A: "Lý luận được hình thành từ kinh nghiệm trên cơ sở kinh nghiệm",
      B: "Kinh nghiệm nhiều tự phát dẫn đến sự ra đời của lý luận",
      C: "Mọi lý luận đều được xuất phát từ kinh nghiệm",
      D: "Lý luận đi trước kinh nghiệm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 6,
    question:
      "Điều kiện cơ bản để ý thức xã hội tác động trở lại tồn tại xã hội là",
    options: {
      A: "Ý thức xã hội phải vượt trước tồn tại xã hội",
      B: "Ý thức xã hội phải phù hợp với tồn tại xã hội",
      C: "Phải có hoạt động thực tiễn của con người",
      D: "Phải có điều kiện vật chất bảo đảm",
    },
    correctAnswers: ["C"],
  },
  {
    page: 6,
    question:
      'Ai là người khẳng định "cái sự hiển nhiên là trước hết con người cần phải ăn, uống, ở và mặc, trước khi có thể đấu tranh để giành quyền thống trị, trước khi có thể hoạt động chính trị học..."?',
    options: {
      A: "C.Mác",
      B: "Ph.Ăngghen",
      C: "Platon",
      D: "Immanuel Kant",
    },
    correctAnswers: ["B"],
  },
  {
    page: 7,
    question: "Quan điểm của chủ nghĩa Mác-Lênin về lãnh tụ là:",
    options: {
      A: "Tất cả các đáp án đều đúng",
      B: "Những cá nhân kiệt xuất có sự gắn bó với quần chúng nhân dân",
      C: "Những cá nhân kiệt xuất được quần chúng tín nhiệm",
      D: "Những cá nhân kiệt xuất tự nguyện hy sinh bản thân mình vì lợi ích của quần chúng nhân dân",
    },
    correctAnswers: ["A"],
  },
  {
    page: 7,
    question:
      "Trên mạng xã hội hiện nay như Facebook, TikTok... đã xuất hiện nhiều nhân vật không có ch khi phát ngôn, lối sống của họ đã bị chi phối bởi những điều tiêu cực và trở nên lệch chuẩn, thuần phong mỹ tục, truyền thống văn hóa của dân tộc Việt Nam để câu View, câu like. Theo Anh/chị là hiện tượng gì đã đề cập trong nội dung môn triết học mà Anh/Chị đã học và nghiên cứu qua:",
    options: {
      A: "Hiện tượng câu Like, câu View trên mạng xã hội",
      B: "Hiện tượng xem thường người khác",
      C: "Hiện tượng tha hóa con người",
      D: "Hiện tượng xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 7,
    question:
      "Trong quá trình nhận thức và hoạt động thực tiễn, chúng ta cần: (Kiều hỏi khác: Trong các đáp án dưới đây, đáp án nào là một yêu cầu trong quá trình nhận thức và thực tiễn?)",
    options: {
      A: "Phủ nhận, gạt bỏ cái ngẫu nhiên",
      B: "Cơ bản là phải căn cứ vào cái ngẫu nhiên nhưng đồng thời phải tính tới cái tất nhiên",
      C: "Căn cứ vào cái tất nhiên và ngẫu nhiên",
      D: "Cơ bản là phải căn cứ vào cái tất nhiên nhưng đồng thời phải tính tới cái ngẫu nhiên",
    },
    correctAnswers: ["D"],
  },
  {
    page: 8,
    question:
      'Theo quan điểm của triết học Mác - Lênin, "tồn tại xã hội" bao gồm:',
    options: {
      A: "Dân số, ý thức xã hội, kiến trúc thượng tầng",
      B: "Lực lượng sản xuất, dân số, phương thức sản xuất, ý thức xã hội",
      C: "Môi trường tự nhiên, quan hệ sản xuất, tâm lý xã hội, hệ tư tưởng",
      D: "Môi trường tự nhiên, dân số, phương thức sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 8,
    question: "Đâu là một trong những trường phái của triết học duy tâm?",
    options: {
      A: "Duy tâm khách quan",
      B: "Duy tâm duy lý",
      C: "Duy tâm biện chứng",
      D: "Duy tâm tôn giáo",
    },
    correctAnswers: ["A"],
  },
  {
    page: 8,
    question: "Một trong những nguồn gốc ra đời của Triết học là:",
    options: {
      A: "Tự nhiên",
      B: "Lao động",
      C: "Ngôn ngữ",
      D: "Xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 8,
    question: "Một trong những nguyên nhân ra đời của triết học là:",
    options: {
      A: "Tâm lý.",
      B: "Tư tưởng.",
      C: "Nhận thức",
      D: "Tự nhiên.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 8,
    question: "Hạt nhân cơ bản trong quần chúng nhân dân là ai?",
    options: {
      A: "Những người lao động sản xuất ra của cải vật chất",
      B: "Những bộ phận dân cư chống lại giai cấp thống trị áp bức bóc lột, đối kháng với nhân dân",
      C: "Những tầng lớp xã hội khác nhau thúc đẩy sự tiến bộ của xã hội",
      D: "Những tầng lớp dân cư lao động",
    },
    correctAnswers: ["A"],
  },
  {
    page: 9,
    question: "Ý thức được gọi là hình ảnh chủ quan của",
    options: {
      A: "Hiện thực khách quan",
      B: "Thế giới khách quan",
      C: "Thế giới chủ quan",
      D: "Thế giới vật chất",
    },
    correctAnswers: ["B"],
  },
  {
    page: 9,
    question: "Chân lý là gì?",
    options: {
      A: "Ý kiến của những người có kinh nghiệm",
      B: "Sự phù hợp giữa tri thức với hiện thực khách quan và được thực tiễn kiểm nghiệm",
      C: "Những quan điểm thuộc về đa số",
      D: "Là những thứ đúng đắn trong khoa học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 9,
    question: "Chân lý là:",
    options: {
      A: "Sự thật mà ai cũng biết",
      B: "Lẽ phải ai cũng thừa nhận",
      C: "Tri thức phù hợp với logic suy luận",
      D: "Tri thức có nội dung chân thực và đã được thực tiễn kiểm nghiệm",
    },
    correctAnswers: ["D"],
  },
  {
    page: 9,
    question:
      "Triết học Mác-Lênin ra đời một phần là kết quả kế thừa trực tiếp từ",
    options: {
      A: "Thế giới quan duy vật của Hêghen và phép biện chứng của Phoiobắc",
      B: "Thế giới quan duy vật của Phơ bách và phép biện chứng của Hêghen",
      C: "Thế giới quan duy vật và phép biện chứng của cả Hêghen và Phơ bách",
      D: "Chủ nghĩa duy tâm của Hồn bách và biện chứng pháp của Aristốt",
    },
    correctAnswers: ["B"],
  },
  {
    page: 9,
    question: "Khái niệm cơ sở hạ tầng là dùng để chỉ",
    options: {
      A: "Quan hệ kinh tế của xã hội",
      B: "Kết cấu vật chất - kỹ thuật làm cơ sở để phát triển kinh tế",
      C: "Quan hệ sản xuất của xã hội",
      D: "Quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 9,
    question:
      'Điền cụm từ thích hợp vào chỗ (..): "Không thể đem lại cho hai khái niệm ... này một định nghĩa cách chỉ rõ rằng trong hai khái niệm đó, cái nào được coi là có trước".',
    options: {
      A: "Nhận thức luận",
      B: "Bản thể luận",
      C: "Nhất nguyên luận",
      D: "Nhị nguyên luận",
    },
    correctAnswers: ["A"],
  },
  {
    page: 10,
    question:
      "Theo quan điểm của triết học Mác - Lênin, luận điểm nào sau đây chưa chính xác khi đề cập giữa tồn tại xã hội và ý thức xã hội?",
    options: {
      A: "Một bộ phận ý thức xã hội có thể vượt trước tồn tại xã hội",
      B: "Ý thức xã hội mang tính kế thừa",
      C: "Ý thức xã hội luôn thay đổi ngay lập tức khi tồn tại xã hội thay đổi",
      D: "Ý thức xã hội thường lạc hậu, bảo thủ so với tồn tại xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 10,
    question:
      "Thales, Heraclitus, Anaximenes là những đại biểu thuộc trường phái nào?",
    options: {
      A: "Chủ nghĩa duy tâm chủ quan",
      B: "Chủ nghĩa duy vật chất phác",
      C: "Chủ nghĩa duy tâm khách quan",
      D: "Chủ nghĩa duy vật biện chứng trước Mác",
    },
    correctAnswers: ["B"],
  },
  {
    page: 10,
    question:
      "Trong lực lượng sản xuất, đâu là yếu tố động nhất, cách mạng nhất?",
    options: {
      A: "Công cụ lao động",
      B: "Bộ óc con người",
      C: "Con người lao động",
      D: "Tư liệu sản xuất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 10,
    question: "Triết học nghiên cứu thế giới như thế nào?",
    options: {
      A: "Như một đối tượng vật chất cụ thể",
      B: "Như một hệ đối tượng vật chất nhất định",
      C: "Như một chỉnh thể thống nhất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 10,
    question:
      "Quan điểm nào sau đây cho rằng các sự vật, hiện tượng, các quá trình khác nhau vừa tồn tại độc lập, tác động qua lại, chuyển hóa lẫn nhau?",
    options: {
      A: "Quan điểm siêu hình",
      B: "Quan điểm biện chứng",
      C: "Quan điểm duy tâm",
      D: "Quan điểm duy vật",
    },
    correctAnswers: ["B"],
  },
  {
    page: 10,
    question:
      "Theo quan điểm duy vật biện chứng, nguyên nhân và kết quả có thể...",
    options: {
      A: "chuyển hóa lẫn nhau",
      B: "tồn tại độc lập với nhau",
      C: "xuất hiện đồng thời",
      D: "không có mối liên hệ qua lại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 11,
    question:
      "Chức năng, nhiệm vụ của nhà nước xã hội chủ nghĩa biểu hiện tập trung ở việc quản lý xã hội lĩnh vực bằng.",
    options: {
      A: "Khoa học",
      B: "Công cụ tiền",
      C: "Pháp luật",
      D: "Kế hoạch",
    },
    correctAnswers: ["C"],
  },
  {
    page: 11,
    question: "Triết học phổ biến ở Tây Âu thời Trung cổ là Triết học gì?",
    options: {
      A: "Triết học tự nhiên",
      B: "Triết học kinh viện",
      C: "Triết học khoa học xã hội",
      D: "Triết học chính trị",
    },
    correctAnswers: ["B"],
  },
  {
    page: 11,
    question:
      "Theo quan điểm của duy vật về lịch sử, nhân tố quyết định trong lịch sử xét đến cùng là gì?",
    options: {
      A: "Lao động, tái sản xuất ra con người",
      B: "Sở hữu về tư liệu sản xuất, phân phối sản phẩm",
      C: "Kết cấu xã hội, giai cấp",
      D: "Sự sản xuất và tái sản xuất ra đời sống hiện thực",
    },
    correctAnswers: ["D"],
  },
  {
    page: 11,
    question: "Thuyết bất khả tri còn gọi là gì?",
    options: {
      A: "Thuyết không thể biết",
      B: "Thuyết khả tri",
      C: "Thuyết khả tri luận",
      D: "Thuyết nhận biết luận",
    },
    correctAnswers: ["A"],
  },
  {
    page: 11,
    question:
      'Điền vào dấu "...là tổng hợp những mặt, những yếu tố trong quá trình tạo nên sự vật":',
    options: {
      A: "Khả năng",
      B: "Hiện thực",
      C: "Nội dung",
      D: "Hình thức",
    },
    correctAnswers: ["C"],
  },
  {
    page: 11,
    question: "Yếu tố chủ thể của lực lượng sản xuất là",
    options: {
      A: "Con người với kỹ năng, kỹ xảo và tri thức được tích luỹ lại",
      B: "Tư liệu sản xuất hiện đại",
      C: "Khoa học công nghệ tiên tiến",
      D: "Các phương án trả lời đều đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 12,
    question:
      "Nội dung trước tiên của cách mạng xã hội chủ nghĩa là phải giành chính quyền về tay giai cấp công nhân, nhân dân lao động, đưa những người lao động",
    options: {
      A: "Thành người lao động tập thể",
      B: "Làm chủ tư liệu sản xuất",
      C: "Thành người quản lý xã hội",
      D: "Lên địa vị làm chủ xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 12,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng sự ra đời, tồn tại của nhà nước là để duy trì trật tự xã hội mâu thuẫn giai cấp như thế nào?",
    options: {
      A: "Đi đến giải quyết",
      B: "Phải được giải quyết",
      C: "Có thể giải quyết",
      D: "Không thể điều hòa được",
    },
    correctAnswers: ["D"],
  },
  {
    page: 12,
    question: "Hạt nhân lý luận của thế giới quan khoa học là chủ nghĩa.",
    options: {
      A: "Duy vật B. Mác",
      C: "Duy vật biện chứng D. Lênin",
    },
    correctAnswers: ["C"],
  },
  {
    page: 12,
    question: "Chủ nghĩa Mác-Lênin ra đời dựa trên bao nhiêu tiền đề?",
    options: {
      A: "Ba tiền đề",
      B: "Bốn tiền đề",
      C: "Năm tiền đề",
      D: "Sáu tiền đề",
    },
    correctAnswers: ["A"],
  },
  {
    page: 12,
    question:
      "Điều kiện cần và đủ để sinh ra ý thức là gì?. Chọn 3 đáp án đúng.",
    options: {
      A: "Nghiên cứu khoa học",
      B: "Lao động, ngôn ngữ",
      C: "Bộ óc con người",
      D: "Các sự vật, hiện tượng trong thế giới khách quan",
    },
    correctAnswers: ["B", "C", "D"],
  },
  {
    page: 12,
    question: "Theo Lênin, khách quan là cái đang tồn tại",
    options: {
      A: "Phụ thuộc nhận thức con người",
      B: "Trong thế giới con người",
      C: "Trong thế giới tự nhiên",
      D: "Độc lập, không phụ thuộc vào ý thức",
    },
    correctAnswers: ["D"],
  },
  {
    page: 13,
    question:
      "Sự phân chia giai cấp trong xã hội bắt đầu từ hình thái kinh tế - xã hội nào?",
    options: {
      A: "Cộng sản nguyên thủy",
      B: "Tư bản chủ nghĩa",
      C: "Phong kiến",
      D: "Chiếm hữu nô lệ",
    },
    correctAnswers: ["D"],
  },
  {
    page: 13,
    question: "Xét đến cùng, mục đích của sự sản xuất xã hội là để làm gì?",
    options: {
      A: "Sản xuất ra của cải vật chất",
      B: "Sản xuất và tái sản xuất ra đời sống hiện thực",
      C: "Sản xuất ra con người, nuôi sống con người",
      D: "Sản xuất ra con người",
    },
    correctAnswers: ["B"],
  },
  {
    page: 13,
    question:
      "Nguyên lý về sự phát triển là cơ sở khoa học để định hướng cho nhận thức và cải tạo thế giới. Theo đó, trong hoạt động nhận thức và hoạt động thực tiễn con người phải đặt sự vật, hiện tượng theo khuynh hướng:",
    options: {
      A: "Đi thẳng",
      B: "Đi lên của nó",
      C: "Không tụt lùi",
      D: "Vận động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 13,
    question: "Vai trò của lãnh tụ đối với phong trào của quần chúng nhân dân?",
    options: {
      A: "Thúc đẩy hoặc kìm hãm sự tiến bộ của xã hội",
      B: "Là người sáng lập ra các tổ chức chính trị, xã hội và là linh hồn của các tổ chức đó",
      C: "Lãnh tụ của mỗi thời đại chỉ có thể hoàn thành những nhiệm vụ đặt ra của thời đại đó",
      D: "Tất cả các đáp án đều đúng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 13,
    question:
      "Vai trò nào sau đây không phải vai trò lãnh tụ đối với phong trào của quần chúng nhân dân?",
    options: {
      A: "Thúc đẩy hoặc kìm hãm sự tiến bộ của xã hội",
      B: "Là người sáng lập ra các tổ chức chính trị, xã hội và là linh hồn của các tổ chức đó",
      C: "Lãnh tụ của mỗi thời đại chỉ có thể hoàn thành những nhiệm vụ đặt ra của thời đại đó",
      D: "Phát minh ra công cụ lãnh đạo quần chúng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 13,
    question: "Cái ngẫu nhiên là cái",
    options: {
      A: "Diễn ra hoàn toàn không chịu sự chi phối của quy luật nào",
      B: "Hoàn toàn diễn ra theo quy luật",
      C: "Biểu hiện của quy luật",
      D: "Không biểu hiện của bất cứ quy luật nào",
    },
    correctAnswers: ["C"],
  },
  {
    page: 14,
    question: "Cái riêng là một phạm trù dùng để chỉ",
    options: {
      A: "Những mặt, những thuộc tính chung của nhiều sự vật",
      B: "Một sự vật, một hiện tượng, một quá trình riêng lẻ nhất định",
      C: "Những nét, những thuộc tính chỉ có ở một sự vật",
      D: "Các yếu tố cấu thành một hệ thống",
    },
    correctAnswers: ["B"],
  },
  {
    page: 14,
    question:
      "Theo quan điểm của chủ nghĩa Mác-Lênin, khái niệm nào dùng để chỉ lực lượng sản xuất cơ bản của xã hội, trực tiếp sản xuất ra của cải vật chất, là cơ sở của sự tồn tại và phát triển của xã hội. Là động lực cơ bản của mọi cuộc cách mạng xã hội và là người sáng tạo ra những giá trị văn hóa tinh thần cho xã hội?",
    options: {
      A: "Quần chúng nhân dân",
      B: "Tất cả các đáp án đều đúng",
      C: "Lãnh tụ",
      D: "Vĩ nhân",
    },
    correctAnswers: ["A"],
  },
  {
    page: 14,
    question:
      'Ai là người đã đưa ra định nghĩa về giai cấp sau đây: "Người ta gọi là giai cấp là những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, khác nhau về quan hệ của họ (thường thì những quan hệ này được pháp luật quy định và thừa nhận) đối với tư liệu sản xuất và phân công lao động, về vai trò của họ trong những tổ chức lao động xã hội, và như vậy là khác nhau về cách thức hưởng thụ và về phần của cải ít hoặc nhiều mà họ được hưởng. Giai cấp là những tập đoàn người, mà tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác, do chỗ các tập đoàn đó có địa vị khác nhau trong một chế độ kinh tế xã hội nhất định.".',
    options: {
      A: "Heraclit",
      B: "Khổng Tử",
      C: "V.I.Lênin",
      D: "Chủ tịch Hồ Chí Minh",
    },
    correctAnswers: ["C"],
  },
  {
    page: 15,
    question:
      "Trong các yếu tố sau, yếu tố nào thuộc về kiến trúc thượng tầng?",
    options: {
      A: "Cơ sở kinh tế",
      B: "Cơ sở vật chất kỹ thuật",
      C: "Công nghệ thông tin",
      D: "Các học thuyết, tư tưởng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 15,
    question:
      "Tâm lý, tính cách tiểu nông của người Việt Nam truyền thống căn bản là do những yếu tố nào quyết định? (Chọn 3)",
    options: {
      A: "Bản tính cố hữu của người Việt Nam",
      B: "Bị phong kiến, đế quốc nhiều thế kỷ áp bức thống trị",
      C: "Phương thức sản xuất tiểu nông, lạc hậu tồn tại lâu dài trong lịch sử (Nếu chọn 1 thì chọn C)",
      D: "Điều kiện tổ chức dân cư khép kín của các làng xã",
    },
    correctAnswers: ["B", "C", "D"],
  },
  {
    page: 15,
    question: "Sản xuất vật chất có vai trò gì đối với xã hội?",
    options: {
      A: "Quyết định sự tồn tại và phát triển xã hội",
      B: "Quyết định sự vận động của xã hội",
      C: "Quyết định tính chất và nội dung của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 15,
    question: "Phủ định biện chứng có đặc trưng cơ bản nào?",
    options: {
      A: "Tính khách quan và tính mâu thuẫn",
      B: "Tính mâu thuẫn và tính kế thừa",
      C: "Tất cả các đáp án đều sai",
      D: "Tính khách quan và tính kế thừa",
    },
    correctAnswers: ["D"],
  },
  {
    page: 15,
    question:
      "Sự phản ánh có tính chủ động lựa chọn thông tin, xử lý thông tin là hình thức phản ánh:",
    options: {
      A: "Tâm lý",
      B: "Năng động, sáng tạo",
      C: "Tiên tiến",
      D: "Không thụ động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 15,
    question:
      "Theo quan niệm của chủ nghĩa duy vật biện chứng về lịch sử thì trong xã hội có giai cấp, hệ tư tưởng thống trị xã hội bao giờ cũng là hệ tư tưởng của giai cấp.",
    options: {
      A: "Tiên tiến nhất",
      B: "Lãnh đạo xã hội",
      C: "Thống trị xã hội",
      D: "Đứng đầu xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 16,
    question: "Thế nào là phương pháp siêu hình?",
    options: {
      A: "Xem xét các sự vật trong mối liên hệ tác động qua lại lẫn nhau, nhưng không vận động, không phát triển",
      B: "Xem xét các sự vật trong trạng thái cô lập, tách rời nhau, và không vận động, không phát triển",
      C: "Xem xét các sự vật trong mối liên hệ tác động qua lại lẫn nhau, và luôn vận động, luôn phát triển",
      D: "Xem xét các sự vật trong trạng thái cô lập, tách rời nhau, nhưng luôn vận động, luôn phát triển",
    },
    correctAnswers: ["B"],
  },
  {
    page: 16,
    question:
      "Ở xã hội Việt Nam hiện nay (Vấn đề giai cấp ở Việt Nam hiện nay như thế nào?)",
    options: {
      A: "Còn đấu tranh giai cấp",
      B: "Không còn đấu tranh giai cấp",
      C: "Các phương án trả lời đều sai",
      D: "Đấu tranh giai cấp gay gắt",
    },
    correctAnswers: ["A"],
  },
  {
    page: 16,
    question: "Trong chủ nghĩa Mác - Lênin thì",
    options: {
      A: "Triết học là cơ sở nền tảng của kinh tế chính trị và chủ nghĩa xã hội khoa học",
      B: "Kinh tế chính trị học là cơ sở nền tảng của triết học và chủ nghĩa xã hội khoa học",
      C: "Chủ nghĩa xã hội khoa học là cơ sở của kinh tế chính trị và triết học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 16,
    question:
      "Theo chủ nghĩa duy vật lịch sử, các chính sách và pháp luật của nhà nước suy đến cùng chỉ là phản ánh nhu cầu thống trị về kinh tế của giai cấp nắm giữ yếu tố nào của xã hội?",
    options: {
      A: "Lực lượng sản xuất chủ yếu của xã hội",
      B: "Quyền tổ chức-quản lý xã hội",
      C: "Nhà nước",
      D: "Quyền sở hữu các tư liệu sản xuất chủ yếu",
    },
    correctAnswers: ["D"],
  },
  {
    page: 16,
    question: "Cơ sở, động lực, mục đích của nhận thức là",
    options: {
      A: "Lý luận",
      B: "Thực tiễn",
      C: "Triết học",
      D: "Tinh thần",
    },
    correctAnswers: ["B"],
  },
  {
    page: 17,
    question: "Định nghĩa phạm trù vật chất phụ thuộc chủ yếu vào",
    options: {
      A: "Sự phát triển khoa học kỹ thuật",
      B: "Sự phát triển của logic hình thức",
      C: "Sự phát triển của logic biện chứng",
      D: "Tất cả các đáp án đều đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 17,
    question:
      "Theo quan điểm của triết học Mác - Lênin, mối quan hệ giữa tồn tại xã hội và ý thức xã hội thể hiện như thế nào?",
    options: {
      A: "Ý thức xã hội quyết định tồn tại xã hội; tồn tại xã hội có tính độc lập tương đối, tác động trở lại ý thức xã hội",
      B: "Tồn tại xã hội quyết định ý thức xã hội; ý thức xã hội có tính độc lập tương đối, tác động trở lại tồn tại xã hội",
      C: "Tồn tại xã hội và ý thức xã hội tồn tại độc lập, không liên quan gì đến nhau",
      D: "Tồn tại xã hội quyết định tồn tại xã hội, ý thức xã hội quyết định ý thức xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 17,
    question:
      "Theo chủ nghĩa duy vật lịch sử, quan hệ sản xuất có thể tác động tới lực lượng sản xuất theo hướng.",
    options: {
      A: "Thúc đẩy hoặc kìm hãm sự phát triển",
      B: "Thúc đẩy",
      C: "Hỗ trợ",
      D: "Tạo điều kiện",
    },
    correctAnswers: ["A"],
  },
  {
    page: 17,
    question:
      "Một sinh viên định nghĩa bệnh chủ quan duy ý chí bằng các biểu hiện đặc trưng sau đây. Hãy chỉ ra một biểu hiện không thuộc chủ quan duy ý chí. (Cách hỏi khác: Đâu không phải là biểu hiện của chủ quan duy ý chí?)",
    options: {
      A: "Suy nghĩ và hành động nóng vội",
      B: "Chạy theo nguyện vọng chủ quan",
      C: "Quyết tâm thực hiện mục tiêu",
      D: "Không tính tới điều kiện và khả năng thực tế",
    },
    correctAnswers: ["C"],
  },
  {
    page: 17,
    question: "Triết học ra đời từ đâu?",
    options: {
      A: "Từ thực tiễn, do nhu cầu của thực tiễn",
      B: "Từ sự tư duy của con người về bản thân mình",
      C: "Từ sự vận động của ý muốn chủ quan của con người",
      D: "Từ thực tiễn, do sự phát triển của khoa học kỹ thuật",
    },
    correctAnswers: ["A"],
  },
  {
    page: 18,
    question: "Đứng im được hiểu là trạng thái như thế nào?",
    options: {
      A: "Tuyệt đối",
      B: "Tương đối",
      C: "Vừa tuyệt đối vừa tương đối",
      D: "Không có đáp án đúng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 18,
    question: "Sự ra đời và tồn tại của nhà nước",
    options: {
      A: "Là hiện tượng mang tính khách quan, bị quyết định bởi quá trình phát triển của xã hội",
      B: "Là hiện tượng mang tính chủ quan, phụ thuộc vào nguyện vọng của giai cấp cầm quyền",
      C: "Là hiện tượng mang tính chủ quan phụ thuộc vào nguyện vọng của mỗi quốc gia, mỗi dân tộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 18,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì trong những điều kiện xác định cái đơn nhất và cái gì có thể chuyển hóa lẫn nhau?",
    options: {
      A: "Cái đặc thù",
      B: "Cái riêng",
      C: "Cái chung",
      D: "Quy luật",
    },
    correctAnswers: ["C"],
  },
  {
    page: 18,
    question:
      "Theo quan niệm duy vật biện chứng về lịch sử thì đỉnh cao của sự phát triển đấu tranh giai cấp là đấu tranh trong lĩnh vực nào? (Kiểu hỏi khác: Theo quan niệm của chủ nghĩa duy vật lịch sử thì đỉnh cao của sự phát triển đấu tranh giai cấp là đấu tranh trong lĩnh vực nào?)",
    options: {
      A: "Chính trị",
      B: "Võ trang",
      C: "Kinh tế",
      D: "Giải phóng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 19,
    question:
      "Quan điểm tiến bộ và cách mạng nhất của chủ nghĩa Mác-Lênin về vấn đề con người là:",
    options: {
      A: "Giải thích được nguồn gốc tự nhiên và xã hội của con người dưới ánh sáng khoa học",
      B: "Mô tả được quá trình hoạt động sống và lao động sản xuất của con người theo tinh thần của chủ nghĩa duy vật",
      C: "Đưa ra được học thuyết cách mạng và triệt để về đấu tranh giải phóng con người",
      D: "Giải thích được một cách khoa học nguồn gốc của ý thức của con người",
    },
    correctAnswers: ["C"],
  },
  {
    page: 19,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng thì thông qua vận động mà các dạng cụ thể của vật chất",
    options: {
      A: "Tạo ra ý thức",
      B: "Không tồn tại",
      C: "Mất dần đi",
      D: "Biểu hiện",
    },
    correctAnswers: ["D"],
  },
  {
    page: 19,
    question: "Bản chất của nhà nước là",
    options: {
      A: "Cơ quan phúc lợi chung của toàn xã hội",
      B: "Cơ quan trọng tài thực hiện chức năng phân xử và hòa giải các xung đột xã hội",
      C: "Công cụ của giai cấp thống trị xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 19,
    question:
      "Khi chất mới của sự vật ra đời có thể làm thay đổi những gì của sự vận động và phát triển của sự vật?",
    options: {
      A: "Bản chất, hình thức",
      B: "Kết cấu, quy mô",
      C: "Hình thức kết cấu",
      D: "Hình thức vận động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 19,
    question: "Chất và lượng có mối quan hệ với nhau như thế nào?",
    options: {
      A: "Không có mối quan hệ gì với nhau",
      B: "Chỉ có mối quan hệ giữa chất với lượng",
      C: "Chỉ có mối quan hệ giữa lượng với chất",
      D: "Có mối quan hệ biện chứng với nhau",
    },
    correctAnswers: ["D"],
  },
  {
    page: 20,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, trong xã hội khi xuất hiện mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất thì",
    options: {
      A: "Quan hệ sản xuất sẽ tự động thay đổi cho phù hợp với lực lượng sản xuất",
      B: "Quan hệ sản xuất không thể thay đổi được vì nó được bảo vệ bằng quyền lực nhà nước",
      C: "Lực lượng sản xuất phải tự điều chỉnh cho phù hợp với quan hệ sản xuất",
      D: "Quan hệ sản xuất được thay đổi thông qua những cuộc cải cách và các cuộc cách mạng xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 20,
    question: "Lực lượng sản xuất được hiểu là khái niệm dùng để chỉ",
    options: {
      A: "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất",
      B: "Quan hệ giữa người với xã hội trong quá trình sản xuất",
      C: "Quan hệ giữa người sản xuất trong quá trình sản xuất",
      D: "Quan hệ giữa những người lao động trong quá trình tác động vào giới tự nhiên",
    },
    correctAnswers: ["A"],
  },
  {
    page: 20,
    question: "Kiến trúc thượng tầng là gì?",
    options: {
      A: "Các quan hệ sản xuất hiện có trong xã hội",
      B: "Hệ tư tưởng của giai cấp thống trị",
      C: "Cơ sở kinh tế của xã hội",
      D: "Những quan điểm, tư tưởng và các thiết chế của xã hội tương ứng được hình thành trên cơ sở hạ tầng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 20,
    question:
      'Điền vào dấu (...): "Quan điểm nhất quán từ xưa đến nay của các nhà triết học duy vật là thừa nhận sự tồn tại .... lấy bản thân giới tự nhiên để giải thích tự nhiên".',
    options: {
      A: "Chủ quan của thế giới vật chất",
      B: "Song song với thế giới vật chất",
      C: "Khách quan của thế giới vật chất",
      D: "Có tính trật tự, nguyên tắc của thế giới vật chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 21,
    question:
      "Chủ nghĩa Mác-Lênin gồm ba bộ phận cấu thành đó là: (Cách hỏi khác: Chủ nghĩa Mác-Lênin có những bộ phận cấu thành nào?)",
    options: {
      A: "Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học",
      B: "Triết học, Kinh tế chính trị học và Chính trị học",
      C: "Triết học, Kinh tế học và Chủ nghĩa xã hội khoa học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 21,
    question:
      "Hãy chỉ ra sai lầm của các nhà triết học thế kỷ XVII-XVIII trong quan niệm về vật chất (3 đáp án)",
    options: {
      A: "Vật chất biểu hiện qua không gian và thời gian",
      B: "Đồng nhất vật chất với vật thể",
      C: "Đề cập đến vai trò của vật thể",
      D: "Đồng nhất vật chất với một số tính chất phổ biến của vật thể",
    },
    correctAnswers: ["B", "C", "D"],
  },
  {
    page: 21,
    question:
      "Theo quan điểm duy vật lịch sử, quan hệ cơ bản nhất, quyết định mọi mối quan hệ xã hội là",
    options: {
      A: "Quan hệ quyền lực nhà nước",
      B: "Quan hệ văn hóa",
      C: "Quan hệ kinh tế",
      D: "Quan hệ tôn giáo",
    },
    correctAnswers: ["C"],
  },
  {
    page: 21,
    question: "Theo quan điểm triết học Mácxít, khẳng định nào sau đây sai?",
    options: {
      A: "Thế giới là một chỉnh thể trong sự liên hệ, ràng buộc lẫn nhau",
      B: "Con người không thể tách khỏi các mối quan hệ với tự nhiên",
      C: "Giữa các loài luôn có những khâu trung gian nối chúng với nhau",
      D: "Thế giới tinh thần và thế giới vật chất tồn tại độc lập nhau",
    },
    correctAnswers: ["D"],
  },
  {
    page: 21,
    question:
      "Hình thức nhận thức nào cần có sự tác động trực tiếp của vật vào cơ quan giác quan của con người?",
    options: {
      A: "Tri giác",
      B: "Khái niệm",
      C: "Suy luận",
      D: "Phán đoán",
    },
    correctAnswers: ["A"],
  },
  {
    page: 21,
    question:
      "Hình thức nhận thức nào là khi sự vật trực tiếp tác động đến giác quan của con người?",
    options: {
      A: "Cảm giác",
      B: "Tri giác",
      C: "Biểu tượng",
      D: "Khái niệm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 22,
    question:
      'Quan hệ biện chứng giữa "cái riêng" và "cái chung" thì cái chung tồn tại: (Kiểu hỏi khác: Theo quan điểm của phép biện chứng duy vật thì quan hệ biện chứng giữa "cái riêng" và "cái chung" thì cái chung tồn tại như thế nào so với cái riêng?)',
    options: {
      A: "Ngoài cái riêng",
      B: "Cùng cái riêng",
      C: "Trong cái riêng",
      D: "Bên cái riêng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 22,
    question:
      '"Cân bằng động" trong sự phù hợp giữa lực lượng sản xuất và quan hệ sản xuất là gì?',
    options: {
      A: "Lực lượng sản xuất và quan hệ sản xuất phù hợp trong suốt quá trình phát triển của con người",
      B: "Lực lượng sản xuất thay đổi, quan hệ sản xuất không cần thay đổi",
      C: "Sự phù hợp cụ thể nào đó giữa quan hệ sản xuất và lực lượng sản xuất luôn bị phá vỡ để thay bằng một sự phù hợp khác cao hơn",
      D: "Khi lực lượng sản xuất đã đến lúc cần thay đổi thì nhất định là quan hệ sản xuất cũng sẽ",
      E: "Lực lượng sản xuất không cần thay đổi, quan hệ sản xuất thay đổi",
    },
    correctAnswers: ["C"],
  },
  {
    page: 22,
    question:
      "Triết học duy tâm khách quan và duy tâm chủ quan đều có điểm chung là:",
    options: {
      A: "Đề cao lĩnh vực tinh thần của con người",
      B: "Đề cao lĩnh vực vật chất và tinh thần của con người",
      C: "Đề cao đời sống tâm linh của con người",
    },
    correctAnswers: ["A"],
  },
  {
    page: 22,
    question: "Giá trị của triết học duy tâm là:",
    options: {
      A: "Đề cao lĩnh vực tinh thần của con người",
      B: "Đánh giá đúng lĩnh vực tinh thần của con người",
      C: "Đề cao tư duy của con người",
    },
    correctAnswers: ["A"],
  },
  {
    page: 22,
    question: "Chân lý bao gồm các tính chất sau: (4 đáp án)",
    options: {
      A: "Tính phong phú, đa dạng",
      B: "Tính khách quan",
      C: "Tính tương đối",
      D: "Tính cụ thể",
      E: "Tính tuyệt đối",
    },
    correctAnswers: ["B", "C", "D", "E"],
  },
  {
    page: 23,
    question:
      "Nhân tố đảm bảo cho sự thắng lợi cuối cùng của một chế độ xã hội là",
    options: {
      A: "Có nền khoa học tiên tiến",
      B: "Có nhân tố chính trị tiến bộ",
      C: "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
      D: "Có thể tạo ra năng suất lao động cao hơn",
    },
    correctAnswers: ["D"],
  },
  {
    page: 23,
    question: "Trong thực tế chúng ta phải dựa vào",
    options: {
      A: "Hiện thực và dự đoán các khả năng",
      B: "Cả khả năng và hiện thực",
      C: "Hiện thực vì khả năng là cái chưa tồn tại",
      D: "Khả năng vì khả năng có thể chứa hiện thực",
    },
    correctAnswers: ["A"],
  },
  {
    page: 23,
    question: "Thế giới quan được hiểu là gì?",
    options: {
      A: "Quan niệm của con người về thế giới",
      B: "Hệ thống quan niệm của con người về thế giới",
      C: "Hệ thống quan niệm, quan điểm lý luận của con người về thế giới",
      D: "Hệ thống quan niệm, quan điểm chung nhất của con người về thế giới",
    },
    correctAnswers: ["D"],
  },
  {
    page: 23,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng giai cấp nắm được yếu tố nào thì cũng chiếm được địa vị chính trị, có khả năng khách quan thành giai cấp thống trị xã hội?",
    options: {
      A: "Tư liệu sản xuất chủ yếu",
      B: "Quan hệ sản xuất thống trị",
      C: "Lực lượng sản xuất",
      D: "Lực lượng sản xuất mới",
    },
    correctAnswers: ["A"],
  },
  {
    page: 23,
    question:
      "Trong xã hội có giai cấp, tính chất kế thừa của ý thức xã hội có gắn với tính chất giai cấp của",
    options: {
      A: "Tùy trường hợp cụ thể",
      B: "Không kế thừa",
      C: "Có kế thừa",
    },
    correctAnswers: ["C"],
  },
  {
    page: 24,
    question:
      'Theo chủ nghĩa duy vật lịch sử, khái niệm "cách mạng xã hội" dùng để chỉ yếu tố nào?',
    options: {
      A: "Sự tiến bộ, tiến hóa mọi lĩnh vực trong một xã hội nhất định",
      B: "Sự thay thế chế độ xã hội này bằng một chế độ xã hội khác",
      C: "Sự thay thế thể chế kinh tế này bằng một thể chế kinh tế khác",
      D: "Sự thay thế hình thái kinh tế - xã hội này bằng hình thái kinh tế - xã hội khác cao hơn",
    },
    correctAnswers: ["D"],
  },
  {
    page: 24,
    question: "Không phải mọi sự thay đổi về lượng đều",
    options: {
      A: "Có khả năng dẫn đến thay đổi về chất",
      B: "Ngay lập tức thay đổi về chất",
      C: "Không thể lập tức làm thay đổi về chất",
      D: "Không làm thay đổi về chất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 24,
    question:
      'Chọn phương án đúng để điền vào chỗ trống: " Điểm xuất phát của ... là sự khẳng định những sự vật hiện tượng của tự nhiên đều bao hàm những mâu thuẫn vốn có của chúng"',
    options: {
      A: "Phép siêu hình",
      B: "Phép biện chứng",
      C: "Phép biện chứng duy tâm",
      D: "Chủ nghĩa duy vật",
    },
    correctAnswers: ["B"],
  },
  {
    page: 24,
    question:
      "Theo C.Mác, con người muốn sống thì trước hết cần có thức ăn, đồ mặc v.v. Như vậy, hành vi lịch sử đầu tiên là sản xuất ra:",
    options: {
      A: "Tư liệu sinh hoạt",
      B: "Tư liệu sản xuất",
      C: "Của cải",
      D: "Tư liệu lao động",
    },
    correctAnswers: ["A"],
  },
  {
    page: 25,
    question:
      "Chọn phương án đúng theo quan điểm duy tâm về lịch sử. Trong mối quan hệ giữa tồn tại xã hội và ý thức xã hội. (Kiểu hỏi khác: Quan điểm nào mang tính duy tâm khi bàn về mối quan hệ giữa tồn tại xã hội và ý thức xã hội?)",
    options: {
      A: "Suy đến cùng, tồn tại xã hội quyết định ý thức xã hội",
      B: "Suy đến cùng, ý thức xã hội quyết định tồn tại xã hội",
      C: "Tồn tại trong mối quan hệ phụ thuộc vào nhau, không cái nào quyết định cái nào",
      D: "Tùy từng điều mà xem xét cái nào quyết định cái nào",
    },
    correctAnswers: ["B"],
  },
  {
    page: 25,
    question:
      "Hình thái ý thức xã hội nào phản ánh bản chất và tính quy luật của thế giới khách quan?",
    options: {
      A: "Ý thức chính trị",
      B: "Ý thức pháp quyền",
      C: "Ý thức khoa học",
      D: "Ý thức đạo đức",
    },
    correctAnswers: ["C"],
  },
  {
    page: 25,
    question:
      "Trong 3 đặc trưng của giai cấp thì đặc trưng nào giữ vai trò chi phối các đặc trưng khác?",
    options: {
      A: "Khác nhau về vai trò trong tổ chức lao động xã hội",
      B: "Khác nhau về địa vị trong hệ thống tổ chức xã hội",
      C: "Khác nhau về quan hệ sở hữu tư liệu sản xuất xã hội",
      D: "Tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác",
    },
    correctAnswers: ["C"],
  },
  {
    page: 25,
    question:
      "Trong 3 đặc trưng của giai cấp, đặc trưng nào giữ vai trò chi phối các đặc trưng khác?",
    options: {
      A: "Tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác",
      B: "Khác nhau về quan hệ sở hữu tư liệu sản xuất xã hội",
      C: "Khác nhau về vai trò trong tổ chức lao động xã hội",
      D: "Khác nhau về địa vị trong hệ thống tổ chức xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 25,
    question: "Triết học Mác là thế giới quan khoa học của giai cấp nào?",
    options: {
      A: "Giai cấp tư sản tiến bộ",
      B: "Giai cấp công nhân",
      C: "Tầng lớp trí thức",
      D: "Giai cấp lao động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 26,
    question:
      "Theo quan điểm của triết học Mác-Lênin, tiêu chí cơ bản để đánh giá phẩm chất của mỗi cá nhân",
    options: {
      A: "Địa vị xã hội của cá nhân",
      B: "Thái độ, hành vi đạo đức của cá nhân",
      C: "Sự thực hiện khả năng làm chủ đối với hoàn cảnh và hành động thực tiễn của cá nhân",
      D: "Tất cả đều đúng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 26,
    question: "Đâu là nguồn gốc lý luận của chủ nghĩa Mác?",
    options: {
      A: "Tư tưởng xã hội phương Đông cổ đại",
      B: "Triết học cổ điển Đức, kinh tế chính trị cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp",
      C: "Chủ nghĩa duy vật siêu hình thế kỷ XVII - XVIII ở Tây Âu",
      D: "Học thuyết tiến hóa",
    },
    correctAnswers: ["B"],
  },
  {
    page: 26,
    question:
      "Ý thức tôn giáo là niềm tin của bộ phận nhân dân, thường là yếu tố bền vững nhất trong đời sống mỗi con người, mỗi xã hội. Vậy, nguyên nhân sự tồn tại bền vững của ý thức tôn giáo là gì?",
    options: {
      A: "Nhận thức",
      B: "Trình độ",
      C: "Văn hóa",
      D: "Tâm lý",
    },
    correctAnswers: ["D"],
  },
  {
    page: 26,
    question:
      "Một sinh viên chuẩn bị bài seminar trong 1 tuần theo cách thức: ngày đầu phác thảo đề cương sơ lược sau đó hằng ngày dành 15 phút sửa chữa và bổ sung bài chuẩn bị đó cả kết cấu, nội dung. Đúng vào buổi seminar, sinh viên đó đã có một bản chuẩn bị hoàn chỉnh. Công việc trên diễn ra theo nguyên lí, quy luật nào?",
    options: {
      A: "Quy luật mâu thuẫn",
      B: "Quy luật lượng - chất",
      C: "Quy luật phủ định của phủ định",
      D: "Nguyên lý về mối liên hệ phổ biến",
    },
    correctAnswers: ["B"],
  },
  {
    page: 27,
    question:
      "Định nghĩa của V.I.Lênin về giai cấp là những tập đoàn người to lớn có sự phân biệt về:",
    options: {
      A: "Địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử",
      B: "Địa vị của họ trong quá trình quản lý và phân phối của cải xã hội",
      C: "Địa vị của họ trong quản lý chính trị, văn hóa và xã hội",
      D: "Địa vị của họ trong việc nắm quyền lực nhà nước",
    },
    correctAnswers: ["A"],
  },
  {
    page: 27,
    question:
      "Trong tư liệu lao động, bộ phận nào cần được phát triển đi trước một bước so với đầu tư sản xuất trực tiếp?",
    options: {
      A: "Kết cấu hạ tầng sản xuất",
      B: "Công cụ sản xuất",
      C: "Các bộ phận chứa đựng, bảo quản",
      D: "Các phương án trả lời đều đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 27,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì phạm trù chỉ một sự vật, một hiện tượng, một quá trình nhất định là",
    options: {
      A: "Đặc thù",
      B: "Bản chất",
      C: "Cái riêng",
      D: "Hiện tượng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 27,
    question:
      "Theo Ph. Ăngghen, tính thống nhất của vật chất được chứng minh bởi:",
    options: {
      A: "Thực tiễn lịch sử",
      B: "Thực tiễn cách mạng",
      C: "Sự phát triển lâu dài của khoa học",
      D: "Sự phát triển lâu dài và khó khăn của triết học và khoa học tự nhiên",
    },
    correctAnswers: ["D"],
  },
  {
    page: 27,
    question:
      'Theo V.I. Lênin "Chủ nghĩa Mác đã mở đường cho việc nghiên cứu rộng rãi và toàn diện quá trình phát sinh, phát triển và suy tàn của..."',
    options: {
      A: "Hệ thống vật chất trong giới tự nhiên",
      B: "Các quá trình kinh tế và chính trị - xã hội",
      C: "Các sự vật, hiện tượng trong thế giới tự nhiên, xã hội và tư duy",
      D: "Các hình thái kinh tế - xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 28,
    question:
      "Theo quan niệm duy vật biện chứng về lịch sử thì do khác nhau và đối lập nhau về yếu tố nào tạo ra khả năng khách quan dẫn đến tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác?",
    options: {
      A: "Quyền lực",
      B: "Sở hữu",
      C: "Địa vị",
      D: "Tài sản",
    },
    correctAnswers: ["C"],
  },
  {
    page: 28,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì chất là sự thống nhất hữu cơ của các thuộc tính cấu thành nó và là phạm trù dùng để chỉ tính quy định gì của sự vật, hiện tượng?",
    options: {
      A: "Có tổ chức",
      B: "Khách quan vốn có",
      C: "Về kết cấu",
      D: "Về kết quả",
    },
    correctAnswers: ["B"],
  },
  {
    page: 28,
    question:
      'Trong mối quan hệ giữa "lực lượng sản xuất và quan hệ sản xuất", yếu tố nào là nội dung, yếu tố nào là hình thức?',
    options: {
      A: "Lực lượng sản xuất là nội dung - quan hệ sản xuất là hình thức",
      B: "Quan hệ sản xuất là nội dung- lực lượng sản xuất là hình thức",
      C: "Lực lượng sản xuất và quan hệ sản xuất đều là nội dung",
      D: "Lực lượng sản xuất và quan hệ sản xuất đều là hình thức",
    },
    correctAnswers: ["A"],
  },
  {
    page: 28,
    question:
      "Trong lý luận nhận thức, cần nhìn nhận sự vật trong trạng thái vận động và phát triển. Điều đó dựa trên cơ sở lý luận của nguyên lý nào? (Kiểu hỏi khác: Trong hoạt động nhận thức, ....)",
    options: {
      A: "Nguyên lý về mối liên hệ phổ biến",
      B: "Nguyên lý về sự phát triển",
      C: "Nguyên lý về tính thống nhất vật chất của thế giới",
    },
    correctAnswers: ["B"],
  },
  {
    page: 28,
    question:
      "Tiêu chí nào là quan trọng nhất để phân biệt các hình thái kinh tế xã hội",
    options: {
      A: "Lực lượng sản xuất",
      B: "Quan hệ sản xuất",
      C: "Tồn tại xã hội",
      D: "Kiến trúc thượng tầng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 29,
    question:
      "Nguyên tắc thống nhất giữa lý luận và thực tiễn là nguyên tắc được rút ra (trực tiếp) từ mối quan hệ nào?",
    options: {
      A: "Mối quan hệ giữa vật chất và ý thức.",
      B: "Lý luận và nhận thức.",
      C: "Quan hệ giữa khả năng và hiện thực",
      D: "Phán đoán suy luận",
    },
    correctAnswers: ["B"],
  },
  {
    page: 29,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra nguồn gốc của sự phát triển cơ bản phổ biến của sự vận động và phát triển",
    options: {
      A: "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      B: "Quy luật chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật về sự phù hợp của QHSX và trình độ LLSX",
    },
    correctAnswers: ["A"],
  },
  {
    page: 29,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra cách thức / hình thức của sự phát triển cơ bản phổ biến của sự vận động và phát triển",
    options: {
      A: "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      B: "Quy luật về chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại (Quy luật lượng - chất)",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật về sự phù hợp của QHSX và trình độ LLSX",
    },
    correctAnswers: ["B"],
  },
  {
    page: 29,
    question:
      "Triết học của các nhà tư tưởng thời kỳ Phục Hưng có đặc điểm gì?",
    options: {
      A: "Có tính chất duy vật tự phát",
      B: "Có tính chất duy tâm khách quan",
      C: "Còn pha trộn giữa các yếu tố duy vật và duy tâm",
      D: "Còn pha trộn giữa các yếu tố duy tâm thần bí và siêu hình",
    },
    correctAnswers: ["C"],
  },
  {
    page: 30,
    question:
      "Một trong các nội dung định nghĩa của Lênin về vật chất đó là, vật chất được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại.",
    options: {
      A: "Lệ thuộc vào cảm giác",
      B: "Không lệ thuộc vào cảm giác",
      C: "Tùy thuộc vào nhận thức",
      D: "Tuỳ theo ý thức",
    },
    correctAnswers: ["B"],
  },
  {
    page: 30,
    question:
      "Theo Lênin, vật chất dưới hình thức thế nào thì là cái có thể gây nên cảm giác của con người khi nó trực tiếp hay gián tiếp tác động đến giác quan của con người?",
    options: {
      A: "Những dạng cụ thể",
      B: "Tồn tại khách quan",
      C: "Khái quát của nó",
      D: "Tự nhiên của nó",
    },
    correctAnswers: ["A"],
  },
  {
    page: 30,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng, cuộc đấu tranh giữa những người lao động làm thuê, những người nô lệ bị áp bức về chính trị - xã hội và bị bóc lột về kinh tế chống lại bọn áp bức và bóc lột nó là thực chất (Kiểu hỏi khác: Theo quan điểm của chủ nghĩa duy vật lịch sử, cuộc đấu tranh giữa những người lao động làm thuê, những người nô lệ bị áp bức về chính trị - xã hội và bị bóc lột về kinh tế chống lại bọn áp bức và bóc lột thực chất là gì?)",
    options: {
      A: "Đấu tranh giai cấp",
      B: "Ra đời giai cấp",
      C: "Cách mạng",
      D: "Ra đời nhà nước",
    },
    correctAnswers: ["A"],
  },
  {
    page: 30,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng, tồn tại xã hội là khái niệm dùng để chỉ phương diện sinh hoạt vật chất và những điều kiện gì của xã hội?",
    options: {
      A: "Văn hoá tinh thần",
      B: "Sinh hoạt tinh thần",
      C: "Sinh hoạt vật chất",
      D: "Kinh tế",
    },
    correctAnswers: ["C"],
  },
  {
    page: 30,
    question: "Tồn tại xã hội là gì?",
    options: {
      A: "Sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội",
      B: "Toàn bộ các giá trị tinh thần của xã hội",
      C: "Toàn bộ các điều kiện sinh hoạt của xã hội",
      D: "Toàn bộ hệ tư tưởng về sự tồn tại của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 31,
    question: "Chủ nghĩa xã hội không tưởng đề cao yếu tố gì?",
    options: {
      A: "Tinh thần nhân đạo",
      B: "Xã hội đại đồng",
      C: "Sự bình đẳng",
      D: "Một xã hội không còn sự bóc lột",
    },
    correctAnswers: ["A"],
  },
  {
    page: 31,
    question:
      "Vị trí của quy luật phủ định của phủ định trong phép biện chứng duy vật",
    options: {
      A: "Chỉ ra cách thức của sự phát triển",
      B: "Chỉ ra nguồn gốc của sự phát triển",
      C: "Chỉ ra nguyên nhân của sự phát triển",
      D: "Chỉ ra khuynh hướng của sự phát triển",
    },
    correctAnswers: ["D"],
  },
  {
    page: 31,
    question:
      "Hệ thống những quan điểm lý luận chung nhất về thế giới và về vị trí của con người trong thế giới đó là:",
    options: {
      A: "Quan điểm biện chứng",
      B: "Chủ nghĩa duy vật",
      C: "Chủ nghĩa duy vật biện chứng",
      D: "Triết học",
    },
    correctAnswers: ["D"],
  },
  {
    page: 31,
    question:
      "Quan điểm ủng hộ cái mới tiến bộ, từ đó chống lại cái cũ, cái lỗi thời kìm hãm sự phát triển là quan điểm được rút ra trực tiếp từ:",
    options: {
      A: "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
      B: "Quy luật thống nhất và quy luật đấu tranh của các mặt đối lập",
      C: "Quy luật phủ định của phủ định",
    },
    correctAnswers: ["C"],
  },
  {
    page: 31,
    question: "Học thuyết Hình thái kinh tế - xã hội là nội dung của",
    options: {
      A: "Phép biện chứng",
      B: "Tất cả các đáp án đều đúng",
      C: "Chủ nghĩa duy vật biện chứng",
      D: "Chủ nghĩa duy vật lịch sử",
    },
    correctAnswers: ["D"],
  },
  {
    page: 31,
    question:
      "Cách thức mà con người dùng để tiến hành quá trình sản xuất của xã hội ở những giai đoạn lịch sử nhất định gọi là:",
    options: {
      A: "Phương thức sản xuất",
      B: "Nghệ thuật sản xuất",
      C: "Kỹ thuật sản xuất",
      D: "Công nghệ sản xuất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 32,
    question: "Đâu là nhận định sai về Triết học Mác ?",
    options: {
      A: "Triết học Mác cho rằng triết học là khoa học của mọi khoa học",
      B: "Theo quan điểm của triết học Mác triết học không thay thế được các khoa học cụ thể",
      C: "Theo quan điểm của triết học Mác thì sự phát triển của triết học quan hệ chặt chẽ với sự phát triển của khoa học tự nhiên",
      D: "Triết học Mác là sự tổng hợp của các trường phái triết học trong lịch sử",
    },
    correctAnswers: ["A"],
  },
  {
    page: 32,
    question:
      "Từ thế kỉ VIII trước công nguyên với nhà nước đầu tiên trong lịch sử, giai cấp tư hữu đã dùng pháp luật và bộ máy thống trị của mình để chiếm mất quyền lực của đông đảo quần chúng nhân dân lao động là những...",
    options: {
      A: "Nông dân",
      B: "Người tự do",
      C: "Người nô lệ",
      D: "Nông nô",
    },
    correctAnswers: ["C"],
  },
  {
    page: 32,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng lịch sử, xã hội loài người đã trải qua bao nhiêu hình thái kinh tế xã hội? (Kiểu hỏi khác: Theo quan điểm của chủ nghĩa duy vật lịch sử, loài người đã và đang trải qua bao nhiêu hình thái kinh tế - xã hội?)",
    options: {
      A: "Bốn hình thái kinh tế xã hội",
      B: "Ba hình thái kinh tế xã hội",
      C: "Năm hình thái kinh tế xã hội [Giải thích: Công xã nguyên thủy, Chiếm hữu nô lệ, Phong kiến, Tư bản chủ nghĩa, Cộng sản chủ nghĩa (giai đoạn đầu là chủ nghĩa xã hội)]",
    },
    correctAnswers: ["C"],
  },
  {
    page: 32,
    question:
      'Hãy xác định luận điểm nào sai khi đề cập đến "mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng"?',
    options: {
      A: "Sự phát triển của lực lượng sản xuất trực tiếp làm thay đổi quan hệ sản xuất, và thông qua đó làm thay đổi kiến trúc thượng tầng",
      B: "Cơ sở hạ tầng thay đổi thì sớm muộn gì kiến trúc thượng tầng cũng thay đổi theo",
      C: "Trong xã hội có giai cấp, giai cấp nào thống trị về kinh tế thì sẽ thống trị về chính trị, tư tưởng",
      D: "Các mâu thuẫn trong chính trị, tư tưởng xét đến cùng quyết định các mâu thuẫn trong lĩnh vực kinh tế",
    },
    correctAnswers: ["D"],
  },
  {
    page: 33,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng, trong thực tế chúng ta phải dựa vào điều gì?",
    options: {
      A: "Dựa vào tất nhiên, đề phòng ngẫu nhiên",
      B: "Dựa vào ngẫu nhiên, đề phòng tất nhiên",
      C: "Dựa vào cả tất nhiên và ngẫu nhiên",
      D: "Không dựa vào các yếu tố nào mang tính tất nhiên, ngẫu nhiên",
    },
    correctAnswers: ["A"],
  },
  {
    page: 33,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng về mối quan hệ giữa tất nhiên và ngẫu nhiên, trong hoạt động thực tiễn, cần dựa vào điều gì?",
    options: {
      A: "Dựa vào ngẫu nhiên, dự phòng tất nhiên",
      B: "Dựa vào ngẫu nhiên, đề phòng tất nhiên",
      C: "Dựa vào cả tất nhiên và ngẫu nhiên",
      D: "Không dựa vào các yếu tố nào mang tính tất nhiên, ngẫu nhiên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 33,
    question:
      "Đấu tranh giai cấp có vai trò gì đối với sự phát triển của xã hội?",
    options: {
      A: "Kìm hãm sự phát triển của xã hội",
      B: "Tất cả đều sai",
      C: "Không có vai trò gì",
      D: "Là động lực thúc đẩy",
    },
    correctAnswers: ["D"],
  },
  {
    page: 33,
    question: "Cơ sở trực tiếp và chủ yếu nhất để hình thành khái niệm là",
    options: {
      A: "Thế giới tự nhiên",
      B: "Thực tiễn",
      C: "Cảm giác",
      D: "Tri giác và biểu tượng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 33,
    question:
      "Trong chủ nghĩa Mác - Lênin, bộ phận lý luận nào có chức năng làm sáng tỏ bản chất và những quy luật chung nhất của mọi sự vận động, phát triển của thế giới?",
    options: {
      A: "Triết học Mác - Lênin",
      B: "Kinh tế chính trị Mác - Lênin",
      C: "Chủ nghĩa xã hội khoa học",
      D: "Không có bộ phận nào giữ chức năng đó vì chủ nghĩa Mác - Lênin thuộc khoa học xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 33,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, yếu tố cơ bản nhất tạo thành điều kiện sinh hoạt vật chất của xã hội là các yếu tố thuộc về",
    options: {
      A: "Điều kiện tự nhiên",
      B: "Điều kiện dân cư",
      C: "Phương thức sản xuất ra của cải vật chất",
      D: "Không có yếu tố nào là cơ bản nhất mà tùy thuộc các điều kiện lịch sử cụ thể khác nhau",
    },
    correctAnswers: ["C"],
  },
  {
    page: 34,
    question: "Chủ nghĩa Mác - Lênin sẽ phát triển đạt đến đâu?",
    options: {
      A: "Đã phát triển đến mức hoàn toàn đầy đủ",
      B: "Trong đó mọi vấn đề được giải quyết triệt để, chỉ cần nghiên cứu và vận dụng trong thực tiễn",
      C: "Có thể thay thế cho mọi khoa học",
      D: "Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn",
    },
    correctAnswers: ["D"],
  },
  {
    page: 34,
    question:
      "Theo quan điểm duy tâm, lực lượng sáng tạo ra lịch sử là : (Cách hỏi khác: Theo quan điểm của chủ nghĩa duy tâm chủ quan, lực lượng sáng tạo ra lịch sử là lực lượng nào?)",
    options: {
      A: "Quần chúng nhân dân lao động",
      B: "Giai cấp thống trị xã hội",
      C: "Các vĩ nhân, những cá nhân kiệt xuất",
      D: "Giai cấp bị trị xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 34,
    question:
      "Chủ nghĩa nào mà sự tồn tại phát triển của nó thường gắn với lợi ích giai cấp và các lực lượng tiến bộ trong lịch sử?",
    options: {
      A: "Duy vật thô sơ",
      B: "Duy vật",
      C: "Duy tâm khách quan",
      D: "Chiết trung",
    },
    correctAnswers: ["B"],
  },
  {
    page: 34,
    question:
      "Hình thức hoạt động thực tiễn cơ bản nhất quy định các hình thức hoạt động khác là hình thức nào sau đây?",
    options: {
      A: "Hoạt động chính trị xã hội",
      B: "Hoạt động quan sát và thực nghiệm khoa học",
      C: "Hoạt động sản xuất vật chất",
      D: "Hoạt động kinh tế",
    },
    correctAnswers: ["C"],
  },
  {
    page: 34,
    question:
      "Theo quan điểm duy vật lịch sử thì xã hội có các loại hình sản xuất cơ bản nào?",
    options: {
      A: "Sản xuất ra của cải vật chất, đời sống tinh thần và nghệ thuật",
      B: "Sản xuất ra văn hóa, con người và đời sống tinh thần",
      C: "Sản xuất ra của cải vật chất, tinh thần và văn hóa",
      D: "Sản xuất ra của cải vật chất, tinh thần và con người",
    },
    correctAnswers: ["D"],
  },
  {
    page: 35,
    question:
      "Theo quan điểm duy vật lịch sử, nguồn gốc sâu xa của các cuộc cách mạng là do đâu?",
    options: {
      A: "Mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất",
      B: "Giai cấp cầm quyền bị khủng hoảng về đường lối cai trị",
      C: "Quần chúng lao động bị áp bức",
      D: "Quần chúng lao động bị áp bức nặng nề",
    },
    correctAnswers: ["A"],
  },
  {
    page: 35,
    question: "Chọn phương án đúng về đấu tranh giai cấp?",
    options: {
      A: "Đấu tranh giai cấp là một trong những động lực phát triển của xã hội có giai cấp",
      B: "Đấu tranh giai cấp là động lực mạnh mẽ nhất làm thay đổi xã hội",
      C: "Đấu tranh giai cấp là một trong những động lực phát triển của xã hội",
      D: "Đấu tranh giai cấp là động lực phát triển của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 35,
    question:
      '"Những thời đại kinh tế khác nhau không phải ở chỗ chúng sản xuất ra cái gì, mà là ở chỗ chúng sản xuất bằng cách nào, với những tư liệu lao động nào”. Câu nói trên là của ai?',
    options: {
      A: "Ph.Ăng ghen",
      B: "D. Ricardo C. Mác",
    },
    correctAnswers: ["C"],
  },
  {
    page: 35,
    question:
      'Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Quá trình "lịch sử tự nhiên" của sự phát triển các hình thái kinh tế xã hội là quá trình phát triển theo',
    options: {
      A: "Ý niệm tuyệt đối",
      B: "Quy luật khách quan của xã hội",
      C: "Quy luật của tự nhiên",
      D: "Ý muốn chủ quan của con người",
    },
    correctAnswers: ["B"],
  },
  {
    page: 35,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Chủ thể sáng tạo chân chính ra lịch sử là:",
    options: {
      A: "Quần chúng nhân dân",
      B: "Các cá nhân kiệt xuất, các vĩ nhân",
      C: "Giai cấp thống trị",
      D: "Tầng lớp trí thức trong xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 36,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Mỗi phương thức sản xuất đều được tạo nên bởi hai mặt:",
    options: {
      A: "Kỹ thuật và công nghệ",
      B: "Kỹ thuật và lao động",
      C: "Kỹ thuật và kinh tế",
      D: "Kỹ thuật và tổ chức",
    },
    correctAnswers: ["C"],
  },
  {
    page: 36,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Thực chất của quá trình sản xuất vật chất là quá trình:",
    options: {
      A: "Con người thực hiện sự cải biến giới tự nhiên",
      B: "Con người nhận thức thế giới và bản thân mình",
      C: "Con người thực hiện sáng tạo trong tư duy",
      D: "Con người thực hiện lợi ích của mình",
    },
    correctAnswers: ["A"],
  },
  {
    page: 36,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Nhân tố quyết định trong lực lượng sản xuất là nhân tố:",
    options: {
      A: "Tư liệu sản xuất",
      B: "Người lao động",
      C: "Công cụ lao động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 36,
    question:
      "Chọn câu trả lời đúng, đầy đủ nhất theo quan niệm duy vật lịch sử: Cách mạng xã hội giữ vai trò là (Kiểu hỏi khác: Theo quan điểm của chủ nghĩa duy vật lịch sử, cách mạng xã hội giữa vai trò gì?)",
    options: {
      A: "Nguồn gốc và động lực tiến bộ của xã hội",
      B: "Động lực phát triển của mọi xã hội",
      C: "Một trong những phương thức, động lực phát triển xã hội",
      D: "Phương thức, động lực cơ bản nhất của sự phát triển xã hội trong điều kiện xã hội có sự phân hóa thành đối kháng giai cấp",
    },
    correctAnswers: ["D"],
  },
  {
    page: 37,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, nguồn gốc, động lực cơ bản nhất của mọi quá trình phát triển xã hội là gì?",
    options: {
      A: "Sự phát triển của khoa học",
      B: "Sự vận động của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
      C: "Sự phát triển của khoa học công nghệ",
      D: "Đấu tranh giai cấp",
    },
    correctAnswers: ["B"],
  },
  {
    page: 37,
    question:
      "Xét đến cùng, nhân tố quan trọng nhất quyết định sự thắng lợi của một trật tự xã hội mới là",
    options: {
      A: "Năng suất lao động",
      B: "Luật pháp",
      C: "Chính trị",
      D: "Kinh tế",
    },
    correctAnswers: ["A"],
  },
  {
    page: 37,
    question: "Quan hệ sản xuất là phạm trù dùng để chỉ",
    options: {
      A: "Quan hệ giữa con người sản xuất với người tiêu dùng trong quá trình sản xuất",
      B: "Quan hệ giữa người với người trong quá trình sản xuất",
      C: "Quan hệ giữa con người với tự nhiên trong quá trình sản xuất",
    },
    correctAnswers: ["B"],
  },
  {
    page: 37,
    question: "Chọn câu trả lời đúng. Lực lượng sản xuất bao gồm:",
    options: {
      A: "Tư liệu sản xuất và người lao động",
      B: "Người lao động và công cụ lao động",
      C: "Người lao động và trình độ lao động của họ",
      D: "Tư liệu sản xuất và các nguồn lực tự nhiên",
    },
    correctAnswers: ["A"],
  },
  {
    page: 37,
    question:
      'Quan niệm cho rằng "suy nghĩ của những người sống trong túp lều tranh luôn luôn khác với suy nghĩ của những kẻ sống trong cung điện" là quan điểm của',
    options: {
      A: "Chủ nghĩa duy tâm",
      B: "Chủ nghĩa duy vật siêu hình",
      C: "Chủ nghĩa duy vật lịch sử",
      D: "Chủ nghĩa duy vật",
    },
    correctAnswers: ["B"],
  },
  {
    page: 38,
    question: "Bản chất của con người được quyết định bởi",
    options: {
      A: "Các quan hệ xã hội",
      B: "Giáo dục gia đình",
      C: "Sự nỗ lực của cá nhân",
      D: "Giáo dục nhà trường",
    },
    correctAnswers: ["A"],
  },
  {
    page: 38,
    question:
      "Một sinh viên chuẩn bị bài thuyết trình trong một tháng theo cách thức: Tuần đầu phác thảo đề cương và hàng ngày dành 30 phút sửa chữa bổ sung hoàn thiện. Vào buổi thuyết trình sinh viên đã có một bản thảo hoàn chỉnh. Công việc trên đã diễn ra theo quy luật, nguyên lý nào?",
    options: {
      A: "Quy luật lượng - chất",
      B: "Quy luật mâu thuẫn",
      C: "Quy luật phủ định của phủ định",
      D: "Nguyên lý về sự phát triển",
    },
    correctAnswers: ["A"],
  },
  {
    page: 38,
    question: "Đặc trưng chủ yếu của cách mạng xã hội là gì?",
    options: {
      A: "Sự thay đổi về hệ tư tưởng nói riêng và toàn bộ đời sống tinh thần của xã hội nói chung",
      B: "Sự thay đổi về cơ cấu, tổ chức hoạt động sản xuất ra của cải vật chất trong xã hội",
      C: "Sự thay đổi chính quyền nhà nước từ tay giai cấp thống trị đã lỗi thời sang tay giai cấp cách mạng.",
      D: "Sự thay đổi về thế lực cầm quyền trong cùng một giai cấp",
    },
    correctAnswers: ["C"],
  },
  {
    page: 38,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì quy luật nào vạch ra khuynh hướng cơ bản phổ biến của sự vận động và phát triển",
    options: {
      A: "Quy luật thống nhất và đấu tranh của các mặt đối lập",
      B: "Quy luật về chuyển hóa sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật về sự phù hợp của QHSX và trình độ LLSX",
    },
    correctAnswers: ["C"],
  },
  {
    page: 39,
    question:
      "Khái niệm nào chỉ sự quy định, sự tác động qua lại, sự chuyển hóa lẫn nhau giữa các sự vật, hiện tượng hay giữa các mặt, các yếu tố trong một sự vật, hiện tượng?",
    options: {
      A: "Mối liên hệ",
      B: "Sự phát triển",
      C: "Sự thay đổi",
      D: "Sự biến đổi",
    },
    correctAnswers: ["A"],
  },
  {
    page: 39,
    question: "Khái niệm quan hệ sản xuất được hiểu là",
    options: {
      A: "Mối quan hệ giữa người với người trong quá trình sản xuất",
      B: "Mối quan hệ giữa người với người trong quá trình tiêu dùng",
      C: "Mối quan hệ giữa người với người trong quá trình phân phối",
      D: "Mối quan hệ giữa người với người trong quá trình hoạch định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 39,
    question: "Khái niệm lực lượng sản xuất được hiểu là",
    options: {
      A: "Toàn bộ những năng lực thực tiễn dùng trong sản xuất của xã hội",
      B: "Toàn bộ những năng lực thực tiễn dùng trong tiêu dùng của xã hội",
      C: "Toàn bộ những năng lực thực tiễn dùng trong phân phối của xã hội",
      D: "Toàn bộ những năng lực thực tiễn dùng trong hoạch định của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 39,
    question:
      "Mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng là mối quan hệ:",
    options: {
      A: "Luôn luôn thống nhất với nhau",
      B: "Luôn luôn đối lập nhau",
      C: "Thống nhất và đấu tranh giữa hai mặt đối lập",
      D: "Thống nhất là căn bản, còn đấu tranh giữa chúng chỉ là tạm thời",
    },
    correctAnswers: ["C"],
  },
  {
    page: 39,
    question: "V.I. Lênin cho rằng: Tính....không thể tách rời tính phổ biến.",
    options: {
      A: "Nhân quả",
      B: "Tất nhiên",
      C: "Đơn nhất",
      D: "Hiện thực",
    },
    correctAnswers: ["B"],
  },
  {
    page: 40,
    question: "Thế giới quan là gì?",
    options: {
      A: "Quan điểm, cách nhìn về XH",
      B: "Quan điểm, cách nhìn về thế giới tự nhiên",
      C: "Quan điểm, niềm tin, nhìn nhận về các sự vật cụ thể",
      D: "Toàn bộ quan điểm và niềm tin định hướng hoạt động con người trong cuộc sống",
    },
    correctAnswers: ["D"],
  },
  {
    page: 40,
    question:
      "Ý thức tôn giáo là niềm tin của một bộ phận nhân dân, thường là yếu tố bền vững nhất trong đời sống tinh thần của mỗi con người, của xã hội là nguyên nhân gì (?) của sự tồn tại tôn giáo?",
    options: {
      A: "Nhận thức.",
      B: "Văn hóa.",
      C: "Trình độ.",
      D: "Tâm lý.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 40,
    question:
      "Nguồn gốc vận động và phát triển của các hình thái kinh tế - xã hội là gì? Chọn một câu trả lời đúng:",
    options: {
      A: "Sự tăng lên không ngừng của năng suất lao động.",
      B: "Mâu thuẫn giai - tầng trong xã hội, sự thay đổi của quan hệ sản xuất.",
      C: "Do việc giải quyết mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất, mâu thuẫn giữa cơ sở hạ tầng với kiến trúc thượng tầng.",
      D: "Quần chúng nhân dân không ngừng nổi dậy đấu tranh chống các thế lực phản động trong xã hội.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 40,
    question: "Câu trả lời sau đây, câu nào diễn đạt chưa chuẩn xác:",
    options: {
      A: "Chủ nghĩa Mác là học thuyết do C. Mác sáng lập.",
      B: "Chủ nghĩa Mác là học thuyết về sự nghiệp giải phóng giai cấp vô sản và nhân dân lao động.",
      C: "Chủ nghĩa Mác là thế giới quan và phương pháp luận chung của mọi nhận thức và thực tiễn.",
      D: "Chủ nghĩa Mác là học thuyết được xây dựng trên cơ sở kế thừa những tinh hoa của lịch sử tư tưởng nhân loại và thực tiễn cách mạng.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 41,
    question:
      "Trong chỉ đạo thực tiễn cần căn cứ vào đâu để đề ra chủ trương, phương hướng hành động?",
    options: {
      A: "Cái tất nhiên, bản chất, nội dung.",
      B: "Cái ngẫu nhiên, hình thức, hiện tượng",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["A"],
  },
  {
    page: 41,
    question:
      "Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất, về mối quan hệ giữa vật chất và ý thức, tồn tại xã hội và ý thức xã hội:",
    options: {
      A: "Làm gì.",
      B: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán.",
      C: "Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Mác.",
      D: "Bút ký triết học.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 41,
    question:
      "Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển tư tưởng biện chứng trong triết học của G.W.Ph. Hêghen?",
    options: {
      A: "Làm gì?",
      B: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán.",
      C: "Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Mác.",
      D: "Bút ký triết học.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 41,
    question: "Nội dung mặt thứ nhất của vấn đề cơ bản của triết học là:",
    options: {
      A: "Quan hệ giữa vật chất với ý thức.",
      B: "Quan hệ giữa ý thức với vật chất.",
      C: "Khả năng nhận thức thế giới của con người.",
      D: "Bản chất của thế giới là vật chất hay ý thức.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 41,
    question: "Theo Ph. Ăngghen, chia vận động thành:",
    options: {
      A: "Bốn hình thức vận động cơ bản",
      B: "Năm hình thức vận động cơ bản",
      C: "Sáu hình thức vận động cơ bản",
      D: "Ba hình thức vận động cơ bản",
    },
    correctAnswers: ["B"],
  },
  {
    page: 41,
    question: "Phương thức sản xuất bao gồm:",
    options: {
      A: "Lực lượng sản xuất và quan hệ sản xuất.",
      B: "Lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng.",
      C: "Lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng, kiến trúc thượng tầng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 42,
    question: "Ý nghĩa định nghĩa vật chất của Lênin được thể hiện:",
    options: {
      A: "Khẳng định tính thứ nhất của vật chất.",
      B: "Cho phép xác định cái gì là vật chất trong lĩnh vực xã hội.",
      C: "Các phương án trả lời đều đúng.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 42,
    question: "Chân lý có những tính chất gì?",
    options: {
      A: "Tính khách quan, tính tuyệt đối, tính tương đối, tính hoàn chỉnh",
      B: "Tính khách quan, tính tuyệt đối, tính tương đối, tính cụ thể",
      C: "Tính khách quan, tính tuyệt đối, tính tương đối, tính phổ biến",
    },
    correctAnswers: ["B"],
  },
  {
    page: 42,
    question: "Tư tưởng nôn nóng, đốt cháy giai đoạn phản ánh trực tiếp việc:",
    options: {
      A: "Không vận dụng quy luật phủ định của phủ định",
      B: "Không vận dụng đúng quy luật thống nhất và đấu tranh của các mặt đối lập",
      C: "Không vận dụng đúng quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
    },
    correctAnswers: ["C"],
  },
  {
    page: 42,
    question: "Thực tiễn là:",
    options: {
      A: "Hoạt động vật chất có mục đích mang tính lịch sử-xã hội của con người",
      B: "Hoạt động tinh thần nhằm tạo ra các giá trị thẩm mỹ",
      C: "Một số hoạt động vật chất và một số hoạt động tinh thần",
    },
    correctAnswers: ["A"],
  },
  {
    page: 42,
    question:
      "Những hình thức nhận thức: Khái niệm, phán đoán, suy luận thuộc giai đoạn nhận thức nào?",
    options: {
      A: "Nhận thức cảm tính",
      B: "Nhận thức lý tính",
      C: "Nhận thức thông thường",
      D: "Nhận thức khoa học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 42,
    question:
      "Theo quan điểm của triết học Mác-Lênin, tiêu chuẩn của chân lý là gì?",
    options: {
      A: "Tri thức do các thế hệ trước để lại",
      B: "Tri thức được nhiều người công nhận",
      C: "Thực tiễn",
      D: "Lời nói của các vĩ nhân",
    },
    correctAnswers: ["C"],
  },
  {
    page: 43,
    question:
      "V.I. Lenin khẳng định: Chủ nghĩa Mác dựa vào... chứ không phải dựa vào... để vạch ra đường lối chính trị của mình.",
    options: {
      A: "Khả năng/ Hiện thực.",
      B: "Hiện thực/ Ngẫu nhiên.",
      C: "Hiện thực/ Khả năng.",
      D: "Tất yếu/ Ngẫu nhiên.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 43,
    question:
      "V.I.Lênin cho rằng: nhận thức đi từ... đến..., từ bản chất ít sâu sắc đến bản chất sâu sắc hơn.",
    options: {
      A: "Hình thức/ nội dung",
      B: "Nội dung/ hình thức",
      C: "Bản chất/ hiện tượng",
      D: "Hiện tượng/ bản chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 43,
    question:
      '"Bản chất chỉ là tên gọi trống rỗng mà con người tưởng tượng ra, nó không tồn tại trên thực tế". Đây là quan niệm của trường phái triết học nào?',
    options: {
      A: "Duy tâm khách quan",
      B: "Bất khả tri",
      C: "Duy vật biện chứng",
      D: "Duy tâm chủ quan",
    },
    correctAnswers: ["D"],
  },
  {
    page: 43,
    question:
      "Trong quá trình vận động, phát triển của sự vật,... giữ vai trò quyết định...",
    options: {
      A: "Hình thức/Nội dung",
      B: "Nội dung/Hình thức",
      C: "Hiện tượng/Bản chất",
      D: "Ngẫu nhiên/Tất nhiên",
    },
    correctAnswers: ["B"],
  },
  {
    page: 43,
    question:
      'Trong các cụm từ dưới đây, cụm từ nào được xem là "hình thức" trong cặp phạm trù "nội dung - hình thức" mà phép biện chứng duy vật nghiên cứu: " truyện kiều là..."',
    options: {
      A: "Tác phẩm của Nguyễn Du",
      B: "Tác phẩm thơ lục bát",
      C: "Tác phẩm có bìa màu xanh",
      D: "Tác phẩm ra đời vào thế kỷ XVIII",
    },
    correctAnswers: ["B"],
  },
  {
    page: 44,
    question:
      "C.Mác và Ph.Ăngghen cho rằng: Cái mà người ta quả quyết cho là...thì lại hoàn toàn do những cái...cấu thành và cái được coi là...lại là hình thức trong đó ẩn nấp...",
    options: {
      A: "Tất yếu/ Ngẫu nhiên; Ngẫu nhiên/ Tất yếu.",
      B: "Ngẫu nhiên/ Tất yếu; Tất yếu/ Ngẫu nhiên",
      C: "Tất yếu/ Ngẫu nhiên; Tất yếu/ Ngẫu nhiên.",
      D: "Ngẫu nhiên/ Tất yếu; Ngẫu nhiên/ Tất yếu",
    },
    correctAnswers: ["A"],
  },
  {
    page: 44,
    question:
      '"Đói nghèo" và "dốt nát", hiện tượng nào là nguyên nhân, hiện tượng nào là kết quả?',
    options: {
      A: "Đói nghèo là nguyên nhân, dốt nát là kết quả.",
      B: "Dốt nát là nguyên nhân, đói nghèo là kết quả.",
      C: "Cả hai đều là nguyên nhân.",
      D: "Hiện tượng này vừa là nguyên nhân vừa là kết quả của hiện tượng kia.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 44,
    question: "Trong các cặp khái niệm dưới đây, cặp nào có quan hệ nhân quả?",
    options: {
      A: "Đông - Tây",
      B: "Nghèo - Dốt",
      C: "Xuân - Hạ",
      D: "Ngày - Đêm",
    },
    correctAnswers: ["B"],
  },
  {
    page: 44,
    question:
      "Sai lầm của các nhà triết học cổ đại trong quan niệm về vật chất?",
    options: {
      A: "Đồng nhất vật chất với một số dạng vật thể cụ thể, cảm tính.",
      B: "Vật chất là tất cả cái tồn tại khách quan.",
      C: "Vật chất là có thể nhận thức được.",
      D: "Vật chất tự thân vận động.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 44,
    question:
      "Khái niệm trung tâm mà V.I. Lênin sử dụng để định nghĩa về vật chất là?",
    options: {
      A: "Phạm trù triết học.",
      B: "Thực tại khách quan.",
      C: "Cảm giác.",
      D: "Phản ánh.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 45,
    question:
      '"Tất cả cái gì đang vận động, đều vận động nhờ một cái khác nào đó". Nhận định này gắn liền với hệ thống triết học nào? Hãy chọn phương án sai?',
    options: {
      A: "Triết học duy vật.",
      B: "Triết học duy tâm.",
      C: "Triết học duy tâm khách quan.",
      D: "Triết học duy tâm chủ quan.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 45,
    question:
      "Phép biện chứng của triết học Hêghen là: (Kiểu hỏi khác: Phép biện chứng của Hêghen là phép biện chứng gì?)",
    options: {
      A: "Phép biện chứng duy tâm chủ quan.",
      B: "Phép biện chứng duy vật hiện đại.",
      C: "Phép biện chứng ngây thơ, chất phác.",
      D: "Phép biện chứng duy tâm khách quan.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 45,
    question: "Chọn luận điểm thể hiện lập trường triết học duy tâm lịch sử:",
    options: {
      A: "Quan hệ sản xuất mang tính vật chất.",
      B: "Yếu tố kinh tế quyết định lịch sử.",
      C: "Sự vận động và phát triển của xã hội, suy cho cùng là do tư tưởng của con người quyết định.",
      D: "Kiến trúc thượng tầng chỉ đóng vai trò thụ động trong lịch sử.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 45,
    question: "Triết học trong xã hội có giai cấp được hiểu như thế nào?",
    options: {
      A: "Cũng có tính giai cấp",
      B: "Không có tính giai cấp",
      C: "Chỉ triết học phương Tây mới có tính giai cấp",
      D: "Chỉ có triết học phương Đông mới có tính giai cấp",
    },
    correctAnswers: ["A"],
  },
  {
    page: 45,
    question: "Động lực của cách mạng xã hội là",
    options: {
      A: "Giai cấp chân chính",
      B: "Giai cấp tiên tiến",
      C: "Giai cấp chiếm số đông",
    },
    correctAnswers: ["B"],
  },
  {
    page: 45,
    question: "Trong thực tế chúng ta phải dựa vào khả năng hay hiện thực",
    options: {
      A: "Khả năng",
      B: "Hiện thực",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["B"],
  },
  {
    page: 46,
    question:
      "Đặc điểm lớn nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là",
    options: {
      A: "Có nhiều thành phần kinh tế đan xen nhau",
      B: "Từ một nền sản xuất nhỏ là phổ biến quá độ lên chủ nghĩa xã hội không qua chế độ tư bản chủ nghĩa",
      C: "Năng suất lao động thấp",
    },
    correctAnswers: ["B"],
  },
  {
    page: 46,
    question: "Kết cấu của tồn tại xã hội bao gồm?",
    options: {
      A: "Phương thức sản xuất, điều kiện dân số, điều kiện tự nhiên địa lý",
      B: "Phương thức sản xuất, phương thức tiêu dùng, phương thức trao đổi hàng hóa",
      C: "Phương thức sản xuất, điều kiện dân số, cơ sở hạ tầng xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 46,
    question:
      "Thêm cụm từ thích hợp vào chỗ trống của câu sau để được luận điểm của chủ nghĩa duy vật biện chứng về tính chất của phạm trù: Nội dung của phạm trù có tính ..(1) ..., hình thức của phạm trù có tính...(2)...",
    options: {
      A: "1- chủ quan, 2- khách quan",
      B: "1- chủ quan, 2- chủ quan.",
      C: "1- khách quan, 2- chủ quan.",
      D: "1- khách quan, 2- khách quan",
    },
    correctAnswers: ["C"],
  },
  {
    page: 46,
    question:
      "Vật chất với tư cách là phạm trù triết học đã có lịch sử phát triển khoảng bao nhiêu năm",
    options: {
      A: "2500 năm",
      B: "3000 năm",
      C: "3500 năm",
      D: "4000 năm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 46,
    question: 'Khái niệm "bước nhảy"?',
    options: {
      A: "Sự đột biến",
      B: "Chuyển dần về chất",
      C: "Hoàn thiện chất",
      D: "Quá trình biến đổi về chất diễn ra tại điểm nút",
    },
    correctAnswers: ["D"],
  },
  {
    page: 47,
    question: "Cuộc cách mạng xã hội chủ nghĩa đầu tiên trên thế giới là",
    options: {
      A: "Cách mạng tháng Tám",
      B: "Cách mạng tháng Mười Nga",
      C: "Cách mạng Tân Hợi",
    },
    correctAnswers: ["B"],
  },
  {
    page: 47,
    question: "Lượng giá trị của đơn vị hàng hoá thay đổi",
    options: {
      A: "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ lao động.",
      B: "Tỷ lệ thuận với năng suất lao động",
      C: "Tỷ lệ nghịch với cường độ lao động",
    },
    correctAnswers: ["A"],
  },
  {
    page: 47,
    question: "Giá trị cá biệt của hàng hoá do",
    options: {
      A: "Hao phí lao động cá biệt của người sản xuất quyết định",
      B: "Hao phí lao động cá biệt của người sản xuất nhiều hàng hoá quyết định",
      C: "Hao phí lao động của ngành quyết định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 47,
    question: "Thuật ngữ giai cấp công nhân và giai cấp vô sản",
    options: {
      A: "Đồng nghĩa",
      B: "Khác nghĩa",
      C: "Không liên quan về nghĩa",
    },
    correctAnswers: ["A"],
  },
  {
    page: 47,
    question: "Biện chứng là phương pháp",
    options: {
      A: "Thấy cái chung mà không thấy cái riêng",
      B: "Thấy cái riêng mà không thấy cái chung",
      C: "Vừa thấy cái chung và cái riêng",
      D: "Vừa thấy cái chung, vừa thấy cái riêng và cái đơn nhất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 47,
    question: "Đặc điểm của quy luật triết học mang tính",
    options: {
      A: "Chung nhất, khái quát nhất về thế giới",
      B: "Cụ thể nhất, chi tiết nhất về thế giới",
      C: "Toàn diện nhất, sâu sắc nhất về thế giới",
    },
    correctAnswers: ["A"],
  },
  {
    page: 48,
    question: "Phân công lao động xã hội",
    options: {
      A: "Là một trong những nguyên nhân hình thành chủ nghĩa tư bản độc quyền",
      B: "Không dẫn đến sự hình thành tư bản độc quyền",
      C: "Nguyên nhân hình thành chủ nghĩa tư bản",
      D: "Là một trong những nguyên nhân hình thành chủ nghĩa tư bản độc quyền nhà nước",
    },
    correctAnswers: ["A"],
  },
  {
    page: 48,
    question:
      "Triết học bao gồm những quan điểm chung nhất, những sự lý giải có luận chứng cho các câu hỏi chung của con người, nên triết học bao gồm toàn bộ tri thức của nhân loại. Kết luận trên ứng với triết học thời kỳ nào? Chọn câu trả lời đúng.",
    options: {
      A: "Triết học cổ đại",
      B: "Triết học phục hưng",
      C: "Triết học Trung cổ - Tây âu",
      D: "Triết học Mác - Lênin",
    },
    correctAnswers: ["A"],
  },
  {
    page: 48,
    question: "Thời gian chu chuyển của tư bản được hiểu.",
    options: {
      A: "Thời gian sản xuất + thời gian bán hàng.",
      B: "Thời gian sản xuất + thời gian lưu thông.",
      C: "Thời gian dự trữ sản xuất + thời gian lưu thông.",
      D: "Thời gian sản xuất + thời gian tiếp thị.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 48,
    question:
      "Loại tái sản xuất nào làm tăng sản phẩm chủ yếu do tăng năng suất lao động và hiệu quả sử dụng các nguồn lực?",
    options: {
      A: "Tái sản xuất mở rộng theo chiều rộng",
      B: "Tái sản xuất mở rộng",
      C: "Tái sản xuất mở rộng theo chiều sâu",
    },
    correctAnswers: ["C"],
  },
  {
    page: 48,
    question:
      "Ph.Ăngghen cho rằng: đối với ai phủ nhận...thì mọi quy luật tự nhiên đều là giả thuyết.",
    options: {
      A: "Vấn đề nội dung hình thức",
      B: "Phạm trù khả năng - hiện thực",
      C: "Tính nhân quả",
      D: "Tính biện chứng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 49,
    question: "Khi nghiên cứu phương thức sản xuất TBCN, C.Mác bắt đầu từ",
    options: {
      A: "Sản xuất hàng hoá giản đơn và hàng hoá",
      B: "Lưu thông hàng hoá",
      C: "Sản xuất giá trị thặng dư",
    },
    correctAnswers: ["A"],
  },
  {
    page: 49,
    question:
      "Coi vận động của vật chất chỉ là biểu hiện của vận động cơ học, đó là quan điểm về vận động và vật chất của ai",
    options: {
      A: "Các nhà triết học thời kỳ cổ đại",
      B: "Các nhà triết học siêu hình",
      C: "Các nhà triết học duy vật biện chứng hiện đại",
      D: "Các nhà triết học duy vật thời kỳ cổ đại",
    },
    correctAnswers: ["B"],
  },
  {
    page: 49,
    question:
      "Chọn quan niệm đúng về con người theo quan điểm toàn diện của chủ nghĩa duy vật lịch sử. Con người là",
    options: {
      A: "Thực thể vật chất tự nhiên",
      B: "Thực thể chính trị và đạo đức",
      C: "Thực thể chính trị, có tư duy và văn hóa",
      D: "Thực thể tự nhiên và xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 49,
    question: "Khẳng định nào sau đây là sai",
    options: {
      A: "Triết học Mác là sự kết hợp phép biện chứng của Hêghen và chủ nghĩa duy tâm của Phoi - ơ - bắc",
      B: "Triết học Mác có sự thống nhất giữa phương pháp biện chứng và thế giới quan duy vật",
      C: "Triết học Mác kế thừa và cải tạo phép biện chứng của Hêghen trên cơ sở duy vật",
    },
    correctAnswers: ["A"],
  },
  {
    page: 49,
    question: "Chọn quan điểm đúng nhất trong các quan điểm sau đây",
    options: {
      A: "Vận động là phương thức tồn tại của vật chất",
      B: "Không gian, thời gian là những phương thức tồn tại của vật chất",
      C: "Vận động phương thức, không gian, thời gian là những hình thức tồn tại của vật chất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 49,
    question:
      "Theo Triết học Mác - Lênin, yếu tố nào sau đây đóng vai trò là phương thức tồn tại của vật chất?",
    options: {
      A: "Đứng im",
      B: "Vận động",
      C: "Không gian",
      D: "Thời gian",
    },
    correctAnswers: ["B"],
  },
  {
    page: 50,
    question: "Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là:",
    options: {
      A: "Đại công nghiệp tách khỏi nông nghiệp",
      B: "Trồng trọt tách khỏi chăn nuôi",
      C: "Ngành thương nghiệp ra đời",
      D: "Thủ công nghiệp tách khỏi nông nghiệp",
    },
    correctAnswers: ["C"],
  },
  {
    page: 50,
    question: "Định nghĩa giai cấp của Lênin dựa vào cơ sở nào sau đây",
    options: {
      A: "Xã hội",
      B: "Kinh tế",
      C: "Chính trị",
    },
    correctAnswers: ["B"],
  },
  {
    page: 50,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng ở động vật bậc cao có thể đạt đến hình thức phản ánh nào",
    options: {
      A: "Phản ánh ý thức",
      B: "Phản ánh tâm lý động vật",
      C: "Tính kích thích",
      D: "Phản ánh sinh học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 50,
    question:
      "Theo quan điểm của KTCT, trong tư liệu lao động bộ phận nào quyết định đến năng suất lao động? (Cách hỏi khác: Tư liệu lao động gồm có:)",
    options: {
      A: "Công cụ lao động",
      B: "Nguyên vật liệu cho sản xuất",
      C: "Các vật chứa đựng, bảo quản",
      D: "Kết cấu hạ tầng sản xuất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 50,
    question:
      "Quan điểm nào sau đây phản ánh đầy đủ nội dung khái niệm tồn tại xã hội",
    options: {
      A: "Tồn tại xã hội là phạm trù dùng chỉ toàn bộ điều kiện vật chất của xã hội",
      B: "Tồn tại xã hội là phạm trù dùng chỉ toàn bộ các giá trị tinh thần của xã hội",
      C: "Tồn tại xã hội là phạm trù dùng chỉ toàn bộ các điều kiện sinh hoạt của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 50,
    question:
      "Phương pháp rút ra kết quả riêng từ những kết luận chung, không tính đến sự tồn tại thực tế của sự vật, được gọi là?",
    options: {
      A: "Phương pháp quy nạp",
      B: "Phương pháp diễn dịch",
      C: "Phương pháp kinh nghiệm",
      D: "Phương pháp kinh viện",
    },
    correctAnswers: ["D"],
  },
  {
    page: 51,
    question:
      "Cái do nguyên nhân cơ bản bên trong của kết cấu vật chất quyết định và trong những điều kiện nhất định nó phải xảy ra như thế chứ không thể khác được gọi là?",
    options: {
      A: "Tất nhiên",
      B: "Ngẫu nhiên",
      C: "Hệ quả",
      D: "Bản chất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 51,
    question:
      "Trong chủ nghĩa tư bản, ... quan hệ giữa giai cấp tư sản và giai cấp công nhân là quan hệ bóc lột.",
    options: {
      A: "Hình thức",
      B: "Nội dung",
      C: "Bản chất",
      D: "Hiện tượng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 51,
    question:
      "Để làm rõ vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư, tư bản được chia thành",
    options: {
      A: "Tư bản độc quyền và tư bản nhà nước",
      B: "Tư bản bất biến và tư bản khả biến",
      C: "Tư bản cố định và tư bản lưu động",
    },
    correctAnswers: ["B"],
  },
  {
    page: 51,
    question: "Trong xã hội phân chia giai cấp",
    options: {
      A: "Đấu tranh giai cấp là nguồn gốc và động lực vận động và phát triển xã hội",
      B: "Đấu tranh giai cấp là nguyên nhân chủ yếu của vận động và phát triển xã hội",
      C: "Đấu tranh giai cấp là động lực chủ yếu dẫn đến sự vận động và phát triển xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 51,
    question: "Các tổ chức độc quyền sử dụng giá cả độc quyền để",
    options: {
      A: "Củng cố vai trò tổ chức độc quyền",
      B: "Chiếm đoạt giá trị thặng dư của người khác",
      C: "Gây thiệt hại cho các đối thủ cạnh tranh",
    },
    correctAnswers: ["B"],
  },
  {
    page: 52,
    question:
      "Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: Trong mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất",
    options: {
      A: "Lực lượng sản xuất là yếu tố thường xuyên biến đổi, phát triển",
      B: "Quan hệ sản xuất là yếu tố thường xuyên biến đổi, phát triển",
      C: "Cả hai đều là những yếu tố thường xuyên biến đổi, phát triển",
      D: "Không có yếu tố nào thường xuyên biến đổi, phát triển",
    },
    correctAnswers: ["A"],
  },
  {
    page: 52,
    question: "Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào?",
    options: {
      A: "Tư bản sản xuất.",
      B: "Tư bản tiền tệ.",
      C: "Tư bản bất biến.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 52,
    question:
      "Theo quan điểm Mác-Lênin, chủ nghĩa cộng sản chia làm mấy giai đoạn",
    options: {
      A: "2 giai đoạn",
      B: "3 giai đoạn",
      C: "4 giai đoạn",
    },
    correctAnswers: ["A"],
  },
  {
    page: 52,
    question: "Cơ chế kinh tế của CNTB độc quyền nhà nước gồm:",
    options: {
      A: "Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước",
      B: "Cơ chế thị trường, các nhà tài phiệt và sự điều tiết của nhà nước",
      C: "Cơ chế thị trường và độc quyền tư nhân",
    },
    correctAnswers: ["A"],
  },
  {
    page: 53,
    question:
      "Đâu là nội dung nguyên lý của phép biện chứng duy vật về mối liên hệ phổ biến của các sự vật và hiện tượng",
    options: {
      A: "Các sự vật và hiện tượng trong thế giới tồn tại tách rời nhau, giữa chúng không có sự phụ thuộc, ràng buộc lẫn nhau.",
      B: "Các sự vật có sự liên hệ tác động nhau nhưng không có sự chuyển hóa lẫn nhau",
      C: "Sự vật khác nhau ở vẻ bề ngoài, do chủ quan con người quy định, bản chất sự vật không có gì khác nhau",
      D: "Thế giới là một chính thể thống nhất bao gồm các sự vật, các quá trình vừa tách biệt nhau, vừa có mối liên hệ qua lại với nhau, vừa thâm nhập và chuyển hóa cho nhau",
    },
    correctAnswers: ["D"],
  },
  {
    page: 53,
    question:
      "Giai cấp công nhân hình thành và phát triển mạnh trong xã hội nào.",
    options: {
      A: "Xã hội chiếm hữu nô lệ",
      B: "Xã hội phong kiến",
      C: "Xã hội tư bản chủ nghĩa",
      D: "Xã hội xã hội chủ nghĩa",
    },
    correctAnswers: ["C"],
  },
  {
    page: 53,
    question: "Công cuộc đổi mới xã hội chủ nghĩa diễn ra ở nước nào sau đây",
    options: {
      A: "Trung Quốc",
      B: "Việt Nam",
      C: "Cu Ba",
    },
    correctAnswers: ["B"],
  },
  {
    page: 53,
    question: "Hai khái niệm triết học cùng với thế giới quan...",
    options: {
      A: "Là trùng nhau vì đều là hệ thống quan điểm về thế giới",
      B: "Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan",
      C: "Không phải mọi triết học đều là hạt nhân lý luận của thế giới quan mà chỉ có triết học Mác - Lênin mới là hạt nhân lý luận của thế giới quan",
      D: "Là hoàn toàn khác nhau",
    },
    correctAnswers: ["B"],
  },
  {
    page: 54,
    question: "Nhà nước xã hội chủ nghĩa",
    options: {
      A: "Tôn trọng quyền tự quyết và bình đẳng giữa các dân tộc",
      B: "Không tôn trọng quyền tự quyết và bình đẳng giữa các dân tộc",
      C: "Không can thiệp vào vấn đề dân tộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 54,
    question: "Cạnh tranh kinh tế được hiểu là",
    options: {
      A: "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành chi phí tối đa cho mình.",
      B: "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành lợi ích tối đa cho mình.",
      C: "Sự đấu tranh ở giữa các chủ thể kinh tế, để giành thị phần tối đa cho mình.",
      D: "Sự đấu tranh ở giữa các chủ thể kinh tế.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 54,
    question:
      "Trong nền sản xuất lớn hiện đại, yếu tố nào giữ vai trò quyết định của quá trình lao động sản xuất?",
    options: {
      A: "Sức lao động",
      B: "Tư liệu sản xuất hiện đại",
      C: "Công cụ sản xuất tiên tiến",
      D: "Đối tượng lao động",
    },
    correctAnswers: ["A"],
  },
  {
    page: 54,
    question: "Ngày lao động của công nhân bao gồm?",
    options: {
      A: "Thời gian lao động giản đơn, thời gian lao động thặng dư.",
      B: "Thời gian lao động phức tạp, thời gian lao động thặng dư.",
      C: "Thời gian lao động cần thiết, thời gian lao động thặng dư.",
      D: "Tất cả phương án trên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 54,
    question: "Tích lũy tư bản dẫn đến",
    options: {
      A: "Hình thành chủ nghĩa tư bản độc quyền",
      B: "Hình thành chủ nghĩa tư bản độc quyền nhà nước",
      C: "Hình thành chủ nghĩa tư bản",
    },
    correctAnswers: ["A"],
  },
  {
    page: 54,
    question: "Cái chung chỉ tồn tại trong",
    options: {
      A: "Cái riêng",
      B: "Cái đơn nhất",
      C: "Cái cụ thể",
    },
    correctAnswers: ["A"],
  },
  {
    page: 55,
    question:
      'Luận điểm "Mối liên hệ nhân quả là do cảm giác con người quy định" thuộc lập trường triết học nào?',
    options: {
      A: "Chủ nghĩa duy tâm khách quan",
      B: "Chủ nghĩa duy tâm chủ quan",
      C: "Chủ nghĩa duy vật biện chứng",
      D: "Chủ nghĩa duy vật siêu hình",
    },
    correctAnswers: ["B"],
  },
  {
    page: 55,
    question:
      "Theo quan điểm chủ nghĩa duy vật biện chứng thì đứng im là một trạng thái đặc biệt của vận động.",
    options: {
      A: "Tuyệt đối",
      B: "Trong cân bằng",
      C: "Tại chỗ",
      D: "Tĩnh tại",
    },
    correctAnswers: ["B"],
  },
  {
    page: 55,
    question:
      "Theo chủ nghĩa Mác - Lênin, triết học khác với các khoa học khác ở chỗ nào?",
    options: {
      A: "Tính đặc thù của hệ thống tri thức khoa học và phương pháp nghiên cứu",
      B: "Tính đặc thù của hệ thống tri thức và phương pháp nghiên cứu khoa học",
      C: "Tính đặc thù của khoa học và phương pháp nghiên cứu đặc thù",
      D: "Tính biện chứng và siêu hình",
    },
    correctAnswers: ["A"],
  },
  {
    page: 55,
    question:
      "Về cấu trúc, tư liệu sản xuất thuộc mặt nào trong lực lượng sản xuất?",
    options: {
      A: "Kinh tế - kỹ thuật",
      B: "Người lao động",
      C: "Nhà xưởng, máy móc",
      D: "Phương tiện thanh toán",
    },
    correctAnswers: ["A"],
  },
  {
    page: 55,
    question:
      "Nội dung cơ bản của cuộc đấu tranh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay là gì?",
    options: {
      A: "Thực hiện thắng lợi mục tiêu độc lập dân tộc",
      B: "Xây dựng một xã hội phát triển toàn diện",
      C: "Đảm bảo sự phát triển toàn diện cho mọi người dân",
      D: "Thực hiện thắng lợi mục tiêu độc lập dân tộc và chủ nghĩa xã hội, xây dựng một xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
    },
    correctAnswers: ["D"],
  },
  {
    page: 56,
    question: "Nếu quá đề cao triết học duy tâm sẽ dẫn đến",
    options: {
      A: "Xa rời thực tế",
      B: "Cực đoan",
      C: "Thực dụng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 56,
    question: "Phát triển là quá trình",
    options: {
      A: "Tiến lên theo đường vòng khép kín",
      B: "Tiến lên theo đường quanh co khúc khuỷu, thăng trầm, phức tạp",
      C: "Quá trình tiến lên theo đường thẳng tắp",
    },
    correctAnswers: ["B"],
  },
  {
    page: 56,
    question:
      "Khẳng định mối liên hệ giữa các sự vật, hiện tượng do sự quy định của các lực lượng siêu nhiên là quan điểm của",
    options: {
      A: "Chủ nghĩa duy tâm chủ quan",
      B: "Chủ nghĩa duy tâm khách quan",
      C: "Chủ nghĩa duy vật siêu hình",
    },
    correctAnswers: ["B"],
  },
  {
    page: 56,
    question: "Vấn đề cơ bản của triết học gồm hai mặt đó là",
    options: {
      A: "Bản thể luận và nhận thức luận",
      B: "Lý luận và thực tiễn",
      C: "Tri thức và chân lý",
    },
    correctAnswers: ["A"],
  },
  {
    page: 56,
    question: "Phương pháp luận là lý luận chung về",
    options: {
      A: "Phương pháp",
      B: "Giải pháp",
      C: "Phương châm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 56,
    question:
      "Tác phẩm nào được xem là đánh dấu cho sự chín muồi về tư tưởng xã hội chủ nghĩa của C.Mác và Ăng-ghen (Kiều hỏi khác: Tác phẩm nào sau đây được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của C. Mác và Ăngghen?)",
    options: {
      A: "Gia đình thần thánh (1842)",
      B: "Hệ tư tưởng Đức (1842)",
      C: "Tuyên ngôn của Đảng cộng sản (1848)",
    },
    correctAnswers: ["C"],
  },
  {
    page: 56,
    question: "Triết học duy vật biện chứng là sự thống nhất giữa",
    options: {
      A: "Thế giới quan duy vật và phương pháp luận biện chứng",
      B: "Nhân sinh quan duy vật và phương pháp luận biện chứng",
      C: "Thế giới quan duy vật và phương pháp luận siêu hình",
    },
    correctAnswers: ["A"],
  },
  {
    page: 57,
    question: "Biện chứng là phương pháp của khoa học nào sau đây",
    options: {
      A: "Triết học",
      B: "Đạo đức học",
      C: "Chính trị học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 57,
    question:
      "Giữa phạm trù triết học và phạm trù của các khoa học khác có mối quan hệ biện chứng với nhau. Mối quan hệ đó là",
    options: {
      A: "Quan hệ giữa bản chất và hiện tượng",
      B: "Quan hệ giữa cái chung và cái riêng",
      C: "Quan hệ giữa nội dung và hình thức",
    },
    correctAnswers: ["B"],
  },
  {
    page: 57,
    question:
      "Sự vật mới ra đời bao giờ cũng trên cơ sở những cái đã có của sự vật cũ, qua đó tiến hành chọn lọc những cái tích cực, tiến bộ, phù hợp để tiếp tục phát triển. Điều này thể hiện tính chất gì của sự phát triển",
    options: {
      A: "Tính kế thừa",
      B: "Tính lặp đi lặp lại",
      C: "Tính tiến lên",
    },
    correctAnswers: ["A"],
  },
  {
    page: 57,
    question:
      'Mác đã kế thừa "hạt nhân hợp lý" trong triết học của ông để xây dựng phép biện chứng duy vật. Ông là ai?',
    options: {
      A: "Phơ bách",
      B: "Platon",
      C: "Hê ghen",
    },
    correctAnswers: ["C"],
  },
  {
    page: 57,
    question: "Hạt nhân hợp lý của thế giới quan khoa học là chủ nghĩa nào?",
    options: {
      A: "Duy vật B. Mác",
      C: "Duy vật biện chứng D. Lênin",
    },
    correctAnswers: ["C"],
  },
  {
    page: 57,
    question:
      "Theo sự phát triển của xã hội, thứ tự phát triển của các hình thức cộng đồng trong lịch sử là",
    options: {
      A: "Thị tộc - Bộ lạc - Bộ tộc - Dân tộc",
      B: "Thị tộc - Bộ tộc - Bộ lạc - Dân tộc",
      C: "Dân tộc - Thị tộc - Bộ lạc - Bộ tộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 57,
    question:
      "Theo quan điểm của Triết học Mác- Lênin, có thể định nghĩa về vật chất như sau:",
    options: {
      A: "Vật chất là những chất tạo nên vũ trụ",
      B: "Vật chất là tồn tại khách quan",
      C: "Vật chất là thực tại khách quan",
    },
    correctAnswers: ["C"],
  },
  {
    page: 58,
    question: "Vật chất là tất cả những gì",
    options: {
      A: "Tồn tại một cách cụ thể, có thể nhìn thấy",
      B: "Tồn tại vô hình, thần bí ở bên ngoài thế giới khách quan",
      C: "Tồn tại ở bên ngoài ý thức, được ý thức con người phản ánh",
      D: "Tồn tại vô hình, không thể nhìn thấy",
    },
    correctAnswers: ["C"],
  },
  {
    page: 58,
    question: "Vấn đề cơ bản của triết học là",
    options: {
      A: "Quan hệ giữa vật chất và ý thức",
      B: "Quan hệ giữa khách quan và chủ quan",
      C: "Quan hệ giữa thực tiễn và lí luận",
    },
    correctAnswers: ["A"],
  },
  {
    page: 58,
    question: "Kết cấu của ý thức theo chiều dọc thì bao gồm",
    options: {
      A: "Tự ý thức, tiềm thức, vô thức",
      B: "Tự ý thức, tri thức, tiềm thức, vô thức",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["A"],
  },
  {
    page: 58,
    question: "Định nghĩa vật chất của Lênin được viết trong tác phẩm:",
    options: {
      A: "Bút ký triết học",
      B: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
      C: "Chủ nghĩa đế quốc - giai đoạn tột cùng của chủ nghĩa tư bản",
      D: "Làm gì?",
    },
    correctAnswers: ["B"],
  },
  {
    page: 58,
    question: "Nền tảng lý luận của chủ nghĩa Mác- Lênin là",
    options: {
      A: "Triết học",
      B: "Kinh tế chính trị học",
      C: "Chủ nghĩa xã hội khoa học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 58,
    question: "Bản chất của triết học duy tâm như thế nào",
    options: {
      A: "Đi ngược lại với khoa học",
      B: "Không hoàn toàn phản khoa học",
      C: "Rất khoa học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 59,
    question: "Quan điểm nào sau đây đúng nhất",
    options: {
      A: "Phạm trù là những thực thể ý niệm, tồn tại bên ngoài và độc lập với ý thức.",
      B: "Phạm trù là những từ trống rỗng, do con người tưởng tượng ra, không biểu hiện một cái gì của hiện thực.",
      C: "Phạm trù là kết quả của quá trình nhận thức, là hình ảnh chủ quan của thế giới khách quan.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 59,
    question: "Tất nhiên là phạm trù triết học dùng để chỉ",
    options: {
      A: "Những gì đang tồn tại và phát triển",
      B: "Những gì sẽ xuất hiện do nguyên nhân bên trong quyết định",
      C: "Những gì sẽ xuất hiện trong thực tế",
    },
    correctAnswers: ["B"],
  },
  {
    page: 59,
    question:
      "Quan điểm nào cho rằng sự phát triển chỉ là sự tăng, giảm đơn thuần về mặt lượng, không có sự thay đổi về chất",
    options: {
      A: "Quan điểm duy vật",
      B: "Quan điểm duy tâm",
      C: "Quan điểm siêu hình",
    },
    correctAnswers: ["C"],
  },
  {
    page: 59,
    question:
      "Thuộc tính cơ bản được Lênin rút ra trong định nghĩa phạm trù vật chất là",
    options: {
      A: "Thực tại khách quan",
      B: "Thực tế khách quan",
      C: "Tồn tại khách quan",
    },
    correctAnswers: ["A"],
  },
  {
    page: 59,
    question: "Chủ nghĩa Mác-Lênin ra đời vào khoảng thời gian nào",
    options: {
      A: "Giữa thế kỷ XIX",
      B: "Đầu thế kỷ XIX",
      C: "Đầu thế kỷ XX",
      D: "Cuối thế kỷ XIX",
    },
    correctAnswers: ["A"],
  },
  {
    page: 59,
    question: "Cặp phạm trù nguyên nhân, kết quả chỉ ra",
    options: {
      A: "Một kết quả có thể được tạo ra bởi nhiều nguyên nhân khác nhau",
      B: "Một kết quả chỉ được tạo ra bởi một nguyên nhân cơ bản",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["A"],
  },
  {
    page: 59,
    question:
      "Tính chất phong phú, đa dạng trong quan hệ nhân quả thể hiện ở chỗ một kết quả có thể do:",
    options: {
      A: "Một nguyên nhân sinh ra",
      B: "Nhiều nguyên nhân khác nhau sinh ra",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["B"],
  },
  {
    page: 60,
    question: "Theo Ăng-ghen, có thể chia vận động thành:",
    options: {
      A: "Bốn hình thức vận động cơ bản",
      B: "Năm hình thức vận động cơ bản",
      C: "Sáu hình thức vận động cơ bản",
    },
    correctAnswers: ["B"],
  },
  {
    page: 60,
    question: "Mối liên hệ nhân quả có các tính chất cơ bản nào sau đây",
    options: {
      A: "Tính khách quan, tính phổ biến, tính đa dạng.",
      B: "Tính khách quan, tính phổ biến, kế thừa.",
      C: "Tính khách quan, tính phổ biến, tính tất yếu.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 60,
    question:
      "Phạm trù triết học nào dùng để chỉ tính quy định khách quan vốn có của sự vật và hiện tượng, sự thống nhất hữu cơ của các thuộc tính làm cho nó là nó mà không phải là cái khác",
    options: {
      A: "Bước nhảy",
      B: "Lượng",
      C: "Chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 60,
    question: "Khẳng định nào sau đây là đúng?",
    options: {
      A: "Mỗi sự vật cụ thể được đặc trưng bằng nhiều hình thức vận động",
      B: "Hình thức vận động cao luôn bao hàm các hình thức vận động thấp, nhưng không có chiều ngược lại",
      C: "Có sự vật không vận động",
      D: "Có thể quy hình thức vận động cao về hình thức vận động thấp và ngược lại",
    },
    correctAnswers: ["B"],
  },
  {
    page: 60,
    question: "Chọn phương án phản ánh quan điểm Mác-Lênin",
    options: {
      A: "Trong giới hạn của độ, lượng của sự vật thay đổi nhưng chất của sự vật chưa thay đổi cơ bản",
      B: "Trong giới hạn của độ, sự thay đổi về lượng hoàn toàn không làm ảnh hưởng tới sự thay đổi chất của sự vật",
      C: "Bước nhảy là sự thay đổi về lượng của sự vật",
      D: "Sự thay đổi về lượng sẽ làm thay đổi ngay lập tức chất của sự vật",
    },
    correctAnswers: ["A"],
  },
  {
    page: 61,
    question: "Quan điểm toàn diện yêu cầu",
    options: {
      A: "Phải xem xét tất cả các mối liên hệ, đồng thời phân loại được vị trí, vai trò của các mối liên hệ.",
      B: "Xem xét tất cả các mối liên hệ, lấy mối liên hệ thứ yếu làm mối liên hệ chủ yếu, không cơ bản làm cơ bản.",
      C: "Xem xét tất cả các mối liên hệ và coi vị trí, vai trò của các mối liên hệ đó là như nhau.",
      D: "Chỉ xem xét những mối liên hệ đóng vai trò quyết định sự tồn tại và phát triển của sự vật.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 61,
    question: "Vật chất là tất cả những gì",
    options: {
      A: "Chỉ có một thế giới duy nhất là thế giới vật chất",
      B: "Mọi bộ phận của thế giới vật chất đều liên hệ chuyển hóa lẫn nhau",
      C: "Thế giới vật chất tồn tại vĩnh viễn, khách quan, vô hạn, vô tận, không do ai sinh ra và không mất đi",
      D: "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau",
    },
    correctAnswers: ["C"],
  },
  {
    page: 61,
    question: "Chọn phương án đúng theo quan điểm của triết học Mác Lênin",
    options: {
      A: "Mâu thuẫn biện chứng là sự liên hệ, tác động qua lại giữa các mặt đối lập",
      B: "Trong tư duy không có mâu thuẫn biện chứng",
      C: "Cứ hai mặt đối lập là tạo thành một mâu thuẫn biện chứng",
      D: "Mâu thuẫn biện chứng trong tư duy độc lập với mâu thuẫn trong hiện thực",
    },
    correctAnswers: ["A"],
  },
  {
    page: 61,
    question: "Chọn phương án đúng theo quan điểm triết học Mác- Lênin",
    options: {
      A: "Lượng của sự vật luôn được diễn tả bằng những con số chính xác",
      B: "Có những lượng không biểu thị yếu tố nào của sự vật",
      C: "Mỗi sự vật chỉ có một lượng",
      D: "Có những lượng biểu thị yếu tố quy định kết cấu bên trong sự vật",
    },
    correctAnswers: ["D"],
  },
  {
    page: 62,
    question: "Quy luật bao giờ cũng mang tính:",
    options: {
      A: "Khách quan",
      B: "Chủ quan",
      C: "Cả khách quan và chủ quan",
      D: "Phụ thuộc vào ý thức con người",
    },
    correctAnswers: ["A"],
  },
  {
    page: 62,
    question: "Luận điểm nào sau đây là đúng?",
    options: {
      A: "Chất mới của sự vật ra đời không tác động trở lại lượng của sự vật",
      B: "Chất mới ra đời chỉ làm thay đổi kết cấu nhưng không làm thay đổi quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật",
      C: "Chất mới ra đời có thể làm thay đổi kết cấu, quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật",
      D: "Chất mới ra đời chỉ làm thay đổi quy mô, trình độ, nhịp điệu của sự vận động và phát triển của sự vật nhưng không làm thay đổi kết cấu của sự vật",
    },
    correctAnswers: ["C"],
  },
  {
    page: 62,
    question:
      "Tính quy định nói lên quy mô, trình độ phát triển của sự vật gọi là gì?",
    options: {
      A: "Bước nhảy",
      B: "Độ",
      C: "Lượng",
      D: "Chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 62,
    question: "Yếu tố cách mạng nhất trong lực lượng sản xuất là:",
    options: {
      A: "Phương tiện lao động",
      B: "Người lao động",
      C: "Đối tượng lao động",
      D: "Công cụ lao động",
    },
    correctAnswers: ["D"],
  },
  {
    page: 62,
    question: "Cách thức của sự phát triển là",
    options: {
      A: "Đấu tranh của các mặt đối lập để giải quyết mâu thuẫn",
      B: "Sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      C: "Hai lần phủ định",
    },
    correctAnswers: ["B"],
  },
  {
    page: 63,
    question:
      "Quy luật xã hội nào giữ vai trò quyết định nhất đối với sự vận động, phát triển của xã hội?",
    options: {
      A: "Quy luật tồn tại xã hội quyết định ý thức xã hội",
      B: "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
      C: "Quy luật đấu tranh giai cấp",
      D: "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 63,
    question: "Nguồn gốc lý luận trực tiếp của triết học Mác là",
    options: {
      A: "Triết học Hy Lạp cổ đại",
      B: "Triết học cổ điển Đức",
      C: "Triết học tây Âu trung cổ",
    },
    correctAnswers: ["B"],
  },
  {
    page: 63,
    question: "Theo triết học Mác-Lênin, khẳng định nào sau đây là đúng?",
    options: {
      A: "Ý thức là sự phản ánh hiện thực khách quan theo nhu cầu nhận thức của con người",
      B: "Ý thức là hình ảnh chủ quan của thế giới khách quan, là tinh thần so với thế giới vật chất.",
      C: "Ý thức con người mang tính năng động sáng tạo lại hiện thực theo nhu cầu của nhận thức.",
      D: "Ý thức là quá trình phản ánh hiện thực khách quan vào trong bộ óc con người một cách đơn giản, nguyên xi",
    },
    correctAnswers: ["B"],
  },
  {
    page: 63,
    question:
      "Theo quan điểm của Triết học Mác-Lênin, ý thức là hình ảnh chủ quan của yếu tố nào sau đây?",
    options: {
      A: "Tinh thần tuyệt đối",
      B: "Thế giới khách quan",
      C: "Bộ óc con người",
      D: "Ý niệm tuyệt đối",
    },
    correctAnswers: ["B"],
  },
  {
    page: 63,
    question: "Luận điểm nào sau đây là đúng?",
    options: {
      A: "Nguyên nhân giống nhau tác động trong những điều kiện giống nhau cũng có thể đưa đến kết quả khác nhau",
      B: "Nguyên nhân khác nhau tác động trong những điều kiện như nhau luôn đưa đến kết quả như nhau",
      C: "Nguyên nhân tác động trong những điều kiện và hoàn cảnh càng ít khác nhau bao nhiêu thì kết quả do chúng gây ra càng giống nhau bấy nhiêu",
      D: "Nguyên nhân giống nhau tác động trong những điều kiện khác nhau có thể đưa đến kết quả như nhau",
    },
    correctAnswers: ["C"],
  },
  {
    page: 64,
    question: "Chọn phương án phản ánh quan điểm của chủ nghĩa duy tâm",
    options: {
      A: "Ý thức là thực thể độc lập, sáng tạo ra vật chất",
      B: "Ý thức là sự phản ánh nguyên xi hiện thực khách quan vào bộ óc con người.",
      C: "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan vào bộ óc con người",
      D: "Ý thức là sự phản ánh thụ động hiện thực khách quan vào bộ óc con người.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 64,
    question: "Khẳng định nào sau đây là đúng?",
    options: {
      A: "Có sự vật không vận động",
      B: "Hình thức vận động cao luôn bao hàm các hình thức vận động thấp, nhưng không có chiều ngược lại",
      C: "Mỗi sự vật cụ thể được đặc trưng bằng nhiều hình thức vận động",
      D: "Có thể quy hình thức vận động cao về hình thức vận động thấp và ngược lại",
    },
    correctAnswers: ["B"],
  },
  {
    page: 64,
    question:
      "Luận điểm nào không phải là câu trả lời của chủ nghĩa Mác-Lênin về tính thống nhất vật chất của thế giới?",
    options: {
      A: "Mọi bộ phận của thế giới vật chất đều liên hệ chuyển hóa lẫn nhau",
      B: "Chỉ có một thế giới duy nhất là thế giới vật chất",
      C: "Thế giới vật chất tồn tại vĩnh viễn, khách quan, vô hạn, vô tận, không do ai sinh ra và không mất đi",
      D: "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau",
    },
    correctAnswers: ["D"],
  },
  {
    page: 64,
    question:
      '"Cái cối xay quay bằng tay đưa lại xã hội có lãnh chúa phong kiến, cái cối xay chạy bằng máy hơi nước đưa xã hội có nhà tư bản công nghiệp". Thí dụ có hình ảnh trên nhằm nêu bật vai trò quyết định, xét đến cùng, đối với sự phát triển là yếu tố nào?',
    options: {
      A: "Đối tượng lao động",
      B: "Lực lượng sản xuất",
      C: "Tư liệu sản xuất",
      D: "Công cụ lao động",
    },
    correctAnswers: ["D"],
  },
  {
    page: 65,
    question: "Mỗi sự vật trong điều kiện xác định.",
    options: {
      A: "Chỉ có một thuộc tính xác định",
      B: "Có một số thuộc tính xác định",
      C: "Có vô vàn thuộc tính xác định",
      D: "Có một hoặc một số thuộc tính xác định",
    },
    correctAnswers: ["D"],
  },
  {
    page: 65,
    question:
      'Theo quan điểm của chủ nghĩa duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? "Điều kiện sinh hoạt vật chất của xã hội biến đổi đến đâu thì ngay lập tức tâm lý xã hội và hệ tư tưởng xã hội cũng lập tức biến đổi đến đó"',
    options: {
      A: "Đúng. Vì tồn tại xã hội nào thì ý thức xã hội đó",
      B: "Đúng. Vì ý thức xã hội chỉ là sự phản ánh tồn tại xã hội",
      C: "Sai. Vì ý thức xã hội phụ thuộc vào tồn tại xã hội nhưng nó có tính độc lập tương đối của nó",
      D: "Sai. Vì thực tế lịch sử cho thấy không phải như vậy",
    },
    correctAnswers: ["C"],
  },
  {
    page: 65,
    question:
      '"Phải giải thích ý thức xã hội bằng những mâu thuẫn, những sự xung đột hiện có giữa các lực lượng sản xuất những quan hệ sản xuất của xã hội". Luận điểm này nhấn mạnh điểm nào trong quan niệm của chủ nghĩa duy vật lịch sử?',
    options: {
      A: "Vai trò chi phối của phương thức sản xuất đối với ý thức xã hội",
      B: "Vai trò của cơ sở hạ tầng đối với kiến trúc thượng tầng",
      C: "Vai trò quyết định của ý thức xã hội đối với tồn tại xã hội",
      D: "Vai trò quyết định của tồn tại xã hội đối với ý thức xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 66,
    question: 'Triết học trở thành "nữ tì" của thần học khi nào?',
    options: {
      A: "Khi quyền lực của Nhà thờ, kinh viện bao trùm mọi lĩnh vực đời sống xã hội",
      B: "Khi quyền lực của Thánh chủ bao trùm mọi lĩnh vực đời sống xã hội",
      C: "Khi quyền lực của Giáo hội bao trùm mọi lĩnh vực đời sống xã hội",
      D: "Khi quyền lực của nhà vua kém quyền lực giáo phái",
    },
    correctAnswers: ["C"],
  },
  {
    page: 66,
    question:
      "Theo quan niệm của chủ nghĩa duy vật lịch sử, yếu tố nào giữ vai trò đặc trưng cho chế độ kinh tế của một xã hội nhất định?",
    options: {
      A: "Quan hệ sản xuất mới",
      B: "Quan hệ sản xuất thống trị",
      C: "Quan hệ sản xuất mạnh nhất",
      D: "Quan hệ sản xuất đương thời",
    },
    correctAnswers: ["B"],
  },
  {
    page: 66,
    question: "Vận dụng Triết học vào thực tế phải dựa trên quan điểm:",
    options: {
      A: "Lịch sử cụ thể",
      B: "Phát triển",
      C: "Kế thừa",
      D: "Tất cả các đáp án đều đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 66,
    question:
      "Từ định nghĩa con người của Ph.Ăngghen, đặc điểm nào sau đây cho thấy con người khác với động vật?",
    options: {
      A: "Biết tư duy",
      B: "Biết ứng xử theo các quy phạm đạo đức",
      C: "Chính trị",
      D: "Biết chế tạo và sử dụng công cụ lao động",
    },
    correctAnswers: ["D"],
  },
  {
    page: 66,
    question:
      "Triết học coi vật chất và tinh thần cùng quyết định nguồn gốc và sự tồn tại của thế giới như nhau gọi là",
    options: {
      A: "Triết học duy vật",
      B: "Triết học duy tâm",
      C: "Triết học nhị nguyên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 67,
    question: "Theo quan điểm của chủ nghĩa duy vật lịch sử thì",
    options: {
      A: "Con người là chủ thể tùy ý sáng tạo ra lịch sử",
      B: "Lịch sử sáng tạo ra con người, con người không thể sáng tạo ra lịch sử",
      C: "Con người không thể sáng tạo ra lịch sử mà chỉ có thể thích ứng với những điều kiện có sẵn",
      D: "Con người sáng tạo ra lịch sử trong phạm vi những điều kiện khách quan mà chính lịch sử trước đó đã tạo nên cho nó",
    },
    correctAnswers: ["D"],
  },
  {
    page: 67,
    question: "Vai trò của cách mạng xã hội đối với tiến hóa xã hội gì?",
    options: {
      A: "Cách mạng xã hội làm gián đoạn quá trình tiến hóa xã hội",
      B: "Cách mạng xã hội phủ định tiến hóa xã hội",
      C: "Cách mạng xã hội không có quan hệ với tiến hóa xã hội",
      D: "Cách mạng xã hội mở đường cho quá trình tiến hóa xã hội lên giai đoạn cao hơn.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 67,
    question:
      'Khái niệm "những nguyên lý cơ bản của chủ nghĩa Mác - Lênin" là chỉ',
    options: {
      A: "Những quan điểm cơ bản của chủ nghĩa Mác - Lênin",
      B: "Những quan điểm cơ bản, nền tảng của chủ nghĩa Mác - Lênin",
      C: "Những quan điểm mang tính chất chân lý bền vững của chủ nghĩa Mác - Lênin",
      D: "Những quan điểm cơ bản, nền tảng và có tính chất chân lý bền vững của chủ nghĩa Mác - Lênin",
    },
    correctAnswers: ["D"],
  },
  {
    page: 67,
    question:
      "Về cấu trúc, người lao động thuộc mặt nào trong một phương thức sản xuất?",
    options: {
      A: "Kinh tế - giai cấp",
      B: "Lực lượng sản xuất",
      C: "Tư liệu sản xuất",
      D: "Kiến trúc thượng tầng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 68,
    question:
      "Theo C. Mác, vấn đề tìm hiểu xem tư duy của con người có thể đạt được chân lý khách quan hay không phải là vấn đề lý luận mà là vấn đề gì?",
    options: {
      A: "Thực tế",
      B: "Hiện thực",
      C: "Thực tiễn",
      D: "Khoa học",
    },
    correctAnswers: ["C"],
  },
  {
    page: 68,
    question:
      "Nguồn gốc kinh tế của sự vận động và phát triển của hình thái kinh tế- xã hội là gì?",
    options: {
      A: "Mâu thuẫn giai cấp gay gắt trong xã hội có giai cấp",
      B: "Sự tăng lên không ngừng của năng suất lao động",
      C: "Mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất",
      D: "Sự phát triển mạnh mẽ, đột phá của khoa học kỹ thuật công nghệ",
    },
    correctAnswers: ["C"],
  },
  {
    page: 68,
    question: "Nguồn gốc trực tiếp của sự ra đời giai cấp trong xã hội?",
    options: {
      A: 'Do sự phát triển lực lượng sản xuất làm xuất hiện "của dư" tương đối',
      B: "Do sự chênh lệch về khả năng giữa các tập đoàn người",
      C: "Do sự phân hóa giữa giàu và nghèo trong xã hội",
      D: "Do sự xuất hiện chế độ tư hữu về tư liệu sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 68,
    question: "Sai lầm của các nhà duy vật chất phác thời cổ đại là gì?",
    options: {
      A: "Đồng nhất vật chất với vật thể",
      B: "Đồng nhất vật thể với bản thân nó",
      C: "Đồng nhất vật chất duy vật và thế giới duy tâm",
      D: "Không có đáp án nào đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 68,
    question: "Ý thức xã hội là phạm trù triết học dùng để chỉ",
    options: {
      A: "Toàn bộ đời sống tinh thần của xã hội",
      B: "Toàn bộ điều kiện vật chất của xã hội",
      C: "Toàn bộ điều kiện tinh thần của xã hội",
      D: "Toàn bộ đời sống nói chung của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 69,
    question:
      'Theo quan điểm của chủ nghĩa Mác - Lênin, "Bộ tộc" được định nghĩa là gì?',
    options: {
      A: "Bộ tộc là hình thức cộng đồng người hình thành khi xã hội có sự phân chia thành giai cấp. Các bộ tộc được hình thành từ sự liên kết của nhiều bộ lạc sống trên một lãnh thổ nhất định",
      B: "Những tộc người sống lưu vong",
      C: "Nhiều bộ lạc hợp lại",
      D: "Những người có chung lãnh thổ, ngôn ngữ, văn hóa, kinh tế",
    },
    correctAnswers: ["A"],
  },
  {
    page: 69,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, nhà nước là yếu tố cơ bản trong kiến trúc thượng tầng của xã hội, nó:",
    options: {
      A: "Luôn luôn có tác động tích cực đối với cơ sở hạ tầng",
      B: "Luôn luôn có tác động tiêu cực đối với cơ sở hạ tầng",
      C: "Có thể tác động tích cực hoặc tiêu cực, tùy theo từng điều kiện nhất định",
      D: "Không có tác dụng gì đối với cơ sở hạ tầng kinh tế mà chỉ có tác dụng đối với các yếu tố khác trong bản thân hệ thống kiến trúc thượng tầng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 69,
    question:
      "Phạm trù triết học phản ánh thời kỳ hình thành đối tượng, khi nó mới chỉ tồn tại dưới dạng tiền đề hay với tư cách là xu hướng gọi là gì?",
    options: {
      A: "Nguyên nhân",
      B: "Kết quả",
      C: "Khả năng",
      D: "Hiện thực",
    },
    correctAnswers: ["C"],
  },
  {
    page: 69,
    question: "Đâu là một trong những tác phẩm của Lênin?",
    options: {
      A: "Chủ nghĩa xã hội không tưởng Pháp",
      B: "Chủ nghĩa Duy vật và chủ nghĩa kinh viện phê phán",
      C: "Chủ nghĩa Duy vật và chủ nghĩa kinh nghiệm phê phán",
      D: "Đường Kách Mệnh",
    },
    correctAnswers: ["C"],
  },
  {
    page: 70,
    question: "Theo triết học Mác, con người là gì?",
    options: {
      A: "Thực thể sinh học - xã hội",
      B: "Thực thể tự nhiên - sinh học",
      C: "Kết hợp con vật và con người",
      D: "Là thực thể do thánh thần tạo ra",
    },
    correctAnswers: ["A"],
  },
  {
    page: 70,
    question:
      "Khi xem xét, đánh giá con người trong mối quan hệ với gia đình, bạn bè, đồng nghiệp và các mối quan hệ xã hội được gọi là cách nhìn nhận gì?",
    options: {
      A: "Biện chứng",
      B: "Toàn diện",
      C: "Lịch sử, cụ thể",
      D: "Phiến diện",
    },
    correctAnswers: ["B"],
  },
  {
    page: 70,
    question: "Yếu tố nào không thuộc lực lượng sản xuất?",
    options: {
      A: "Người lao động",
      B: "Nhà xưởng, công trường",
      C: "Đối tượng lao động",
      D: "Kinh tế thượng tầng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 70,
    question:
      "Giải quyết mặt thứ nhất trong vấn đề cơ bản của triết học đã chia nó thành hai trường phái triết học lớn trong lịch sử, đó là các chủ nghĩa",
    options: {
      A: "Duy vật và duy tâm",
      B: "Duy vật và siêu hình",
      C: "Duy vật biện chứng và duy tâm",
      D: "Duy vật máy móc và duy tâm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 70,
    question: "Nguồn gốc xã hội dẫn đến sự ra đời của Triết học là?",
    options: {
      A: "Do sự phát triển của lực lượng sản xuất",
      B: "Cách mạng nổ ra, những tộc người tan rã",
      C: "Lao động trí óc đã tách khỏi lao động chân tay",
      D: "Phân tích đúng tình hình trên toàn thế giới, sản xuất phát triển",
    },
    correctAnswers: ["C"],
  },
  {
    page: 71,
    question:
      'Theo quan điểm của chủ nghĩa Mác - Lênin, "Bộ lạc" được định nghĩa là gì?',
    options: {
      A: "Là cộng đồng bao gồm những bộ lạc có quan hệ cùng huyết thống hoặc các thị tộc có quan hệ hôn nhân liên kết với nhau",
      B: "Là cộng đồng bao gồm những thị tộc có quan hệ hôn nhân liên kết với nhau",
      C: "Là cộng đồng bao gồm những thị tộc có quan hệ cùng huyết thống hoặc các thị tộc có quan hệ hôn nhân liên kết với nhau",
      D: "Là cộng đồng bao gồm những thị tộc có quan hệ cùng huyết thống",
    },
    correctAnswers: ["C"],
  },
  {
    page: 71,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng, sự vật khi mới ra đời chúng tồn tại dưới dạng:",
    options: {
      A: "Cái đơn nhất",
      B: "Cái cụ thể",
      C: "Cái chung",
    },
    correctAnswers: ["A"],
  },
  {
    page: 71,
    question: "Hoạt động sản xuất vật chất cơ sở hình thành nên quan hệ gì?",
    options: {
      A: "Quan hệ kinh tế giữa người với người",
      B: "Quan hệ vật chất giữa người với người",
      C: "Quan hệ kinh tế - vật chất giữa người với vật",
      D: "Quan hệ kinh tế - vật chất giữa người với người",
    },
    correctAnswers: ["D"],
  },
  {
    page: 71,
    question:
      "Đâu là cơ sở hình thành nên quan hệ kinh tế - vật chất giữa người với người?",
    options: {
      A: "Hoạt động thực nghiệm khoa học",
      B: "Hoạt động chính trị, xã hội",
      C: "Hoạt động thực nghiệm khoa học",
      D: "Hoạt động sản xuất vật chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 71,
    question:
      "Đâu là một trong những hình thức cộng đồng người trước khi hình thành dân tộc?",
    options: {
      A: "Thị tộc",
      B: "Chủng tộc",
      C: "Sắc tộc",
      D: "Dân tộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 71,
    question:
      "Khi một sự vật, một hiện tượng mới được nảy sinh thì yếu tố nào sẽ xuất hiện đầu tiên?",
    options: {
      A: "Cái chung",
      B: "Cái riêng",
      C: "Cái đơn nhất",
      D: "Cái phổ biến",
    },
    correctAnswers: ["C"],
  },
  {
    page: 72,
    question: "Một trong ba hình thức cơ bản của chủ nghĩa duy vật là gì?",
    options: {
      A: "Chủ nghĩa duy vật chất phác thời cổ đại",
      B: "Chủ nghĩa duy vật trung đại",
      C: "Chủ nghĩa duy vật Mác thời cận đại",
      D: "Chủ nghĩa Sôphanh thời hiện đại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 72,
    question: "Khẳng định nào sau đây về thế giới vật chất là đúng?",
    options: {
      A: "Chỉ có một thế giới duy nhất là thế giới vật chất",
      B: "Chỉ có một thế giới duy nhất là thế giới tinh thần",
      C: "Có nhiều thế giới vật chất",
      D: "Có nhiều thế giới tinh thần",
    },
    correctAnswers: ["A"],
  },
  {
    page: 72,
    question: "Cái ...là cái toàn bộ, phong phú hơn cái...",
    options: {
      A: "Chung/Riêng.",
      B: "Riêng/Chung.",
      C: "Chung/Đơn nhất.",
      D: "Đơn nhất/Riêng.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 72,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
    options: {
      A: "Có tất nhiên thuần tuý tồn tại khách quan",
      B: "Có ngẫu nhiên thuần tuý tồn tại khách quan",
      C: "Không có cái tất nhiên và ngẫu nhiên thuần tuý tồn tại bên ngoài nhau",
      D: "Tất nhiên và ngẫu nhiên cùng tồn tại song song với nhau trong tư duy",
    },
    correctAnswers: ["C"],
  },
  {
    page: 72,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
    options: {
      A: "Nguyên nhân là cái sản sinh ra kết quả",
      B: "Mọi sự kế tiếp nhau về mặt thời gian đều là quan hệ nhân quả",
      C: "Nguyên nhân tác động đến kết quả",
      D: "Cái xuất hiện trước luôn là nguyên nhân của cái xuất hiện sau",
    },
    correctAnswers: ["A"],
  },
  {
    page: 72,
    question:
      "Điền vào chỗ trống: Chủ nghĩa duy vật biện chứng đã định nghĩa nhận thức là một quá trình phản ánh... thế giới khách quan vào bộ óc của con người. (Chọn 3 đáp án)",
    options: {
      A: "Tự giác",
      B: "Tích cực",
      C: "Sáng tạo",
      D: "Chủ quan",
    },
    correctAnswers: ["A", "B", "C"],
  },
  {
    page: 73,
    question:
      "Toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội đó được gọi là gì?",
    options: {
      A: "Cơ sở hạ tầng",
      B: "Cơ sở thượng tầng",
      C: "Quan hệ sản xuất",
      D: "Quan hệ phân phối",
    },
    correctAnswers: ["A"],
  },
  {
    page: 73,
    question:
      "Trong hoạt động thực tiễn, sai lầm của sự trì trệ bảo thủ là do không tôn trọng quy luật nào?",
    options: {
      A: "Quy luật mâu thuẫn",
      B: "Quy luật lượng chất",
      C: "Quy luật tự nhiên",
      D: "Quy luật xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 73,
    question:
      "Bản thân cây Sầu riêng luôn tồn tại hai quá trình quang hợp và hô hấp. Quá trình quang hợp giúp cây Sầu riêng hấp thụ nước và khí Cacbonic cùng với ánh sáng mặt trời để tạo ra các hợp chất hữu cơ và thải ra Oxi. Còn quá trình hô hấp là quá trình hấp thụ Oxi, chuyển đổi các chất hữu cơ, và giải phóng năng lượng, thải ra khí Cacbonic. Với kiến thức về Triết học đã được học, Anh/Chị hãy cho biết quá trình quang hợp và hô hấp của cây Sầu riêng nằm trong quy luật nào trong các quy luật sau đây?",
    options: {
      A: "Quy luật từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
      B: "Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật phát triển",
    },
    correctAnswers: ["B"],
  },
  {
    page: 74,
    question:
      "Cách mạng xã hội được khái quát bởi (Kiểu hỏi khác: Đâu là một khái quát của cách mạng xã hội?)",
    options: {
      A: "Thay đổi thể chế chính trị xã hội này bằng thể chế chính trị khác",
      B: "Thay đổi thể chế kinh tế này bằng một thể chế kinh tế khác cao hơn",
      C: "Thay đổi căn bản, toàn diện và triệt de một hình thái kinh tế - xã hội này bằng một hình thái kinh tế - xã hội khác cao hơn",
      D: "Thay đổi hệ tư tưởng quản lý này bằng hệ tư tưởng quản lý khác",
    },
    correctAnswers: ["C"],
  },
  {
    page: 74,
    question: "Định nghĩa đúng triết học Mác - Lênin là",
    options: {
      A: "Hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy",
      B: "Khoa học làm cầu nối giữa các khoa học",
      C: "Chính trị",
      D: "Một thứ tôn giáo",
    },
    correctAnswers: ["A"],
  },
  {
    page: 74,
    question: "Theo Triết học Mác, vật chất tồn tại thế nào?",
    options: {
      A: "Chủ quan",
      B: "Phụ thuộc vào con người",
      C: "Khách quan",
      D: "Theo ý muốn của thần linh",
    },
    correctAnswers: ["C"],
  },
  {
    page: 74,
    question:
      "Theo Triết học Mác - Lênin cái bàn, cái ghế có phải vật chất không? (Kiểu hỏi khác: Cái bàn, cái ghế có phải là vật chất với tư cách là một phạm trù triết học hay không?)",
    options: {
      A: "Có. Vì nó là dạng của vật chất trong không gian.",
      B: "Không. Vì nó không có vật chất trong không gian.",
      C: "Có. Vì nó có tồn tại cụ thể, có kích thước và tồn tại cùng thời gian.",
      D: "Không. Vì nó chỉ là một dạng cụ thể của vật chất.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 74,
    question:
      "Những sự vật, hiện tượng nếu có cùng nguyên nhân, trong những điều kiện giống nhau thì sẽ tạo nên kết quả như nhau. Điều này thể hiện tính chất gì trong mối liên hệ nhân quả?",
    options: {
      A: "Tính khách quan",
      B: "Tính phổ biến",
      C: "Tính tất yếu",
      D: "Tính biện chứng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 75,
    question: "Ai đã tìm ra tia phóng xạ?",
    options: {
      A: "Ronghen",
      B: "Nicolai copazir",
      C: "Béccoren",
      D: "Jorb Bruno",
    },
    correctAnswers: ["C"],
  },
  {
    page: 75,
    question:
      'Chọn cụm từ thích hợp điền vào chỗ trống sau để hình thành khái niệm về "Cơ sở hạ tầng" theo quan điểm của triết học Mác - Lênin: Cơ sở hạ tầng là tổng hợp các quan hệ sản xuất hợp thành..... của xã hội.',
    options: {
      A: "Cơ sở vật chất - kỹ thuật",
      B: "Hệ thống điện, đường, trường, trạm",
      C: "Cơ cấu kinh tế",
      D: "Đời sống vật chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 75,
    question:
      "Triết học duy vật biện chứng cho rằng: (Kiểu hỏi khác: Đâu là một quan điểm của chủ nghĩa duy vật biện chứng?)",
    options: {
      A: "Vật chất quyết định ý thức, ý thức tác động trở lại vật chất",
      B: "Ý thức quyết định vật chất, vật chất tác động trở lại ý thức",
      C: "Vật chất quyết định ý thức, ý thức không thể tác động đến vật chất",
      D: "Vật chất và ý thức đều có vai trò quyết định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 75,
    question:
      "Anh A có tri thức, năng lực, trình độ, kinh nghiệm và kỹ năng lao động. Vậy có thể gọi A là?",
    options: {
      A: "Trí thức",
      B: "Người lao động",
      C: "Lao động trí thức",
      D: "Năng lực lao động",
    },
    correctAnswers: ["C"],
  },
  {
    page: 75,
    question:
      "Sự thống nhất giữa lực lượng sản xuất ở một trình độ nhất định và quan hệ sản xuất tương ứng tạo thành:",
    options: {
      A: "hình thái kinh tế - xã hội",
      B: "phương thức sản xuất",
      C: "cơ sở hạ tầng",
      D: "kiến trúc thượng tầng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 76,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Lực lượng cơ bản nhất trong quần chúng nhân dân là: (Kiểu hỏi khác: Theo quan điểm chủ nghĩa duy vật lịch sử, lực lượng cơ bản nhất trong quần chúng nhân dân là gì?)",
    options: {
      A: "Giai cấp thống trị xã hội.",
      B: "Tầng lớp trí thức.",
      C: "Người lao động.",
      D: "Công nhân và nông dân.",
    },
    correctAnswers: ["C"],
  },
  {
    page: 76,
    question:
      "Chỉ có một thế giới duy nhất là thế giới vật chất là thể hiện tính chất gì của thế giới vật chất?",
    options: {
      A: "Đồng nhất",
      B: "Thống nhất",
      C: "Thuần nhất",
      D: "Duy nhất",
    },
    correctAnswers: ["B"],
  },
  {
    page: 76,
    question:
      "Theo C. Mác và Ph. Ăngghen, để tồn tại và phát triển, con người cần phải thực hiện hoạt động gì?",
    options: {
      A: "Vận động",
      B: "Sản xuất",
      C: "Làm giàu",
      D: "Kinh doanh",
    },
    correctAnswers: ["B"],
  },
  {
    page: 76,
    question: "Các nhà triết học duy tâm được chia thành mấy trường phái?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswers: ["A"],
  },
  {
    page: 76,
    question:
      "Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Sản xuất ra của cải vật chất giữ vai trò là:",
    options: {
      A: "Nền tảng của xã hội",
      B: "Nền tảng vật chất của xã hội",
      C: "Nền tảng tinh thần của xã hội",
      D: "Nền tảng kỹ thuật, công nghệ của xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 76,
    question: "Cơ sở của sự tồn tại và phát triển của xã hội là sản xuất:",
    options: {
      A: "Hàng hóa, dịch vụ",
      B: "Tư liệu sản xuất",
      C: "Tư liệu tiêu dùng",
      D: "Sản xuất vật chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 77,
    question:
      "Trong xã hội có giai cấp, nội dung và hình thức phát triển của ý thức xã hội khác nhau do đâu?",
    options: {
      A: "Những điều kiện sinh hoạt vật chất, lợi ích và địa vị của các giai cấp khác nhau",
      B: "Thói quen khác nhau",
      C: "Sở thích khác nhau",
      D: "Những điều kiện sinh hoạt tinh thần, địa vị, thói quen của các giai cấp khác nhau",
    },
    correctAnswers: ["A"],
  },
  {
    page: 77,
    question:
      "Vấn đề cơ bản của triết học có hai mặt. Mặt thứ hai phải trả lời câu hỏi con người có khả năng hay không trong:",
    options: {
      A: "Nhận thức được bản thân",
      B: "Hòa hợp với tự nhiên",
      C: "Chinh phục được thế giới",
      D: "Nhận thức được thế giới",
    },
    correctAnswers: ["D"],
  },
  {
    page: 77,
    question: "Theo C.Mác, các nền kinh tế căn bản phân biệt với nhau bởi:",
    options: {
      A: "Phương thức sản xuất ra của cải vật chất",
      B: "Mục đích của quá trình sản xuất ra của cải vật chất",
      C: "Mục đích tự nhiên của quá trình sản xuất ra của cải vật chất",
      D: "Mục đích xã hội của quá trình sản xuất ra của cải vật chất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 77,
    question:
      'Luận điểm sau đây thuộc lập trường triết học nào: "Cái mới ra đời trên cơ sở phá hủy hoàn toàn cái cũ"?',
    options: {
      A: "Quan điểm siêu hình",
      B: "Quan điểm duy tâm",
      C: "Quan điểm phát triển",
      D: "Quan điểm biện chứng duy vật",
    },
    correctAnswers: ["A"],
  },
  {
    page: 77,
    question:
      "Những ý thức lạc hậu tiêu cực không mất đi một cách dễ dàng, là do:",
    options: {
      A: "Thói quen tập quán lâu đời",
      B: "Ý thức xã hội không phản ánh kịp tồn tại xã hội",
      C: "Thói quen tập quán lâu đời và ý thức xã hội không phản ánh kịp tồn tại xã hội",
      D: "Ý thức xã hội phản ánh tồn tại xã hội và thói quen tập quán lâu đời",
    },
    correctAnswers: ["C"],
  },
  {
    page: 78,
    question: "Thời gian phát hiện ra tia Rơnghen là khi nào?",
    options: {
      A: "Năm 1895",
      B: "Năm 1896",
      C: "Năm 1897",
      D: "Năm 1898",
    },
    correctAnswers: ["A"],
  },
  {
    page: 78,
    question: "Trong xã hội Ấn Độ cổ đại, triết học được hiểu là:",
    options: {
      A: "Con đường suy ngẫm để dẫn dắt con người tới lẽ phải",
      B: "Con đường tu tập",
      C: "Con đường giải thoát",
      D: "Con đường giác ngộ",
    },
    correctAnswers: ["A"],
  },
  {
    page: 78,
    question: "Theo triết học Mác, hình thái kinh tế - xã hội cuối cùng là?",
    options: {
      A: "Phong kiến",
      B: "Tư bản chủ nghĩa",
      C: "Xã hội chủ nghĩa",
      D: "Cộng sản chủ nghĩa",
    },
    correctAnswers: ["D"],
  },
  {
    page: 78,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, trong kiến trúc thượng tầng của xã hội có giai cấp, yếu tố cơ bản nhất, có tác động trực tiếp và mạnh mẽ nhất tới cơ sở hạ tầng là yếu tố:",
    options: {
      A: "Tổ chức chính đảng",
      B: "Tổ chức nhà nước",
      C: "Tổ chức tôn giáo",
      D: "Các tổ chức văn hóa - xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 78,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng khẳng định nào sau đây là đúng?",
    options: {
      A: "Cái ngẫu nhiên không có nguyên nhân",
      B: "Chỉ có cái tất yếu mới có nguyên nhân",
      C: "Không phải cái gì con người chưa nhận thức được nguyên nhân là cái ngẫu nhiên",
      D: "Cái ngẫu nhiên luôn trở thành cái tất nhiên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 79,
    question:
      '"Góp gió thành bão" giúp anh/chị liên hệ tới quy luật nào trong triết học?',
    options: {
      A: "Lượng - chất",
      B: "Mâu thuẫn",
      C: "Phủ định của phủ định",
      D: "Không có phương án nào đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 79,
    question:
      "Theo quan điểm của triết học Mác - Lênin thì sự thay đổi quan hệ sản xuất phụ thuộc vào:",
    options: {
      A: "Trình độ của công cụ sản xuất",
      B: "Trình độ kỹ thuật sản xuất",
      C: "Trình độ phân công lao động xã hội",
      D: "Trình độ phát triển của lực lượng sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 79,
    question: "Bản chất của nhà nước là gì?",
    options: {
      A: "Mang bản chất của giai cấp thống trị",
      B: "Mang bản chất của giai cấp bị trị",
      C: "Mang bản chất của tất cả các giai cấp",
      D: "Mang bản chất của xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 79,
    question:
      "Khi sự vật không trực tiếp tác động vào giác quan của con người, là hình thức nhận thức nào sau đây? (Kiểu hỏi khác: Hình thức nhận thức nào sau đây không cần có sự tác động của vật vào cơ quan giác quan của con người?)",
    options: {
      A: "Cảm giác",
      B: "Tri giác",
      C: "Biểu tượng",
      D: "Khái niệm",
    },
    correctAnswers: ["D"],
  },
  {
    page: 79,
    question: "Galilê là nhà triết học thuộc trường phái triết học nào?",
    options: {
      A: "Chủ nghĩa duy vật biện chứng",
      B: "Chủ nghĩa duy vật siêu hình",
      C: "Chủ nghĩa duy tâm siêu hình",
      D: "Chủ nghĩa duy tâm máy móc",
    },
    correctAnswers: ["B"],
  },
  {
    page: 79,
    question: "Xác định mệnh đề sai:",
    options: {
      A: "Vật thể là dạng cụ thể của vật chất",
      B: "Vật chất tồn tại thông qua những dạng cụ thể của nó",
      C: "Vật chất là một dạng tồn tại của vật thể",
      D: "Vật thể không đồng nghĩa với vật chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 80,
    question:
      "Theo C. Mác, trong tính hiện thực của nó, bản chất con người là tổng hòa:",
    options: {
      A: "Các phẩm chất xã hội",
      B: "Quan hệ lợi ích",
      C: "Các quan hệ xã hội",
      D: "Quan hệ hiện thực",
    },
    correctAnswers: ["C"],
  },
  {
    page: 80,
    question:
      "Ý thức xã hội có tính chất nào sau đây? (Kiểu hỏi khác: Tính chất kế thừa của ý thức xã hội làm cho nó có tính chất nào sau đây? Trong mối quan hệ với tồn tại xã hội, ý thức xã hội có tính chất nào sau đây?)",
    options: {
      A: "Tính độc lập tương đối",
      B: "Tính độc lập tuyệt đối",
      C: "Tính sáng tạo",
      D: "Tính bất biến",
    },
    correctAnswers: ["A"],
  },
  {
    page: 80,
    question: "Ở Trung Quốc thời cổ đại có Triết học không?",
    options: {
      A: "Có",
      B: "Không",
      C: "Chỉ có hệ tư tưởng chứ không có triết học",
      D: "Không có hệ tư tưởng và triết học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 80,
    question:
      "Mối quan hệ giữa lĩnh vực kinh tế và lĩnh vực chính trị của xã hội được khái quát trong quy luật nào? (Kiểu hỏi khác: Đâu được coi là quy luật cơ bản nhất quy định sự vận động và phát triển của xã hội?)",
    options: {
      A: "Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng",
      B: "Quy luật đấu tranh giai cấp",
      C: "Quy luật tồn tại xã hội quyết định ý thức xã hội",
      D: "Tất cả đều sai",
    },
    correctAnswers: ["A"],
  },
  {
    page: 80,
    question: "Lơxíp và Đêmôcrít có điểm chung là gì?",
    options: {
      A: "Cả hai ông đều cho rằng, vật chất là nước",
      B: "Cả hai ông đều cho rằng, vật chất là lửa",
      C: "Cả hai ông đều cho rằng, vật chất là không khí",
      D: "Cả hai ông đều cho rằng, vật chất là nguyên tử",
    },
    correctAnswers: ["D"],
  },
  {
    page: 80,
    question: "Hiện tượng là:",
    options: {
      A: "Một bộ phận của bản chất",
      B: "Luôn đồng nhất với bản chất",
      C: "Biểu hiện bên ngoài của bản chất",
      D: "Kết quả của bản chất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 81,
    question: "Về cơ bản, nhà nước có mấy chức năng?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswers: ["A"],
  },
  {
    page: 81,
    question: "Thời đại kinh tế ngày nay được gọi là gì?",
    options: {
      A: "Nền kinh tế 4.0",
      B: "Nền kinh tế tri thức",
      C: "Nền kinh tế thị trường",
      D: "Nền kinh tế hàng hóa nhiều thành phần",
    },
    correctAnswers: ["B"],
  },
  {
    page: 81,
    question:
      "Trước khi chủ nghĩa duy vật biện chứng ra đời, nhìn chung các nhà triết học duy vật quan niệm vật chất là gì?",
    options: {
      A: "Một hay một số chất tự có, đầu tiên",
      B: "Toàn bộ vật chất",
      C: "Vũ trụ quan",
      D: "Giới tự nhiên",
      E: "Ý thức",
    },
    correctAnswers: ["A"],
  },
  {
    page: 81,
    question: '"Cái đơn nhất" là phạm trù triết học dùng để chỉ:',
    options: {
      A: "Thuộc tính tồn tại duy nhất ở một sự vật",
      B: "Thuộc tính tồn tại trong nhiều sự vật hiện tượng",
      C: "Những sự vật hiện tượng khách quan",
    },
    correctAnswers: ["A"],
  },
  {
    page: 81,
    question:
      "Khi đánh giá một con người, quan điểm toàn diện đòi hỏi điều gì?",
    options: {
      A: "Phải đặc biệt nhấn mạnh một mặt nào đó, bỏ qua những mặt còn lại",
      B: "Phải đặt họ vào những điều kiện, thời đại của mình mà đánh giá",
      C: "Phải đặt họ trong những mối quan hệ với những người khác, với những việc khác có thể ảnh hưởng đến sự phát triển của họ mà đánh giá",
      D: "Phải xuất phát từ mục đích và lợi ích của họ mà đánh giá",
    },
    correctAnswers: ["C"],
  },
  {
    page: 82,
    question:
      "Trong các yếu tố cấu thành cơ sở hạ tầng của xã hội, yếu tố nào đóng vai trò quyết định?",
    options: {
      A: "Quan hệ sản xuất tàn dư của xã hội cũ",
      B: "Quan hệ sản xuất mầm mống của xã hội tương lai",
      C: "Quan hệ sản xuất thống trị",
      D: "Quan hệ sản xuất chủ đạo",
    },
    correctAnswers: ["C"],
  },
  {
    page: 82,
    question:
      "Theo quan điểm của triết học Mác - Lênin, thuộc tính phản ánh là thuộc tính:",
    options: {
      A: "Riêng có ở con người",
      B: "Chỉ có ở các cơ thể sống",
      C: "Chỉ có ở các chất vô cơ",
      D: "Phổ biến ở mọi tổ chức vật chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 82,
    question: "Định nghĩa vật chất của Lênin bao gồm mấy nội dung cơ bản?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswers: ["B"],
  },
  {
    page: 82,
    question:
      "Hiện tượng, quá trình khác nhau đều có những mối liên hệ cụ thể khác nhau, là biểu hiện của tính chất nào trong mối liên hệ?",
    options: {
      A: "Đa dạng, phong phú",
      B: "Khách quan",
      C: "Phổ biến",
      D: "Chung nhất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 82,
    question: "Hiện thực là phạm trù triết học dùng để chỉ những gì:",
    options: {
      A: "Sẽ tồn tại khi có đủ điều kiện",
      B: "Đang tồn tại trong thực tế",
      C: "Sẽ xuất hiện khi hội đủ mọi điều kiện",
    },
    correctAnswers: ["B"],
  },
  {
    page: 82,
    question:
      "Toàn bộ những chính sách, quan điểm, tư tưởng, đường lối chỉ đạo của nhà nước được gọi là gì?",
    options: {
      A: "Cơ sở hạ tầng",
      B: "Cơ sở thượng tầng",
      C: "Quan hệ sản xuất",
      D: "Kiến trúc thượng tầng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 83,
    question:
      "Đâu là hình thức thế giới quan tồn tại trước thế giới quan triết học?",
    options: {
      A: "Thế giới quan tiền tệ",
      B: "Thế giới quan tôn giáo",
      C: "Thế giới quan nhân sinh",
      D: "Thế giới quan pháp luật",
    },
    correctAnswers: ["B"],
  },
  {
    page: 83,
    question:
      "Trong tư liệu sản xuất thì cái gì phản ánh rõ nhất trình độ phát triển của lực lượng sản xuất?",
    options: {
      A: "Công cụ lao động",
      B: "Máy móc",
      C: "Đối tượng lao động",
      D: "Công cụ tin học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 83,
    question: "Đâu là tác phẩm của Ph. Ăngghen?",
    options: {
      A: '"Biện chứng của thiên nhiên"',
      B: '"Biện chứng của tự nhiên"',
      C: '"Biện chứng của tự do"',
      D: '"Tự nhiên của biện chứng"',
    },
    correctAnswers: ["B"],
  },
  {
    page: 83,
    question:
      "Vị trí, vai trò của Triết học Mác - Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam hiện nay? ()",
    options: {
      A: "Thúc đẩy",
      B: "Đối lập",
      C: "Mâu thuẫn",
      D: "Quan trọng, là nền tảng tư tưởng, kim chỉ nam cho hành động",
    },
    correctAnswers: ["D"],
  },
  {
    page: 83,
    question:
      "Theo triết học Mác, sự chuyển dịch từ hình thái kinh tế chiếm hữu nô lệ, sang phong kiến rồi đến xã hội chủ nghĩa thuộc loại vận động nào?",
    options: {
      A: "Vận động vật lý",
      B: "Vận động hóa học",
      C: "Vận động sinh học",
      D: "Vận động xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 83,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, lực lượng chủ thể sáng tạo ra lịch sử là:",
    options: {
      A: "Quần chúng nhân dân",
      B: "Vĩ nhân, lãnh tụ",
      C: "Tầng lớp trí thức",
      D: "Trí thức, vĩ nhân",
    },
    correctAnswers: ["A"],
  },
  {
    page: 84,
    question: "Theo quan điểm của chủ nghĩa duy vật lịch sử, nhà nước là gì?",
    options: {
      A: "Tổ chức phi chính phủ",
      B: "Tổ chức quyền lực phi giai cấp",
      C: "Tổ chức quyền lực mang bản chất của giai cấp sở hữu tư liệu sản xuất chủ yếu của xã hội",
      D: "Tổ chức quyền lực mang bản chất của mọi giai cấp trong xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 84,
    question:
      "Theo quan niệm duy vật biện chứng về lịch sử thì những quan hệ sản xuất cũ được thay thế bằng quan hệ sản xuất mới, phù hợp trình độ phát triển của lực lượng sản xuất đã phát triển nhờ điều gì?",
    options: {
      A: "Cải cách triệt để",
      B: "Cách mạng vô sản",
      C: "Cách mạng xã hội",
      D: "Đảo chính",
    },
    correctAnswers: ["C"],
  },
  {
    page: 84,
    question:
      "Triết học do C.Mác và Ph.Ăng-ghen thực hiện là bước ngoặt cách mạng trong sự phát triển của triết học. Biểu hiện vĩ đại nhất của bước ngoặt cách mạng đó là:",
    options: {
      A: "Thay đổi căn bản tính chất của triết học, thay đổi căn bản đối tượng của nó và mối quan hệ đối với các khoa học khác",
      B: "Gắn bó chặt chẽ giữa triết học với phong trào cách mạng của giai cấp vô sản và quần chúng lao động",
      C: "Sáng tạo ra chủ nghĩa duy vật lịch sử làm thay đổi quan niệm của con người về xã hội",
      D: "Làm cho triết học trở nên phổ biến trong cuộc sống",
    },
    correctAnswers: ["C"],
  },
  {
    page: 84,
    question: "Các hình thức cơ bản của chủ nghĩa duy tâm:",
    options: {
      A: "Duy tâm chủ quan và duy tâm khách quan",
      B: "Duy tâm biện chứng và duy tâm siêu hình",
      C: "Duy tâm trung cổ cận đại và duy tâm cổ điển Đức",
      D: "Duy tâm khách quan và duy tâm cổ đại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 85,
    question:
      "Sự sinh ra, lớn lên, già đi thuộc hình thức vận động nào trong triết học?",
    options: {
      A: "Vận động cơ học",
      B: "Vận động sinh học",
      C: "Vận động vật lý",
      D: "Vận động hóa học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 85,
    question: "Cấu trúc của phương thức sản xuất gồm những yếu tố nào sau đây?",
    options: {
      A: "Công cụ lao động, đối tượng lao động",
      B: "Trình độ lao động, quan hệ sản xuất",
      C: "Lực lượng sản xuất, quan hệ sản xuất",
      D: "Tư liệu sản xuất và con người",
    },
    correctAnswers: ["C"],
  },
  {
    page: 85,
    question:
      "Chỉ tính quy định, mối liên hệ thống nhất giữa chất và lượng, là khoảng giới hạn mà trong đó sự thay đổi về lượng của sự vật chưa làm thay đổi căn bản chất của nó gọi là:",
    options: {
      A: "Độ",
      B: "Giới hạn",
      C: "Điểm nút",
      D: "Tích về lượng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 85,
    question:
      "Khái niệm nào dùng để chỉ khoảng giới hạn trong đó sự thay đổi về lượng chưa dẫn đến sự thay đổi căn bản chất của sự vật ấy? (Kiểu hỏi khác)",
    options: {
      A: "Chất",
      B: "Lượng",
      C: "Độ",
      D: "Điểm nút",
    },
    correctAnswers: ["C"],
  },
  {
    page: 85,
    question:
      "Các hình thức tồn tại của các dạng cụ thể của vật chất ở một vị trí nhất định, có một quảng tính nhất định và tồn tại trong mối tương quan nhất định với các dạng cụ thể khác của vật chất được gọi là:",
    options: {
      A: "Tồn tại của vật chất",
      B: "Thời gian",
      C: "Không gian",
      D: "Sự tồn tại",
    },
    correctAnswers: ["C"],
  },
  {
    page: 85,
    question:
      "Chủ nghĩa duy tâm có nguồn gốc nhận thức và nguồn gốc xã hội là trong quá trình nhận thức nó xem xét phiến diện, tuyệt đối hóa, thần thánh hóa cái gì của quá trình nhận thức?",
    options: {
      A: "Một đối tượng",
      B: "Những đặc tính nào đó",
      C: "Một số mặt nào đó",
      D: "Một mặt, một đặc tính nào đó",
    },
    correctAnswers: ["D"],
  },
  {
    page: 86,
    question:
      'Giả sử khái niệm Việt Nam là một "cái riêng" thì yếu tố nào sau đây là cái đơn nhất?',
    options: {
      A: "Con người",
      B: "Quốc gia",
      C: "Văn hóa",
      D: "Hà Nội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 86,
    question: "Nhận thức lý tính được thực hiện dưới hình thức nào?",
    options: {
      A: "Cảm giác, tri giác và phán đoán",
      B: "Khái niệm, phán đoán và suy lý",
      C: "Cảm giác, khái niệm, suy lý",
      D: "Cảm giác, tri giác, biểu tượng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 86,
    question:
      "Ý thức xã hội phản ánh tồn tại xã hội với hai trình độ khác nhau đó là hai trình độ nào?",
    options: {
      A: "Tâm lý xã hội và hệ tư tưởng xã hội",
      B: "Tâm lý con người và hệ tư tưởng",
      C: "Tinh thần xã hội và hệ tư tưởng",
      D: "Nền tảng vật chất và giá trị tinh thần",
    },
    correctAnswers: ["A"],
  },
  {
    page: 86,
    question: "Cái tất nhiên là cái do:",
    options: {
      A: "Những nguyên nhân cơ bản bên trong sự vật quy định",
      B: "Những nguyên nhân bên ngoài sự vật quy định",
      C: "Cả nguyên nhân bên trong và nguyên nhân bên ngoài sự vật quy định",
      D: "Những nguyên nhân bản chất bên trong quy định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 86,
    question:
      "Cơ sở khách quan của xây dựng liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong cách mạng xã hội chủ nghĩa là công nghiệp và nông nghiệp là hai ngành có vai trò như thế nào?",
    options: {
      A: "Sản xuất",
      B: "Đảm bảo các nhu cầu xã hội",
      C: "Đảm bảo cân đối cung - cầu",
      D: "Sản xuất chính",
    },
    correctAnswers: ["A"],
  },
  {
    page: 87,
    question:
      "Một nhóm sinh viên tranh luận về chân lý, hãy xác định ý kiến nào đúng nhất, chân lý là gì?",
    options: {
      A: "Quan điểm được mọi người trong cuộc bỏ phiếu tán thành",
      B: "Quan điểm được đa số ủng hộ",
      C: "Một phán đoán đúng quy tắc logic",
      D: "Một quan điểm được chứng minh trong thực tiễn là đúng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 87,
    question:
      "Theo quan điểm duy vật lịch sử, sản xuất ra của cải vật chất giữ vai trò là:",
    options: {
      A: "Nền tảng của xã hội",
      B: "Nền tảng vật chất của xã hội",
      C: "Nền tảng tinh thần của xã hội",
      D: "Nền tảng kỹ thuật, công nghệ của xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 87,
    question: "Phép biện chứng chất phác thời cổ đại là:",
    options: {
      A: "Một hình thức của chủ nghĩa duy tâm",
      B: "Một phần của chủ nghĩa duy vật",
      C: "Tất cả đều đúng",
      D: "Một hình thức của phép biện chứng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 87,
    question:
      "Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật gọi là gì?",
    options: {
      A: "Bản chất",
      B: "Hiện tượng",
      C: "Nội dung",
      D: "Hình thức",
    },
    correctAnswers: ["A"],
  },
  {
    page: 87,
    question: "Vấn đề cơ bản của Triết học là gì?",
    options: {
      A: "Mối quan hệ giữa tự nhiên và bản thể",
      B: "Mối quan hệ giữa tư duy và tồn tại",
      C: "Mối quan hệ giữa cái chung và cái riêng",
      D: "Con người và bản thể",
    },
    correctAnswers: ["B"],
  },
  {
    page: 87,
    question:
      "Chủ nghĩa duy vật biện chứng khẳng định rằng, nguyên nhân sinh ra kết quả phải có thêm yếu tố nào?",
    options: {
      A: "Tác động",
      B: "Điều kiện",
      C: "Nguyên cớ",
      D: "Ý chí",
    },
    correctAnswers: ["B"],
  },
  {
    page: 88,
    question:
      "Theo quan điểm của chủ nghĩa duy vật thì những mối liên hệ tồn tại ở mọi sự vật, hiện tượng của thế giới là mối liên hệ: (Kiểu hỏi khác: Theo quan điểm của chủ nghĩa duy vật biện chứng thì những mối liên hệ tồn tại ở mọi sự vật, hiện tượng của thế giới là mối liên hệ như thế nào?)",
    options: {
      A: "Chung",
      B: "Quan trọng",
      C: "Khá phổ biến",
      D: "Phổ biến",
    },
    correctAnswers: ["D"],
  },
  {
    page: 88,
    question: "Nguyên nhân và kết quả cái nào có trước?",
    options: {
      A: "Nguyên nhân",
      B: "Kết quả",
      C: "Cả hai cùng xuất hiện trước",
      D: "Không cái nào xuất hiện trước",
    },
    correctAnswers: ["A"],
  },
  {
    page: 88,
    question:
      "Mối liên hệ thống nhất và đấu tranh, chuyển hoá giữa các mặt đối lập của mỗi sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng với nhau gọi là khái niệm gì?",
    options: {
      A: "Chuyển hoá chất, lượng",
      B: "Sự thống nhất",
      C: "Quan hệ hài hòa",
      D: "Mâu thuẫn",
    },
    correctAnswers: ["D"],
  },
  {
    page: 88,
    question:
      'Ai là người khẳng định: "lao động đã sáng tạo ra bản thân con người"?',
    options: {
      A: "Ph.Ăngghen",
      B: "L.Phoiobác",
      C: "Immanuel Kant",
      D: "Béccdren",
    },
    correctAnswers: ["A"],
  },
  {
    page: 88,
    question:
      "Theo quan niệm duy vật biện chứng về lịch sử thì để giải thích đúng đắn các vấn đề của đời sống xã hội thì phải tìm nguyên nhân cuối cùng từ thực trạng phát triển của nền sản xuất vật chất của xã hội đó, mà căn bản là từ trình độ phát triển của:",
    options: {
      A: "Phương thức sản xuất của nó",
      B: "Quan hệ sản xuất của nó",
      C: "Tư liệu sản xuất của nó",
      D: "Cơ sở vật chất",
    },
    correctAnswers: ["B"],
  },
  {
    page: 89,
    question:
      "Tinh thiên - Trời hửng Sự vật vần xoay đà định sẵn, Hết mưa là nắng hửng lên thôi, Đất trời một thoáng thu màn ướt, Sông núi muôn trùng trải gấm phơi, Trời ấm, hoa cười chào gió nhẹ, Cây cao, chim hót rộn cành tươi, Người cùng vạn vật đều phơi phới, Hết khổ là vui vốn lẽ đời. Trong bài thơ trên của Chủ tịch Hồ Chí Minh, cặp phạm trù nào được nhắc đến?",
    options: {
      A: "Cái chung, cái riêng",
      B: "Bản chất, hiện tượng",
      C: "Tất nhiên, ngẫu nhiên",
      D: "Nguyên nhân, kết quả",
    },
    correctAnswers: ["C"],
  },
  {
    page: 89,
    question: "Lơ xíp (khoảng 500 - 440 trước CN) được xem là?",
    options: {
      A: "Nhà triết học Giáo hội Cổ đại",
      B: "Nhà toán học Hi Lạp Cổ đại",
      C: "Nhà triết học Hi Lạp Cổ đại",
      D: "Nhà thần học Hi Lạp Cổ đại",
    },
    correctAnswers: ["C"],
  },
  {
    page: 89,
    question: "Ai được xem là nhà triết học thiên tài vào thế kỷ XVIII - XIX?",
    options: {
      A: "Hecralitus",
      B: "Immanuel Kant",
      C: "Socrates",
      D: "Bruno Fesnades",
    },
    correctAnswers: ["B"],
  },
  {
    page: 89,
    question:
      "Chủ nghĩa duy vật hình thành và phát triển với mấy hình thức cơ bản?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswers: ["C"],
  },
  {
    page: 89,
    question: "Đâu là nhận định đúng về Triết học?",
    options: {
      A: "Triết học là hạt nhân của tôn giáo",
      B: "Triết học là hạt nhân của thế giới quan",
      C: "Triết học là trung tâm của phương pháp luận",
      D: "Triết học là hạt nhân của phương pháp luận",
    },
    correctAnswers: ["B"],
  },
  {
    page: 90,
    question:
      "Ai là người tạo ra cơ sở tri thức cho sự phát triển của triết học trong thời kỳ Phục hưng?",
    options: {
      A: "Adam Smith",
      B: "Math Lurer",
      C: "Xanhxi-mong D. Copernicus",
    },
    correctAnswers: ["D"],
  },
  {
    page: 90,
    question: "Thời kỳ Phục hưng bắt đầu ở quốc gia nào?",
    options: {
      A: "Pháp",
      B: "Ý",
      C: "Anh",
      D: "Bồ Đào Nha",
    },
    correctAnswers: ["B"],
  },
  {
    page: 90,
    question: "Chủ nghĩa duy vật siêu hình ra đời gắn liền với thời kỳ nào?",
    options: {
      A: "Thời kỳ Phục hưng",
      B: "Thời kỳ Trung cổ",
      C: "Thời kỳ Khải huyền",
      D: "Thời kỳ cận đại",
    },
    correctAnswers: ["D"],
  },
  {
    page: 90,
    question:
      "Ngũ hành gồm những yếu tố nào? (Kiểu hỏi khác: Trường phái triết học nào sau đây cho rằng vật chất bao gồm các yếu tố: kim, mộc, thủy, hỏa, thổ?)",
    options: {
      A: "Nhân, lễ, nghĩa, trí, tín",
      B: "Kim, mộc, thổ, thủy, không khí",
      C: "Kim, mộc, thủy, hỏa, thổ",
      D: "Kim, mộc, thủy, hỏa, lễ",
    },
    correctAnswers: ["C"],
  },
  {
    page: 90,
    question:
      "Theo triết học Mác - Lênin, yếu tố nào đóng vai trò quyết định đối với tất cả các mặt của đời sống xã hội?",
    options: {
      A: "Khoa học",
      B: "Phương thức sản xuất",
      C: "Chính trị",
      D: "Văn hóa nghệ thuật",
    },
    correctAnswers: ["B"],
  },
  {
    page: 90,
    question:
      "Sự ra đời của quan điểm duy vật về lịch sử do C. Mác sáng lập ra đã khắc phục được những sai lầm căn bản trong việc lý giải xã hội theo:",
    options: {
      A: "Quan điểm tôn giáo và duy tâm",
      B: "Quan điểm duy vật siêu hình và tôn giáo",
      C: "Quan điểm duy tâm và siêu hình",
      D: "Quan điểm duy vật tự nhiên và tầm thường",
    },
    correctAnswers: ["C"],
  },
  {
    page: 91,
    question:
      "Phạm trù nhằm chỉ những biến đổi xuất hiện do tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra, gọi là gì?",
    options: {
      A: "Nguyên nhân",
      B: "Kết quả",
      C: "Hiện thực",
      D: "Khả năng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 91,
    question:
      "Theo quan điểm của triết học Mác - Lênin, con người là thực thể thống nhất của các mặt nào?",
    options: {
      A: "Sinh học và tâm lý",
      B: "Sinh học và xã hội",
      C: "Phẩm chất đạo đức và nhân cách",
      D: "Tâm lý và năng lực nhận thức",
    },
    correctAnswers: ["B"],
  },
  {
    page: 91,
    question: "Chủ nghĩa duy vật là trường phái triết học cho rằng:",
    options: {
      A: "Bản chất thế giới là vật thể",
      B: "Bản chất thế giới là vật chất",
      C: "Vật chất là tính thứ hai",
      D: "Vật chất tác động đến ý thức",
      E: "Bản chất thế giới là vật chất và ý thức",
    },
    correctAnswers: ["B"],
  },
  {
    page: 91,
    question:
      "Theo chủ nghĩa duy vật biện chứng, mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất?",
    options: {
      A: "Biện chứng",
      B: "Tương hỗ",
      C: "Phụ thuộc",
      D: "Quan điểm toàn diện và cụ thể",
    },
    correctAnswers: ["A"],
  },
  {
    page: 91,
    question:
      "Ngày nay, trong nền sản xuất xã hội, tỷ trọng lao động trí tuệ có xu hướng như thế nào?",
    options: {
      A: "Tăng dần",
      B: "Giảm dần",
      C: "Điều hòa",
      D: "Ổn định",
    },
    correctAnswers: ["A"],
  },
  {
    page: 92,
    question: "Sản xuất vật chất là hoạt động có tính chất gì?",
    options: {
      A: "Tính khách quan, tính tất yếu, tính xã hội, tính văn hóa và tính mục đích",
      B: "Tính tất yếu, tính tư duy, tính cộng đồng, tính văn hóa và tính mục đích",
      C: "Tính khách quan, tính mục đích, tính xã hội, tính lịch sử và tính sáng tạo",
      D: "Tính xã hội, tính lịch sử, tính sáng tạo, tính văn hóa và tính mục đích tự thân",
    },
    correctAnswers: ["C"],
  },
  {
    page: 92,
    question: "Đâu là một trong những hình thức tồn tại của vật chất?",
    options: {
      A: "Không gian, thời gian",
      B: "Vật thể",
      C: "Cái bàn, cái quạt",
      D: "Không có phương án đúng",
    },
    correctAnswers: ["A"],
  },
  {
    page: 92,
    question:
      "Theo chủ nghĩa duy vật lịch sử, lực lượng sản xuất có quan hệ thế nào với quan hệ sản xuất?",
    options: {
      A: "Quyết định",
      B: "Tác động trở lại",
      C: "Phụ thuộc",
      D: "Không phụ thuộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 92,
    question: "Chủ nghĩa duy vật cho rằng đâu là bản nguyên của thế giới?",
    options: {
      A: "Bản chất thế giới là vật chất",
      B: "Bản nguyên thế giới là ý thức",
      C: "Bản nguyên thế giới là lực lượng siêu nhiên",
      D: "Bản nguyên thế giới là Thượng đế",
    },
    correctAnswers: ["A"],
  },
  {
    page: 92,
    question:
      "Thừa nhận sự tồn tại của vật chất và tinh thần là bản nguyên có thể cùng quyết định nguồn gốc và sự vận động của thế giới là trường phái nào?",
    options: {
      A: "Nhị nguyên luận",
      B: "Biện chứng",
      C: "Biện chứng luận",
      D: "Chủ nghĩa Mác - Lênin",
    },
    correctAnswers: ["A"],
  },
  {
    page: 93,
    question:
      "Tại sao khi nhìn lên trời, mỗi người đều nhìn thấy đám mây với những hình thù khác nhau?",
    options: {
      A: "Sự phản ánh năng động, sáng tạo của ý thức",
      B: "Do ý muốn chủ quan của mỗi người",
      C: "Thế giới khách quan đa dạng phong phú",
      D: "Do đám mây hôm đó có hình thù như vật cụ thể nên mỗi người nhìn khác nhau",
    },
    correctAnswers: ["A"],
  },
  {
    page: 93,
    question:
      "Theo triết học Mác-xít thì siêu hình và biện chứng là hai phương pháp như thế nào? ()",
    options: {
      A: "Đối lập nhau",
      B: "Tương tác lẫn nhau",
      C: "Bổ sung cho nhau",
      D: "Có mối liên hệ với nhau",
    },
    correctAnswers: ["A"],
  },
  {
    page: 93,
    question:
      "Cơ sở của sự tồn tại và phát triển xã hội có nguồn gốc trực tiếp từ đâu?",
    options: {
      A: "Nền tảng xã hội",
      B: "Sản xuất vật chất",
      C: "Thế giới vật chất",
      D: "Thế giới khách quan",
    },
    correctAnswers: ["B"],
  },
  {
    page: 93,
    question:
      "Vấn đề cơ bản của triết học có hai mặt. Mặt thứ nhất phải trả lời cho câu hỏi cái nào có trước, cái nào có sau, cái nào quyết định cái nào. Đó là quan hệ giữa cái gì với cái gì? (Kiểu hỏi khác: Mặt thứ nhất trong vấn đề cơ bản của triết học giải quyết mối quan hệ giữa các yếu tố nào sau đây?)",
    options: {
      A: "Tư duy với thực tế",
      B: "Tư duy với xã hội",
      C: "Ý thức vật chất",
      D: "Ý thức và bộ não",
    },
    correctAnswers: ["C"],
  },
  {
    page: 93,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, mỗi hình thái kinh tế - xã hội được cấu thành từ những nhân tố nào?",
    options: {
      A: "Lực lượng sản xuất, kiến trúc thượng tầng",
      B: "Quan hệ kinh tế, lực lượng sản xuất và kiến trúc thượng tầng",
      C: "Quan hệ sản xuất và kiến trúc thượng tầng",
      D: "Lực lượng sản xuất, quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội và kiến trúc thượng tầng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 94,
    question:
      "Theo quan điểm của chủ nghĩa duy tâm khách quan, mối quan hệ giữa các sự vật do cái gì quyết định?",
    options: {
      A: "Lực lượng siêu nhiên (thượng đế, ý niệm tuyệt đối)",
      B: "Cảm giác, thói quen của con người",
      C: "Bản chất của thế giới tự nhiên",
      D: "Phức hợp của cảm giác",
    },
    correctAnswers: ["A"],
  },
  {
    page: 94,
    question: "Nguồn gốc tự nhiên của ý thức bao gồm yếu tố nào?",
    options: {
      A: "Thế giới vật chất cận con người",
      B: "Thế giới khách quan",
      C: "Não người",
      D: "B và C",
    },
    correctAnswers: ["D"],
  },
  {
    page: 94,
    question:
      'Chọn phương án trả lời phù hợp nhất. "Sự ra đời của Triết học Mác là một quá trình...". Từ còn thiếu trong chỗ trống là gì?',
    options: {
      A: "Tất yếu khách quan",
      B: "Thiết yếu",
      C: '"nhiều hơn và đồ sộ hơn"... "thế hệ trước"',
      D: "Đấu tranh của giai cấp",
    },
    correctAnswers: ["A"],
  },
  {
    page: 94,
    question: "Quan điểm nào thuộc chủ nghĩa duy tâm?",
    options: {
      A: "Vật chất quyết định ý thức",
      B: "Vật chất là tính thứ nhất, ý thức là tính thứ hai",
      C: "Vật chất và ý thức song song tồn tại, không cái nào phụ thuộc cái nào",
      D: "Ý thức có trước, vật chất có sau; ý thức quyết định vật chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 94,
    question:
      "Triết học duy tâm cho rằng điều nào là đúng sau đây? (Kiểu hỏi khác)",
    options: {
      A: "Vật chất quyết định ý thức",
      B: "Ý thức quyết định vật chất",
      C: "Con người quyết định tất cả",
    },
    correctAnswers: ["B"],
  },
  {
    page: 94,
    question:
      "Bộ phận nào của tư liệu lao động được coi là tiêu chí phản ánh đặc trưng phát triển của một thời đại kinh tế?",
    options: {
      A: "Công cụ lao động",
      B: "Kết cấu hạ tầng sản xuất",
      C: "Nhà cửa, kho bãi để chứa đựng, bảo quản",
      D: "Quan hệ sản xuất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 95,
    question:
      "Theo quan điểm của phép biến chứng duy vật thì quy luật nào là quy luật về khuynh hướng cơ bản, phổ biến của mọi sự vận động và phát triển diễn ra trong lĩnh vực tự nhiên, xã hội và tư duy?",
    options: {
      A: "Vận động",
      B: "Lượng đổi, chất đổi",
      C: "Mâu thuẫn",
      D: "Phủ định của phủ định",
    },
    correctAnswers: ["D"],
  },
  {
    page: 95,
    question: "Đâu không phải là quan điểm của Chủ nghĩa Mác-Lênin về lãnh tụ?",
    options: {
      A: "Những cá nhân kiệt xuất trong nhiều lĩnh vực",
      B: "Những cá nhân kiệt xuất có sự gắn bó với quần chúng nhân dân",
      C: "Những cá nhân kiệt xuất được quần chúng tín nhiệm",
      D: "Những cá nhân kiệt xuất tự nguyện hy sinh bản thân mình vì lợi ích của quần chúng nhân dân",
    },
    correctAnswers: ["A"],
  },
  {
    page: 95,
    question:
      "Trong các yếu tố của lực lượng sản xuất, yếu tố nào là quan trọng nhất?",
    options: {
      A: "Tư liệu sản xuất",
      B: "Người lao động",
      C: "Đối tượng lao động",
      D: "Máy móc và công nghệ hiện đại",
    },
    correctAnswers: ["B"],
  },
  {
    page: 95,
    question: "Tiền đề xuất phát chủ nghĩa duy vật lịch sử là gì?",
    options: {
      A: "Con người hiện thực",
      B: "Con người trừu tượng",
      C: "Con người hành động",
      D: "Con người tư duy",
    },
    correctAnswers: ["A"],
  },
  {
    page: 95,
    question:
      "Quan điểm lịch sử cụ thể được rút ra từ nghiên cứu nguyên lý triết học nào sau đây?",
    options: {
      A: "Nguyên lý duy vật lịch sử",
      B: "Nguyên lý về mối liên hệ phổ biến",
      C: "Nguyên lý phát triển",
      D: "Nguyên lý triết học thực hành",
    },
    correctAnswers: ["B"],
  },
  {
    page: 96,
    question:
      'Theo quan điểm của triết học Mác - Lênin mối quan hệ giữa "sự thống nhất và đấu tranh của các mặt đối lập" là như thế nào?',
    options: {
      A: "Sự thống nhất và đấu tranh của các mặt đối lập là thống nhất. Không có thống nhất của các mặt đối lập thì cũng không có đấu tranh của các mặt đối lập",
      B: "Sự đấu tranh của các mặt đối lập vừa tương đối, vừa tuyệt đối",
      C: "Không có sự thống nhất của các mặt đối lập thì vẫn có sự đấu tranh của các mặt đối lập",
      D: "Không có sự đấu tranh của các mặt đối lập thì có thể trong một vài trường hợp sẽ có sự thống nhất của các mặt đối lập",
    },
    correctAnswers: ["A"],
  },
  {
    page: 96,
    question:
      'Ai là người định nghĩa: "Vật chất là cái phi vật chất đang vận động"?',
    options: {
      A: "E.Makho",
      B: "Anhxtanh",
      C: "Béc coren",
      D: "Henri Berson (Piecson)",
    },
    correctAnswers: ["D"],
  },
  {
    page: 96,
    question:
      "Theo chủ nghĩa duy vật lịch sử thì những biến đổi từ đâu tạo ra nhu cầu khách quan phải có sự biến đổi tương ứng trong kiến trúc thượng tầng?",
    options: {
      A: "Cơ sở hạ tầng",
      B: "Lực lượng sản xuất",
      C: "Quan hệ sản xuất",
    },
    correctAnswers: ["A"],
  },
  {
    page: 96,
    question:
      "Trong sự tác động trở lại của kiến trúc thượng tầng đến cơ sở hạ tầng, yếu tố nào có tác động lớn nhất?",
    options: {
      A: "Nhà nước",
      B: "Tôn giáo",
      C: "Ý thức chính trị",
      D: "Văn hóa",
    },
    correctAnswers: ["A"],
  },
  {
    page: 97,
    question:
      "Chọn câu trả lời đúng nhất theo quan điểm duy vật lịch sử: Khẳng định tính lịch sử - tự nhiên của sự phát triển các hình thái kinh tế - xã hội, tức là khẳng định sự phát triển của xã hội:",
    options: {
      A: "Hoàn toàn tuân theo quy luật khách quan của giới tự nhiên",
      B: "Hoàn toàn tuân theo quy luật khách quan của xã hội",
      C: "Hoàn toàn tuân theo quy luật khách quan của tự nhiên và xã hội",
      D: "Tuân theo quy luật khách quan nhưng đồng thời chịu sự tác động của các nhân tố khác",
    },
    correctAnswers: ["D"],
  },
  {
    page: 97,
    question:
      "Trong quan điểm của phép biện chứng duy vật thì với hình thức, nội dung giữ vai trò:",
    options: {
      A: "Quyết định",
      B: "Phụ thuộc",
      C: "Không phụ thuộc",
      D: "Ít phụ thuộc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 97,
    question: "Cơ sở chủ yếu nhất để hình thành nên khái niệm là gì?",
    options: {
      A: "Thế giới tự nhiên",
      B: "Thực tiễn",
      C: "Cảm giác",
      D: "Tri giác và biểu tượng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 97,
    question:
      "Theo quan điểm của chủ nghĩa duy vật thì bất kỳ một sự vật, hiện tượng nào, ở bất kỳ không gian nào và ở bất kỳ thời gian nào cũng có mối liên hệ với những sự vật, hiện tượng khác là biểu hiện tính chất nào của mối liên hệ?",
    options: {
      A: "Tính đa dạng",
      B: "Tính khách quan",
      C: "Tính phổ biến",
      D: "Tính chung nhất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 98,
    question:
      '"Phương pháp biện chứng của tôi không những khác phương pháp của Hêghen về cơ bản mà còn đối lập hẳn với phương pháp ấy nữa" là luận điểm của ai?',
    options: {
      A: "Phoiơbắc",
      B: "Ph. Ăngghen",
      C: "V.I. Lênin",
      D: "C.Mác",
    },
    correctAnswers: ["D"],
  },
  {
    page: 98,
    question:
      "Yếu tố biện chứng trong triết học Phật giáo được thể hiện qua quan điểm về điều gì?",
    options: {
      A: "Vô thường, nhân duyên",
      B: "Bát chính đạo",
      C: "Bát khổ",
      D: "Vô thường, vô ngã, vô tạo giả",
    },
    correctAnswers: ["D"],
  },
  {
    page: 98,
    question: "Đấu tranh của hai mặt đối lập là:",
    options: {
      A: "Sự tác động qua lại theo xu hướng bài trừ và phủ định lẫn nhau",
      B: "Sự tác động lẫn nhau giữa hai mặt đối lập theo khuynh hướng biện chứng",
      C: "Các phương án trả lời đều sai",
    },
    correctAnswers: ["A"],
  },
  {
    page: 98,
    question:
      "Theo quan điểm triết học Mác - Lênin, nhà nước có mấy đặc trưng?",
    options: {
      A: "Hai đặc trưng",
      B: "Ba đặc trưng",
      C: "Bốn đặc trưng",
      D: "Năm đặc trưng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 98,
    question:
      "Thông thường, trong kiến trúc thượng tầng các nhà nước tư bản hiện nay:",
    options: {
      A: "Đều thực hiện chế độ nhất nguyên chính trị",
      B: "Không thực hiện chế độ đa nguyên chính trị",
      C: "Tùy từng nước mà có thể thực hiện chế độ đa nguyên chính trị hay không",
      D: "Thực hiện chế độ đa đảng nhưng nhất nguyên chính trị",
    },
    correctAnswers: ["D"],
  },
  {
    page: 99,
    question:
      "Theo quan điểm của phép biện chứng duy vật thì những thay đổi về chất của sự vật lại tạo ra những thay đổi gì của sự vật trên các phương diện khác nhau?",
    options: {
      A: "Biến đổi mới về lượng",
      B: "Biến đổi của chất",
      C: "Chất mới",
      D: "Cái mới",
    },
    correctAnswers: ["A"],
  },
  {
    page: 99,
    question:
      "Theo quan điểm của chủ nghĩa Mác-Lênin, Kiến trúc thượng tầng là gì?",
    options: {
      A: "Toàn bộ thiết chế chính trị của xã hội",
      B: "Toàn bộ thiết chế chính trị và pháp luật của xã hội",
      C: "Toàn bộ thiết chế chính trị - xã hội",
      D: "Toàn bộ hệ thống kết cấu các hình thái ý thức xã hội cùng với các thiết chế chính trị - xã hội tương ứng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 99,
    question:
      "Cơ sở để phần chia triết học thành các trường phái khác nhau là:",
    options: {
      A: "Vấn đề cơ bản của nhận thức luận",
      B: "Vấn đề cơ bản của phương pháp luận",
      C: "Vấn đề cơ bản của triết học",
    },
    correctAnswers: ["C"],
  },
  {
    page: 99,
    question:
      "Thuộc tính cơ bản nhất, phổ biến nhất của mọi tồn tại vật chất được khái quát trong phạm trù vật chất của chủ nghĩa duy vật biện chứng là:",
    options: {
      A: "Không gian và thời gian",
      B: "Tồn tại khách quan",
      C: "Tồn tại trong vận động",
      D: "Vận động và đứng im",
    },
    correctAnswers: ["B"],
  },
  {
    page: 99,
    question:
      'Luận điểm "Bản chất là những thực thể tinh thần tồn tại khách quan, quyết định sự tồn tại của sự vật" thuộc lập trường triết học nào?',
    options: {
      A: "Chủ nghĩa duy tâm chủ quan",
      B: "Chủ nghĩa duy tâm khách quan",
      C: "Chủ nghĩa duy vật siêu hình",
      D: "Tất cả các đáp án đều đúng",
    },
    correctAnswers: ["B"],
  },
  {
    page: 100,
    question:
      "Sự thống nhất giữa lực lượng sản xuất với một trình độ nhất định và quan hệ sản xuất tương ứng tạo thành gì?",
    options: {
      A: "Bản chất hàng hóa",
      B: "Năng lực sáng tạo",
      C: "Cách thức sản xuất",
      D: "Phương thức sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 100,
    question: "Quan điểm phát triển đòi hỏi điều gì?",
    options: {
      A: "Bảo vệ cái mới, ủng hộ cái mới, đấu tranh cho cái mới nhưng không phủ định sạch trơn cái cũ",
      B: "Bảo vệ cái cũ, đấu tranh cho cái cũ đồng thời tạo điều kiện để cái mới ra đời và thay thế cái cũ",
      C: "Phát huy những mặt tích cực của cái cũ, tạo điều kiện cho nó phát triển",
      D: "Tạo điều kiện tiền đề cho cái mới phát triển",
    },
    correctAnswers: ["A"],
  },
  {
    page: 100,
    question: "Điều khẳng định nào sau đây là đúng?",
    options: {
      A: "Thuyết không thể biết không thừa nhận chân lý khách quan.",
      B: "Chủ nghĩa duy tâm chủ quan không thừa nhận chân lý khách quan.",
      C: "Chủ nghĩa duy tâm khách quan thừa nhận chân lý chủ quan.",
      D: "Chủ nghĩa duy vật biện chứng thừa nhận chân lý khách quan.",
    },
    correctAnswers: ["D"],
  },
  {
    page: 100,
    question:
      "Theo chủ nghĩa duy vật lịch sử, cơ sở hạ tầng là toàn bộ những quan hệ sản xuất hợp thành cơ cấu:",
    options: {
      A: "Của xã hội",
      B: "Kỹ thuật xã hội",
      C: "Kinh tế của xã hội",
      D: "Vật chất xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 100,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, để giải thích đúng và triệt để các hiện tượng trong đời sống xã hội, cần phải xuất phát từ:",
    options: {
      A: "Nền sản xuất vật chất của xã hội",
      B: "Quan điểm chính trị của giai cấp nắm quyền lực nhà nước",
      C: "Truyền thống văn hóa xã hội",
      D: "Ý chí của mọi thành viên trong cộng đồng xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 101,
    question:
      "Vì các mối liên hệ có tính đa dạng, phong phú nên trong hoạt động nhận thức và thực tiễn khi thực hiện quan điểm toàn diện thì con người phải kết hợp với quan điểm:",
    options: {
      A: "Lịch sử - cụ thể",
      B: "Toàn diện",
      C: "Biện chứng",
      D: "Khách quan",
    },
    correctAnswers: ["A"],
  },
  {
    page: 101,
    question:
      'Luận điểm sau đây thuộc quan điểm triết học nào: "Phát triển là quá trình chuyển hóa từ những thay đổi về lượng thành sự thay đổi về chất và ngược lại"?',
    options: {
      A: "Quan điểm chiết trung và ngụy biện",
      B: "Tất cả đều đúng",
      C: "Quan điểm biện chứng",
      D: "Quan điểm siêu hình",
    },
    correctAnswers: ["C"],
  },
  {
    page: 101,
    question:
      "Trình độ phát triển của phương thức sản xuất ra của cải vật chất là nhân tố giữ vai trò quyết định:",
    options: {
      A: "Đời sống tinh thần của xã hội",
      B: "Đời sống văn hóa của xã hội",
      C: "Đời sống chính trị, đạo đức của xã hội",
      D: "Trình độ phát triển của nền sản xuất xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 101,
    question:
      '"Mặt người da thú" giúp anh/chị liên hệ tới cặp phạm trù nào trong triết học?',
    options: {
      A: "Cái chung, cái riêng",
      B: "Bản chất, hiện tượng",
      C: "Tất nhiên, ngẫu nhiên",
      D: "Nguyên nhân, kết quả",
    },
    correctAnswers: ["B"],
  },
  {
    page: 101,
    question: "Cơ sở của sự tồn tại, phát triển là gì?",
    options: {
      A: "Lao động của thế giới",
      B: "Sản xuất vật chất",
      C: "Chủ nghĩa tư bản và chủ nghĩa xã hội",
      D: "Tiêu dùng xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 102,
    question:
      "Một trong những nội dung chỉ tính thống nhất vật chất của thế giới là gì?",
    options: {
      A: "Chỉ có một thế giới duy nhất, thế giới thống nhất với nhau",
      B: "Chỉ có một thế giới duy nhất, thế giới thống nhất ở tính vật chất",
      C: "Thế giới này là do vụ nổ vũ trụ gây ra, tạo ra những hành tinh mang tính vật chất",
      D: "A và B",
    },
    correctAnswers: ["B"],
  },
  {
    page: 102,
    question:
      "Phép biện chứng nào được coi là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, xã hội và tư duy con người:",
    options: {
      A: "Phép biện chứng cổ đại",
      B: "Phép biện chứng cổ điển Đức",
      C: "Phép biện chứng của chủ nghĩa Mác - Lênin",
      D: "Phép biện chứng của G. W.Ph.Hêghen",
    },
    correctAnswers: ["C"],
  },
  {
    page: 102,
    question: "Ai là tác giả của Thuyết tương đối tổng quát?",
    options: {
      A: "Albert Einstein (A.Anhxtanh)",
      B: "Nicolai Copecnic",
      C: "Jos. Bruno",
      D: "Alex. Sancho",
    },
    correctAnswers: ["A"],
  },
  {
    page: 102,
    question:
      "Theo chủ nghĩa duy vật biện chứng, vận động không chỉ là sự thay đổi vị trí trong không gian, mà còn là mọi sự thay đổi và:",
    options: {
      A: "Mọi di chuyển trong thực tế",
      B: "Mọi quá trình diễn ra trong vũ trụ",
      C: "Mọi vận động trong tự nhiên, xã hội",
      D: "Mọi vận động trong xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 102,
    question: "Triết học ra đời vào thời gian nào?",
    options: {
      A: "Thế kỷ II. TCN",
      B: "Thế kỷ VIII - VI TCN",
      C: "Thế kỷ II sau CN",
      D: "Thế kỷ VII - VI TCN",
    },
    correctAnswers: ["B"],
  },
  {
    page: 103,
    question: 'Trước khi triết học Mác ra đời, triết học được "suy tôn" là gì?',
    options: {
      A: "Khoa học nghiên cứu",
      B: "Khoa học của các khoa học",
      C: "Khoa học của toán học",
      D: "Khoa học của tầng lớp quý tộc",
    },
    correctAnswers: ["B"],
  },
  {
    page: 103,
    question: "Đêmôcrit (khoảng 427 -374 trước CN) được xem là?",
    options: {
      A: "Nhà triết học Giáo hội Cổ đại",
      B: "Nhà toán học Hi Lạp Cổ đại",
      C: "Nhà triết học Hi Lạp Cổ đại",
      D: "Nhà thần học Hi Lạp Cổ đại",
    },
    correctAnswers: ["C"],
  },
  {
    page: 103,
    question:
      "Ném một đồng xu có hai mặt đen và trắng lên trời, đồng xu rơi xuống đất và ngửa mắt đen liên trên. Hiện tượng trên gọi là",
    options: {
      A: "Ngẫu nhiên",
      B: "Tất nhiên",
      C: "Vừa tất nhiên vừa ngẫu nhiên",
      D: "Không phải tất nhiên và cũng không phải ngẫu nhiên",
    },
    correctAnswers: ["C"],
  },
  {
    page: 103,
    question: "Triết học trở thành nữ tì của thần học trong giai đoạn nào?",
    options: {
      A: "Ở Tây Âu thời trung cổ",
      B: "Ở Tây Âu thời cổ đại",
      C: "Ở Tây Âu thời cận đại",
      D: "Ở Châu Âu thời hiện đại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 104,
    question:
      "Công ty sản xuất thuốc bảo vệ thực vật muốn bổ nhiệm anh Nguyễn Văn A và chị Trần Thị B làm trưởng phòng quản lý nhân sự. Trong quá trình xem xét, công ty đó đã căn cứ vào năng lực tích lũy trong quá trình làm việc, độ nhạy bén khi xử lý công việc, năng lực phán đoán của Anh A và Chị B... Căn cứ vào ví dụ trên, Anh (Chị) hãy cho biết công ty đó đã vận dụng nội dung nào sau đây để bổ nhiệm nhân sự?",
    options: {
      A: "Nguyên lý về mối liên hệ phổ biến",
      B: "Nguyên lý về sự phát triển",
      C: "Quy luật phủ định của phủ định",
      D: "Quy luật đấu tranh và thống nhất giữa các mặt đối lập",
    },
    correctAnswers: ["B"],
  },
  {
    page: 104,
    question: "Dân chủ được hiểu là gì?",
    options: {
      A: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
      B: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp tư sản cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
      C: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp thống trị cầm quyền; có quá trình ra đời, phát triển từ xã hội chiếm hữu nô lệ",
      D: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp vô sản cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 105,
    question:
      "Toàn bộ những biểu tượng, tình cảm, tâm trạng của quần chúng về tín ngưỡng, tôn giáo tạo thành bộ phận nào sau đây?",
    options: {
      A: "Tâm lý tôn giáo",
      B: "Tổ chức tôn giáo",
      C: "Hành vi tôn giáo",
      D: "Hệ tư tưởng tôn giáo.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 105,
    question:
      'Luận điểm cho rằng "vật hay vật thể là những phức hợp cảm giác" thuộc trường phái triết học nào?',
    options: {
      A: "Chủ nghĩa duy tâm chủ quan.",
      B: "Chủ nghĩa duy tâm khách quan.",
      C: "Chủ nghĩa duy vật siêu hình.",
      D: "Tất cả các đáp án đều đúng.",
    },
    correctAnswers: ["A"],
  },
  {
    page: 105,
    question:
      "Nhận định nào sau đây là sai khi nói về vị trí, vai trò của Triết học Mác - Lênin trong đời sống xã hội và trong sự nghiệp đổi mới ở Việt Nam hiện nay?",
    options: {
      A: "Là thế giới quan khoa học cho hoạt động thực tiễn",
      B: "Là phương pháp luận biện chứng cho nhận thức khoa học",
      C: "Là chìa khóa vạn năng để giải quyết mọi vấn đề",
      D: "Là nền tảng tư tưởng, kim chỉ nam cho hành động",
    },
    correctAnswers: ["C"],
  },
  {
    page: 106,
    question:
      'Trả lời theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? "Nhà nước là hiện tượng vĩnh viễn của lịch sử"',
    options: {
      A: "Đúng. Vì bản chất của con người vốn là tham lam, vị kỷ nên xã hội luôn luôn cần đến quyền lực đặc biệt là nhà nước để điều tiết các quan hệ lợi ích",
      B: "Đúng. Vì đã là một cộng đồng xã hội thì tất yếu phải có sự quản lý và điều tiết chung",
      C: "Sai. Vì nguồn gốc ra đời của nhà nước là do mâu thuẫn giai cấp không thể điều hòa được mà giai cấp không phải là hiện tượng vĩnh viễn của lịch sử",
      D: "Sai. Vì thực tế lịch sử thời nguyên thủy không có tổ chức nhà nước trong kiến trúc thượng tầng của xã hội, còn tương lai của xã hội loài người thế nào thì không thể dự báo chính xác được",
    },
    correctAnswers: ["C"],
  },
  {
    page: 106,
    question:
      "Hình thức sản xuất nào sau đây có vai trò quyết định sự tồn tại và phát triển của xã hội?",
    options: {
      A: "Sản xuất vật chất",
      B: "Sản xuất tinh thần",
      C: "Sản xuất con người",
      D: "Sản xuất xã hội",
    },
    correctAnswers: ["A"],
  },
  {
    page: 106,
    question:
      'Ai là người khẳng định: "Cần phải có sự phân biệt rõ ràng giữa vật chất với tính cách là một phạm trù của triết học"?',
    options: {
      A: "C.Mác",
      B: "Ph.Ăngghen",
      C: "L.Phoiơbắc",
      D: "Immanuel Kant|",
    },
    correctAnswers: ["B"],
  },
  {
    page: 106,
    question: "Nhu cầu ăn, mặc, ở, học tập của con người là:",
    options: {
      A: "Là cái chung",
      B: "Là cái tất yếu",
      C: "Vừa là cái chung vừa là cái tất yếu",
    },
    correctAnswers: ["C"],
  },
  {
    page: 107,
    question:
      "Triết học Mác - Lênin chỉ ra nguồn gốc của sự hình thành và phân chia giai cấp trong xã hội là do đâu?",
    options: {
      A: "Trời định",
      B: "Tài năng",
      C: "Kinh tế",
      D: "Chính quyền",
    },
    correctAnswers: ["C"],
  },
  {
    page: 107,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, điều kiện nào sau đây là tiên quyết, cần thiết và chủ yếu quyết định sự hình thành và phát triển của con người cả về phương diện sinh học và xã hội?",
    options: {
      A: "Lao động",
      B: "Ngôn ngữ",
      C: "Văn hóa",
      D: "Giao tiếp",
    },
    correctAnswers: ["A"],
  },
  {
    page: 107,
    question:
      "Trường phái triết học nào sau đây cho rằng tinh thần khách quan có trước, tồn tại độc lập với giới tự nhiên và con người?",
    options: {
      A: "Duy vật thô sơ",
      B: "Duy ý chí",
      C: "Duy tâm chủ quan",
      D: "Duy tâm khách quan",
    },
    correctAnswers: ["D"],
  },
  {
    page: 107,
    question:
      "Biện chứng là phương pháp xem xét thế giới trong trạng thái nào?",
    options: {
      A: "Bất động, bất biến",
      B: "Luôn vận động, biến đổi và phát triển không ngừng",
      C: "Đứng im",
      D: "Không ngừng thay đổi",
    },
    correctAnswers: ["B"],
  },
  {
    page: 107,
    question:
      "Theo quan điểm duy vật lịch sử, phạm trù nào sau đây ra đời là kết quả của những mâu thuẫn giai cấp không thể điều hòa được?",
    options: {
      A: "Tôn giáo",
      B: "Đảng phái",
      C: "Nhà nước",
      D: "Nhóm xã hội",
    },
    correctAnswers: ["C"],
  },
  {
    page: 108,
    question:
      "Một sinh viên tâm sự với bạn về hoàn cảnh gia đình mình trong 10 năm đổi mới như sau: gia đình trước đây rất khó khăn. Khi bố từ quân đội về hưu có ít tiền, gia đình đầu tư mua máy và thiết bị sản xuất đậu phụ và làm tương bán. May quá, mặt hàng làm ra có thị trường tiêu thụ ngày càng đông. Gia đình còn tận dụng các sản phẩm phụ để nuôi heo. Thế là thu nhập của gia đình tăng dần. đến nay bố tôi đã trở thành một chủ xưởng sản xuất có 20 lao động thuê ngoài. mẹ mình làm trợ lý, mình làm kế toán giúp mẹ. Mặc dù cuộc sống có những lúc khó khăn nhưng gia đình mình đã nỗ lực vượt qua để có cuộc sống sung túc. Nhà mình bây giờ khang trang, đủ tiện nghi sinh hoạt. Phân tích sự việc trên theo bình diện triết học thì vận dụng theo nguyên lý, quy luật nào là phù hợp?",
    options: {
      A: "Quy luật phủ định của phủ định",
      B: "Nguyên lý về mối liên hệ phổ biến",
      C: "Quy luật mâu thuẫn",
      D: "Quy luật lượng - chất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 108,
    question: "Chủ nghĩa duy tâm khách quan có tư tưởng như thế nào?",
    options: {
      A: "Cho rằng đầu óc con người quyết định tất cả hoạt động của con người",
      B: "Cho rằng con người có thể biết được thế giới khi ở trong bốn bức tường trắng",
      C: "Cho rằng ý thức con người chi phối hoạt động của bản thân họ",
      D: "Cho rằng tinh thần khách quan chi phối hoạt động của con người",
    },
    correctAnswers: ["D"],
  },
  {
    page: 109,
    question:
      "Theo quan điểm của triết học Mác - Lênin, cấu trúc của một hình thái kinh tế - xã hội gồm các yếu tố cơ bản hợp thành nào?",
    options: {
      A: "Lĩnh vực vật chất và lĩnh vực tinh thần",
      B: "Cơ sở hạ tầng, kiến trúc thượng tầng, tồn tại xã hội và ý thức xã hội",
      C: "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng",
      D: "Quan hệ sản xuất, cơ sở hạ tầng, cơ cấu kinh tế và kiến trúc thượng tầng",
    },
    correctAnswers: ["C"],
  },
  {
    page: 109,
    question:
      "Theo chủ nghĩa duy vật biện chứng, giữa LLSX và QHSX có mối quan hệ như thế nào với nhau?",
    options: {
      A: "Biện chứng",
      B: "Một chiều",
      C: "Độc lập",
      D: "Tách rời",
    },
    correctAnswers: ["A"],
  },
  {
    page: 109,
    question:
      "..là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố của sự vật đó:",
    options: {
      A: "Kết quả",
      B: "Nguyên nhân",
      C: "Nội dung",
      D: "Hình thức",
    },
    correctAnswers: ["D"],
  },
  {
    page: 109,
    question:
      "Theo quan điểm của chủ nghĩa duy vật lịch sử, thì suy đến cùng, trình độ phát triển của nền sản xuất ra của cải vật chất của xã hội được quyết định bởi trình độ:",
    options: {
      A: "Phát triển của phương thức sử dụng lao động",
      B: "Phát triển của các nguồn lực sử dụng trong quá trình sản xuất",
      C: "Phát triển của lực lượng sản xuất",
      D: "Phát triển của quan hệ sản xuất",
    },
    correctAnswers: ["C"],
  },
  {
    page: 110,
    question:
      "Trong hoạt động thực tiễn, cần khắc phục sự trì trệ, bảo thủ trong việc thực hiện bước nhảy là ý nghĩa phương pháp luận rút ra từ việc nghiên cứu quy luật nào?()",
    options: {
      A: "Quy luật mâu thuẫn",
      B: "Quy luật lượng chất",
      C: "Quy luật tự nhiên",
      D: "Quy luật xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 110,
    question:
      'Câu tục ngữ "Tốt gỗ hơn tốt nước sơn" thể hiện cặp phạm trù nào sau đây của Triết học Mác-Lênin?',
    options: {
      A: "Cái chung, cái riêng",
      B: "Tất nhiên, ngẫu nhiên",
      C: "Nội dung, hình thức",
      D: "Nguyên nhân, kết quả",
    },
    correctAnswers: ["C"],
  },
  {
    page: 110,
    question:
      "Chủ nghĩa duy vật lịch sử cho rằng, trên cơ sở yếu tố nào làm phát sinh những mối quan hệ xã hội khác: chính trị, pháp luật, đạo đức, nghệ thuật, tôn giáo?",
    options: {
      A: "Cơ sở vật chất",
      B: "Lực lượng sản xuất",
      C: "Quan hệ sản xuất",
      D: "Quan hệ xã hội",
    },
    correctAnswers: ["D"],
  },
  {
    page: 110,
    question:
      "Ý nghĩa phương pháp luận rút ra từ việc nghiên cứu cặp phạm trù khả năng - hiện thực là trong thực tế, chúng ta phải dựa vào điều gì sau đây?",
    options: {
      A: "Hiện thực và bỏ qua các khả năng",
      B: "Mối quan hệ giữa khả năng và hiện thực",
      C: "Hiện thực vì khả năng là cái chưa tồn tại",
      D: "Khả năng vì khả năng có thể chứa hiện thực",
    },
    correctAnswers: ["B"],
  },
  {
    page: 111,
    question: "Ai là người đã phủ nhận tính hiện thực khách quan của điện tử?",
    options: {
      A: "E.Makhơ",
      B: "Piêcson",
      C: "Anhxtanh",
      D: "Béccoren",
    },
    correctAnswers: ["A"],
  },
  {
    page: 111,
    question:
      "Sự khác nhau căn bản của chủ nghĩa vật với chủ nghĩa duy tâm về sự thống nhất của thế giới là gì?",
    options: {
      A: "Không thừa nhận tính tồn tại của thế giới",
      B: "Thừa nhận tính tồn tại của thế giới",
      C: "Tất cả đều sai (Giải thích: Thừa nhận tính vật chất của thế giới.)",
      D: "Thừa nhận vật chất và ý thức là bản nguyên của thế giới",
    },
    correctAnswers: ["C"],
  },
  {
    page: 111,
    question:
      "Khi V.I. Lênin phát triển chủ nghĩa Mác trong giai đoạn đế quốc chủ nghĩa, ông đã bổ sung lý luận nào cho phù hợp với bối cảnh xã hội mới? Chọn 2 đáp án.",
    options: {
      A: "Khả năng của cách mạng vô sản chỉ có thể xảy ra đồng thời trên toàn cầu",
      B: "Khả năng cách mạng vô sản có thể xảy ra ở một hoặc một số nước có điều kiện thích hợp",
      C: "Chủ nghĩa đế quốc là giai đoạn phát triển cao nhất và là giai đoạn suy tàn của chủ nghĩa tư bản",
      D: "Chủ nghĩa đế quốc phát triển sẽ làm giảm căng thẳng giữa các quốc gia tư bản, từ đó ổn định xã hội",
    },
    correctAnswers: ["B", "C"],
  },
  {
    page: 111,
    question:
      "Loại hình hoạt động thực tiễn nhằm mục đích cải biến các đối tượng của giới tự nhiên theo nhu cầu tồn tại và phát triển của con người và xã hội là gì?",
    options: {
      A: "Khoa học",
      B: "Sản xuất vật chất",
      C: "Thực nghiệm khoa học",
      D: "Nghiên cứu khoa học",
    },
    correctAnswers: ["B"],
  },
  {
    page: 112,
    question: "Khái niệm quan hệ sản xuất được hiểu như thế nào?",
    options: {
      A: "Mối quan hệ giữa con người với giới tự nhiên",
      B: "Tổng hợp các quan hệ kinh tế giữa con người với con người trong quá trình sản xuất vật chất",
      C: "Mối quan hệ giữa con người với con người trong quá trình lao động",
      D: "Mối quan hệ kinh tế trong quá trình sản xuất và tái sản xuất của xã hội",
    },
    correctAnswers: ["B"],
  },
  {
    page: 112,
    question:
      'Điền vào dấu "... tồn tại khách quan, độc lập với ý thức của con người":',
    options: {
      A: "Tất nhiên và ngẫu nhiên",
      B: "Chỉ có tất nhiên",
      C: "Chỉ có ngẫu nhiên",
      D: "Tất nhiên và ngẫu nhiên đều không",
    },
    correctAnswers: ["A"],
  },
  {
    page: 112,
    question:
      'Theo định nghĩa chung nhất, tồn tại là phạm trù dùng để chỉ tính ... của thế giới xung quanh.... Từ thích hợp trong dấu "..." là gì?',
    options: {
      A: "Có thực/ Con người",
      B: "Có thực chính xác/con người",
      C: "Tâm linh/ Trái đất",
      D: "Chính xác/ Nhận thức",
    },
    correctAnswers: ["A"],
  },
  {
    page: 112,
    question:
      "Theo chủ nghĩa duy vật biện chứng, lao động và ngôn ngữ là sự kích thích chủ yếu dẫn đến các chuyển biến nào trong các chuyển biến sau đây?",
    options: {
      A: "Sự chuyển biến dần bộ óc của loài vượn người thành bộ óc con người",
      B: "Sự chuyển biến dần tâm lý động vật thành ý thức con người",
      C: "Sự chuyển biến hay mã hóa các đối tượng tinh thần phi vật chất thành các ý tưởng vật chất",
      D: "Sự chuyển biến mô hình từ tư duy đến hình ảnh tinh thần",
    },
    correctAnswers: ["B"],
  },
  {
    page: 113,
    question:
      "V.I.Lênin đã định nghĩa phạm trù vật chất với tư cách là một phạm trù triết học bằng cách đem đối lập với phạm trù nào sau đây?",
    options: {
      A: "Phạm trù ý thức",
      B: "Phạm trù thực tiễn",
      C: "Phạm trù nhận thức",
      D: "Phạm trù quy luật",
    },
    correctAnswers: ["A"],
  },
  {
    page: 113,
    question:
      "Quy luật nào là quy luật cơ bản nhất, chi phối, quyết định toàn bộ quá trình vận động và phát triển của lịch sử xã hội loài người?",
    options: {
      A: "Đấu tranh giai cấp",
      B: "Phát triển khoa học và công nghệ",
      C: "Phát triển kinh tế thị trường",
      D: "Quan hệ sản xuất phụ thuộc vào trình độ phát triển của lực lượng sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 113,
    question:
      "Khẳng định nào sau đây là đúng theo quan điểm của triết học Mác?",
    options: {
      A: "Vận động là một thuộc tính bắt buộc để chúng ta phát triển",
      B: "Vận động là một thuộc tính cố hữu và là phương thức tồn tại của vật chất",
      C: "Vận động là một thuộc tính tồn tại của vật chất trong thế giới con người",
      D: "Vận động là vận động tự thân nhưng cần sự giúp đỡ của con người",
    },
    correctAnswers: ["B"],
  },
  {
    page: 113,
    question: "Nền tảng quan hệ giữa cá nhân và xã hội là gì?",
    options: {
      A: "Lợi ích",
      B: "Pháp luật",
      C: "Đạo đức",
      D: "Tình cảm",
    },
    correctAnswers: ["A"],
  },
  {
    page: 114,
    question:
      'Đâu là yếu tố vật chất "trung gian", "truyền dẫn" giữa người lao động và đối tượng lao động trong tiến hành sản xuất?',
    options: {
      A: "Công cụ lao động",
      B: "Cơ sở hạ tầng",
      C: "Phương tiện sản xuất",
      D: "Kỹ năng lao động",
    },
    correctAnswers: ["A"],
  },
  {
    page: 114,
    question:
      "Hệ thống các quan điểm duy vật biện chứng về xã hội, làm rõ nguồn gốc, động lực và những quy luật chung của sự vận động, phát triển của xã hội loài người là gì?",
    options: {
      A: "Chủ nghĩa duy vật lịch sử",
      B: "Lịch sử xã hội",
      C: "Quan điểm lịch sử hiện đại",
      D: "Biện chứng của lịch sử",
    },
    correctAnswers: ["A"],
  },
  {
    page: 114,
    question:
      "Đâu là một trong những trường phái triết học ở Trung Quốc thời cổ đại?",
    options: {
      A: "Thuyết Ngũ hành",
      B: "Thuyết Nguyên tử",
      C: "Phái Vedanta",
      D: "Phái Lokayata",
    },
    correctAnswers: ["A"],
  },
  {
    page: 114,
    question:
      "Sự thay đổi về lượng đạt đến giới hạn nào thì sẽ dẫn đến sự thay đổi về chất?",
    options: {
      A: "Điểm nút",
      B: "Khoảng độ",
      C: "Bước nhảy",
      D: "Mâu thuẫn",
    },
    correctAnswers: ["A"],
  },
  {
    page: 114,
    question:
      "Về hình thức cơ bản, loại chủ nghĩa nào khẳng định mọi sự vật, hiện tượng chỉ là phức hợp những cảm giác của cá nhân, của chủ thể?",
    options: {
      A: "Duy vật siêu hình",
      B: "Duy tâm khách quan",
      C: "Duy tâm chủ quan",
      D: "Duy vật máy móc",
    },
    correctAnswers: ["C"],
  },
  {
    page: 115,
    question:
      '"Muốn xây dựng chủ nghĩa xã hội phải có những con người xã hội chủ nghĩa", theo Hồ Chí Minh con người xã hội chủ nghĩa là vừa:',
    options: {
      A: "Vừa tài vừa trí.",
      B: "Vừa hồng và vừa chuyên.",
      C: "Vừa nhân, lễ nghĩa, trí, tín.",
      D: "Cần, kiệm, liêm, chính, chí công vô tư.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 115,
    question: "Theo V.I.Lênin, vật chất có mấy hình thức tồn tại?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswers: ["B"],
  },
  {
    page: 115,
    question:
      "Chọn câu trả lời sai. Trong một hình thái kinh tế xã hội, lực lượng sản xuất có các vai trò sau đây:",
    options: {
      A: "Là nền tảng vật chất- kỹ thuật của xã hội",
      B: "Tiêu biểu cho bộ mặt xã hội ở mỗi giai đoạn phát triển",
      C: "Là nhân tố, xét đến cùng, quyết định sự hình thành và phát triển của mọi xã hội",
      D: "Thể hiện năng lực chinh phục tự nhiên của con người",
    },
    correctAnswers: ["B"],
  },
  {
    page: 115,
    question:
      "Từ phương diện chính trị và xã hội, nhà nước thực hiện mấy chức năng?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctAnswers: ["A"],
  },
  {
    page: 116,
    question:
      "Trong xã hội nào, với sự tồn tại của cộng đồng thị tộc, bộ lạc, chưa có nhà nước với tư cách là cơ quan quyền lực của giai cấp?",
    options: {
      A: "Phong kiến.",
      B: "Cộng sản nguyên thủy.",
      C: "Chiếm hữu nô lệ.",
      D: "Tư bản chủ nghĩa.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 116,
    question:
      "Nguyên nhân nào dẫn đến việc cộng đồng nhân loại chưa hình thành rõ nét và vấn đề nhân loại chưa được thực sự đặt ra trong xã hội cộng sản nguyên thủy?",
    options: {
      A: "Vì trong xã hội này con người mới tách khỏi giới động vật",
      B: "Vì trong xã hội này trình độ phát triển về mọi mặt còn rất lạc hậu",
      C: "Vì trong xã hội này các cộng đồng người tạo lập được các mối liên hệ rộng rãi",
      D: "Vì trong xã hội này tồn tại chế độ đẳng cấp cực đoan, chế độ phân biệt chủng tộc",
    },
    correctAnswers: ["B"],
  },
  {
    page: 116,
    question:
      "Theo quan điểm của Các Mác, học thuyết của các ông là một học thuyết có tính chất gì?",
    options: {
      A: "Tuyệt đối đúng",
      B: "Hoàn thiện",
      C: "Đóng kín",
      D: "Mở",
    },
    correctAnswers: ["D"],
  },
  {
    page: 116,
    question:
      "Lý luận nhận thức ra đời để trả lời câu hỏi nào dưới đây? (Lựa chọn phương án đúng nhất)",
    options: {
      A: "Con người có phải do thần linh tạo nên hay không.",
      B: "Con người có thể nhận thức được thế giới hay không.",
      C: "Con người là thực thể xã hội - sinh học.",
      D: "Bản nguyên của thế giới là vật chất hay ý thức.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 117,
    question:
      "Khái niệm nào dùng để chỉ khoảng giới hạn trong đó sự thay đổi về lượng chưa dẫn đến sự thay đổi căn bản chất của sự vật ấy?",
    options: {
      A: "Chất",
      B: "Lượng",
      C: "Độ",
      D: "Điểm nút",
    },
    correctAnswers: ["C"],
  },
  {
    page: 117,
    question: "Phủ định siêu hình là sự phủ định như thế nào?",
    options: {
      A: "Làm cho sự vật thay đổi hình thái",
      B: "Làm xuất hiện sự vật mới",
      C: "Tạo ra điều kiện, tiền đề cho sự phát triển",
      D: "Thủ tiêu hoàn toàn sự vật cũ",
    },
    correctAnswers: ["D"],
  },
  {
    page: 117,
    question:
      "Theo quan điểm của các nhà sáng lập chủ nghĩa Mác, hiện tượng tha hóa của con người là một hiện tượng lịch sử đặc thù, chỉ diễn ra trong những xã hội nào và nguyên nhân nào gây nên hiện tượng tha hóa? (lựa chọn hai đáp án)",
    options: {
      A: "Xã hội có sự phân chia giai cấp",
      B: "Xã hội có sự phân chia lãnh thổ và nhà nước",
      C: "Chế độ tư hữu về tư liệu sản xuất không còn",
      D: "Chế độ tư hữu về tư liệu sản xuất",
    },
    correctAnswers: ["A", "D"],
  },
  {
    page: 117,
    question:
      "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây chưa đúng?",
    options: {
      A: "Một nguyên nhân chỉ có thể đưa đến một kết quả",
      B: "Nguyên nhân khác nhau cũng có thể đưa đến kết quả như nhau",
      C: "Nguyên nhân giống nhau trong điều kiện giống nhau luôn luôn đưa đến kết quả như nhau",
      D: "Nguyên nhân khác nhau thì đưa ra kết quả không giống nhau",
    },
    correctAnswers: ["A"],
  },
  {
    page: 118,
    question: "Phép biện chứng duy vật có hai nguyên lý cơ bản là:",
    options: {
      A: "Nguyên lý về mỗi liên hệ khách quan và nguyên lý về mỗi liên hệ chủ quan",
      B: "Nguyên lý về mỗi liên hệ phổ biến và nguyên lý về sự phát triển",
      C: "Nguyên lý về mỗi liên hệ vật chất và nguyên lý về mỗi liên hệ tinh thần.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 118,
    question:
      "Theo V.I.Lênin, đễ có quan niệm đúng, vững chắc về sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên thì cần phải:",
    options: {
      A: "Quy những mối quan hệ xã hội vào những quan hệ sản xuất",
      B: "Quy những quan hệ sản xuất vào các quan hệ chính trị, pháp luật",
      C: "Quy những quan hệ xã hội vào những quan hệ sản xuất và quy những quan hệ sản xuất vào trình độ phát triển của kỹ thuật, công nghệ hiện thời",
      D: "Quy những quan hệ xã hội vào những quan hệ sản xuất và quy những quan hệ sản xuất vào trình độ phát triển của lực lượng sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 118,
    question:
      "Vì sao nói triết học là hạt nhân của thế giới quan? Lựa chọn 3 đáp án đúng.",
    options: {
      A: "Vì bản thân triết học chính là thế giới quan",
      B: "Vì thế giới quan triết học như thế nào sẽ quy định các thế giới quan và các quan niệm khác như thế",
      C: "Vì triết học bao giờ cũng là thành phần quan trọng, đóng vai trò là nhân tố cốt lõi trong các thế giới quan khác",
      D: "Vì triết học luôn luôn ảnh hưởng và chi phối một cách tự giác đối với các loại thế giới quan",
    },
    correctAnswers: ["B", "C", "D"],
  },
  {
    page: 119,
    question: "Đâu là biểu hiện thứ hai của hiện tượng tha hóa con người?",
    options: {
      A: "Quan hệ giữa người với người dẫn mất đạo đức và nhân cách.",
      B: "Quan hệ giữa người với người bị thay thế bởi quan hệ giữa người và vật.",
      C: "Quan hệ giữa người với người bị thay thế bởi tiền với tiền.",
      D: "Quan hệ giữa người với người ngày càng biến chất và vụ lợi.",
    },
    correctAnswers: ["B"],
  },
  {
    page: 119,
    question: "Vấn đề cơ bản của triết học trả lời câu hỏi lớn nào?",
    options: {
      A: "Mặt thứ nhất: giữa vật chất và ý thức cái nào có trước, cái nào có sau, cái nào quyết định cái nào?",
      B: "Mặt thứ hai: con người có khả năng nhận thức được thế giới hay không?",
      C: "Mặt thứ nhất: Khi tìm ra nguyên nhân cuối cùng của sự vận động vật chất là cái quyết định là đúng hay sai?",
      D: "Mặt thứ hai: Con người về cơ bản có thể nhận thức được toàn bộ các sự vật hiện tượng hay không?",
    },
    correctAnswers: ["A", "B"],
  },
  {
    page: 119,
    question:
      "Theo quan niệm duy vật biện chứng về lịch sử thì cơ sở hạ tầng và kiến trúc thượng tầng là hai mặt cơ bản của đời sống xã hội. Cơ sở hạ tầng đóng vai trò gì đối với kiến trúc thượng tầng?",
    options: {
      A: "Chi phối",
      B: "Chủ đạo",
      C: "Quyết định",
      D: "Thống trị",
    },
    correctAnswers: ["C"],
  },
  {
    page: 120,
    question: "Lý luận hình thái kinh tế - xã hội là cơ sở khoa học để:",
    options: {
      A: "Giải thích đầy đủ mọi hiện tượng xã hội",
      B: "Giải thích chính xác và đầy đủ mọi hiện tượng xã hội",
      C: "Xác lập phương pháp luận khoa học chung nhất để giải thích các hiện tượng xã hội",
      D: 'Xác lập phương pháp luận chung nhất ở tầm "duy nhất khoa học" cho mọi quá trình nghiên cứu',
    },
    correctAnswers: ["C"],
  },
  {
    page: 120,
    question:
      'Điền vào chỗ trống: "... là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác"',
    options: {
      A: "Vật chất",
      B: "Ý thức",
      C: "Năng lực",
      D: "Thế giới",
    },
    correctAnswers: ["A"],
  },
  {
    page: 120,
    question:
      '"Triết học" là thuật ngữ được sử dụng lần đầu tiên trong trường phái nào?',
    options: {
      A: "Socrates",
      B: "Heraclitus",
      C: "Thales",
      D: "C. Mac",
    },
    correctAnswers: ["A"],
  },
  {
    page: 120,
    question: "C.Mác và Ph.Ăngghen là người nước nào?",
    options: {
      A: "Đức",
      B: "Áo",
      C: "Liên Xô",
      D: "Tiệp Khắc",
    },
    correctAnswers: ["A"],
  },
  {
    page: 121,
    question:
      "Những phát minh nào của khoa học tự nhiên đã ảnh hưởng đến sự phát triển của chủ nghĩa duy vật biện chứng?",
    options: {
      A: "Định luật bảo toàn và chuyển hóa năng lượng",
      B: "Thuyết tế bào",
      C: "Thuyết tiến hóa của Charles Darwin",
      D: "Lý thuyết về tương đối của Albert Einstein",
    },
    correctAnswers: ["A", "B", "C"],
  },
  {
    page: 121,
    question: "Thế giới quan duy vật biện chứng bao gồm:",
    options: {
      A: "Tri thức khoa học, niềm tin khoa học và lý tưởng cách mạng",
      B: "Tri thức khoa học, tiềm tin khoa học và hệ giá trị cộng đồng",
      C: "Tri thức khoa học, tình cảm khoa học và lý tưởng khoa học",
      D: "Tri thức khoa học, niềm tin khoa học và lý tưởng khoa học",
    },
    correctAnswers: ["A"],
  },
  {
    page: 121,
    question:
      "Cái bàn cái ghế là vật chất. Đây là quan niệm của các nhà triết học thời kỳ nào?",
    options: {
      A: "Duy vật chất phác thời cổ đại",
      B: "Duy tâm chất phác thời cổ đại",
      C: "Duy vật trung đại",
      D: "Duy tâm trung đại",
    },
    correctAnswers: ["A"],
  },
  {
    page: 121,
    question:
      "Phép biện chứng là phương pháp nghiên cứu, khái quát thế giới thành hệ thống các nguyên lý, quy luật là phép biện chứng gì?",
    options: {
      A: "Biện chứng chủ quan",
      B: "Biện chứng khách quan",
      C: "Siêu hình học",
      D: "Ý muốn con người",
    },
    correctAnswers: ["A"],
  },
  {
    page: 122,
    question:
      "Quan điểm toàn diện đặt ra yêu cầu phải xem xét tất cả các mối liên hệ của sự vật để làm gì?",
    options: {
      A: "Chống quan điểm siêu hình",
      B: "Chống quan điểm duy tâm",
      C: "Chống quan điểm chủ nghĩa chiết trung và thuyết ngụy biện",
      D: "Đề phòng cho chúng ta khỏi phạm sai lầm và sự cứng nhắc",
    },
    correctAnswers: ["D"],
  },
  {
    page: 122,
    question:
      "Theo quan điểm của triết học Mác - Lênin, trong ba mặt của quan hệ sản xuất thì mặt nào quyết định nhất?",
    options: {
      A: "Quan hệ tổ chức, quản lý",
      B: "Tắt cả các quan hệ có vị trí ngang nhau",
      C: "Quan hệ phân phối sản phẩm",
      D: "Quan hệ sở hữu tư liệu sản xuất",
    },
    correctAnswers: ["D"],
  },
  {
    page: 122,
    question:
      "“Phát triển diễn ra theo con đường tròn khép kín, là sự lặp lại đơn thuần cái cũ”. Luận điểm này thuộc lập trường triết học nào?",
    options: {
      A: "Quan điểm duy vật biện chứng",
      B: "Quan điểm siêu hình",
      C: "Quan điểm biện chứng duy tâm",
      D: "Quan điểm duy tâm khách quan",
    },
    correctAnswers: ["B"],
  },
  {
    page: 122,
    question: "Con chó, con mèo có ý thức không?",
    options: {
      A: "Có. Vì nó được con người dạy",
      B: "Không. Vì nó không được dạy",
      C: "Có. Vì nó được rèn luyện qua quá trình tiếp xúc với con người",
      D: "Không. Vì nó chỉ có bản năng",
    },
    correctAnswers: ["D"],
  },
  {
    page: 123,
    question:
      "Theo chủ nghĩa duy vật lịch sử, sự tác động trở lại đối với tồn tại xã hội của các hình thái ý thức xã hội mạnh hay yếu còn phụ thuộc vào yếu tố nào? Chọn 3 đáp án đúng.",
    options: {
      A: "Những điều kiện lịch sử cụ thể",
      B: "Vai trò lịch sử của giai cấp đại diện cho ngọn cờ tư tưởng đó",
      C: "Trình độ phản ánh và sức lan tỏa của ý thức đối với các nhu cầu khác nhau của sự phát triển xã hội",
      D: "Các quan hệ chính trị vốn là cơ sở hình thành các hình thái ý thức xã hội",
    },
    correctAnswers: ["A", "B", "C"],
  },
];
