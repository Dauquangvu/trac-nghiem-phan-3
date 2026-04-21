// ============================================================
// DỮ LIỆU MẪU — PHỤ LỤC NHẬN THỨC CHÍNH TRỊ SƯ ĐOÀN 324
// ============================================================
const SAMPLE_QUESTIONS = [
  {
    id: 'q1', title: 'Mục tiêu & chức năng QĐNDVN',
    question: 'Mục tiêu lý tưởng chiến đấu, 3 chức năng và 5 nhiệm vụ cơ bản của Quân đội nhân dân Việt Nam là gì?',
    hint: 'Nhớ: 1 mục tiêu, 3 chức năng (đội quân...), 5 nhiệm vụ',
    answer: `Mục tiêu lý tưởng chiến đấu: Vì độc lập dân tộc và chủ nghĩa xã hội.

03 chức năng cơ bản:
- Đội quân chiến đấu
- Đội quân công tác
- Đội quân lao động sản xuất

05 nhiệm vụ:
- Sẵn sàng chiến đấu và chiến đấu thắng lợi
- Huấn luyện, xây dựng đơn vị vững mạnh toàn diện "Mẫu mực, tiêu biểu"
- Tích cực tham gia lao động sản xuất, phát triển kinh tế - xã hội
- Thực hiện tốt công tác tuyên truyền, vận động nhân dân
- Đối ngoại quốc phòng và tham gia làm nhiệm vụ gìn giữ hòa bình Liên hợp quốc`,
    keywords: ['độc lập dân tộc', 'chủ nghĩa xã hội', 'đội quân chiến đấu', 'đội quân công tác', 'lao động sản xuất', 'sẵn sàng chiến đấu', 'vận động nhân dân', 'gìn giữ hòa bình'],
    difficulty: 'medium',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q2', title: 'Đối tác, đối tượng của Việt Nam',
    question: 'Quan điểm của Đảng, Nhà nước ta về đối tác và đối tượng trong tình hình mới là gì?',
    hint: 'Đối tác: ai tôn trọng... | Đối tượng: ai có âm mưu chống phá...',
    answer: `Đối tác: Là những ai tôn trọng độc lập, chủ quyền, thiết lập và mở rộng quan hệ hữu nghị, hợp tác bình đẳng, cùng có lợi với Việt Nam. Việt Nam là bạn, là đối tác tin cậy, thành viên có trách nhiệm trong cộng đồng quốc tế vì hòa bình, hợp tác và phát triển.

Đối tượng: Là những thế lực có âm mưu và hành động chống phá mục tiêu của nước ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc. Đó là âm mưu, hành động gây chiến tranh xâm lược; "diễn biến hòa bình", bạo loạn lật đổ chế độ; xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ bằng phương thức vũ trang hoặc phi vũ trang.`,
    keywords: ['tôn trọng độc lập', 'hợp tác bình đẳng', 'cùng có lợi', 'âm mưu chống phá', 'diễn biến hòa bình', 'bạo loạn lật đổ', 'vũ trang hoặc phi vũ trang'],
    difficulty: 'medium',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q3', title: 'Chiến lược "Diễn biến hòa bình"',
    question: 'Chiến lược "Diễn biến hòa bình" là gì? Bản chất "Phi chính trị hóa Quân đội" là gì?',
    hint: 'Chiến lược để lật đổ từ bên trong | Phi chính trị = thủ đoạn trong DBHB',
    answer: `Chiến lược "Diễn biến hòa bình": Là chiến lược cơ bản nhằm lật đổ chế độ chính trị của các nước tiến bộ, trước hết là các nước XHCN từ bên trong, chủ yếu bằng các biện pháp phi quân sự do chủ nghĩa đế quốc và các thế lực phản động tiến hành.

Phi chính trị hóa Quân đội: Là một thủ đoạn trong chiến lược "diễn biến hòa bình", nhằm loại bỏ sự lãnh đạo của Đảng đối với Quân đội, làm cho Quân đội mất dần bản chất giai cấp công nhân, tính nhân dân, tính dân tộc; biến chất, xa rời chính trị vô sản, chuyển sang chính trị tư sản, phản bội lại lợi ích của giai cấp, dân tộc và nhân dân.`,
    keywords: ['lật đổ từ bên trong', 'biện pháp phi quân sự', 'loại bỏ sự lãnh đạo của Đảng', 'bản chất giai cấp công nhân', 'tính nhân dân', 'tính dân tộc'],
    difficulty: 'hard',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q4', title: '5 tình huống chiến đấu bảo vệ đơn vị',
    question: 'Nêu 5 tình huống chiến đấu bảo vệ cơ quan, đơn vị?',
    hint: 'Kẻ gian đột nhập | Tụ tập gây áp lực | Phương tiện bay | Vật thể lạ | Lực lượng phản động',
    answer: `Tình huống 1: Kẻ gian đột nhập vào khu vực đóng của đơn vị.

Tình huống 2: Tụ tập đông người gây áp lực ở cổng của đơn vị.

Tình huống 3: Các phương tiện bay xâm nhập vào khu vực đóng quân của đơn vị (không có trong kế hoạch hoặc không thông báo).

Tình huống 4: Phát hiện vật thể lạ, chất cháy, chất nổ,... trong khu vực đóng quân của đơn vị.

Tình huống 5: Lực lượng phản động có vũ trang đột nhập, tiến công vào đơn vị.`,
    keywords: ['kẻ gian đột nhập', 'tụ tập đông người', 'phương tiện bay', 'vật thể lạ', 'chất nổ', 'lực lượng phản động có vũ trang'],
    difficulty: 'easy',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q5', title: '2 kiên định, 2 đẩy mạnh, 2 ngăn ngừa, 5 vững',
    question: 'Nêu "2 kiên định", "2 đẩy mạnh", "2 ngăn ngừa" và phương châm "5 vững" theo chỉ đạo của Tổng Bí thư Tô Lâm?',
    hint: 'Kiên định: đường lối + chính trị | Đẩy mạnh: hiện đại + đối ngoại | Ngăn ngừa: chiến tranh + suy thoái | 5 vững: CT, KL, CN, NT, ĐS',
    answer: `2 kiên định:
- Kiên định đường lối quân sự, quốc phòng của Đảng
- Kiên định xây dựng Quân đội vững mạnh về chính trị

2 đẩy mạnh:
- Đẩy mạnh xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại
- Đẩy mạnh hội nhập quốc tế và đối ngoại quốc phòng

2 ngăn ngừa:
- Ngăn ngừa các nguy cơ chiến tranh, xung đột
- Ngăn ngừa mọi biểu hiện suy thoái về tư tưởng chính trị, đạo đức, lối sống, "tự diễn biến", "tự chuyển hóa"

5 vững: Chính trị vững — Kỷ luật vững — Công nghệ vững — Nghệ thuật quân sự vững — Đời sống bộ đội vững.`,
    keywords: ['đường lối quân sự', 'vững mạnh về chính trị', 'chính quy tinh nhuệ hiện đại', 'hội nhập quốc tế', 'ngăn ngừa chiến tranh', 'suy thoái tư tưởng', '5 vững'],
    difficulty: 'hard',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q6', title: '3 Tiên phong, 2 xung kích, 2 sẵn sàng',
    question: 'Phong trào "3 Tiên phong quyết thắng" gắn với "2 xung kích, 2 sẵn sàng" trong Thanh niên Quân đội?',
    hint: 'Tiên phong: xây dựng QĐ + KHCN + văn hóa | Xung kích: nhiệm vụ CT + phong trào | Sẵn sàng: nhiệm vụ khó + vùng xa',
    answer: `3 Tiên phong quyết thắng:
- Tiên phong xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, hiện đại
- Tiên phong phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số
- Tiên phong giữ gìn, phát huy giá trị văn hóa "Bộ đội Cụ Hồ" thời kỳ mới

2 xung kích:
- Xung kích thực hiện thắng lợi nhiệm vụ chính trị của Quân đội
- Xung kích thực hiện thắng lợi các phong trào hành động cách mạng của thanh niên

2 sẵn sàng:
- Sẵn sàng thực hiện nhiệm vụ khó, nhiệm vụ mới
- Sẵn sàng đến vùng sâu, vùng xa, biên giới, hải đảo, vùng khó khăn`,
    keywords: ['tiên phong xây dựng quân đội', 'khoa học công nghệ', 'bộ đội cụ hồ', 'xung kích nhiệm vụ chính trị', 'sẵn sàng nhiệm vụ khó', 'biên giới hải đảo'],
    difficulty: 'medium',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q7', title: 'Truyền thống Sư đoàn 324',
    question: 'Sư đoàn 324 thành lập ngày nào, ở đâu và 12 chữ vàng truyền thống là gì?',
    hint: '01/7/1955 | Tĩnh Gia - Thanh Hóa | 12 chữ vàng',
    answer: `Thành lập: Ngày 01/7/1955 tại xã Triêu Dương, huyện Tĩnh Gia, tỉnh Thanh Hóa (nay là Phường Hải Lĩnh, tỉnh Thanh Hóa).

12 chữ vàng truyền thống: "Trung dũng, kiên cường, liên tục tiến công, đoàn kết, chiến thắng".`,
    keywords: ['01/7/1955', 'Triêu Dương', 'Tĩnh Gia', 'Thanh Hóa', 'trung dũng kiên cường', 'liên tục tiến công', 'đoàn kết chiến thắng'],
    difficulty: 'easy',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
  {
    id: 'q8', title: 'Các nhiệm vụ trong SSCĐ',
    question: 'Nêu các nhiệm vụ A, A2, A3, A4 và nhiệm vụ C trong sẵn sàng chiến đấu?',
    hint: 'A: bảo vệ TQ | A2: ANCT | A3: biên giới | A4: hỏa lực | C: giúp Lào',
    answer: `Nhiệm vụ A: Nhiệm vụ bảo vệ Tổ Quốc Việt Nam XHCN.
Nhiệm vụ A2: Nhiệm vụ bảo vệ ANCT, bảo vệ chế độ XHCN.
Nhiệm vụ A3: Nhiệm vụ bảo vệ biên giới, biển đảo.
Nhiệm vụ A4: Nhiệm vụ phòng tránh đánh trả địch tiến công bằng hỏa lực.
Nhiệm vụ C: Giúp bạn Lào thực hiện nhiệm vụ trên đất bạn Lào.`,
    keywords: ['bảo vệ tổ quốc', 'ANCT', 'biên giới biển đảo', 'phòng tránh hỏa lực', 'giúp bạn Lào'],
    difficulty: 'easy',
    interval: 1, easeFactor: 2.5, lastReviewed: null, goodCount: 0, totalCount: 0,
  },
];

// ============================================================
// STATE
// ============================================================
let questions = [];
let currentPage = 'dashboard';
let editingId = null;
let selectedDiff = 'medium';

// Study
let studyQueue = [];
let studyIndex = 0;
let sessionStats = { good: 0, partial: 0, bad: 0 };

// Write
let writeQueue = [];
let writeIndex = 0;

// Flash
let flashQueue = [];
let flashIndex = 0;

// ============================================================
// INIT
// ============================================================
window.onload = function () {
  loadData();
  if (questions.length === 0) {
    questions = SAMPLE_QUESTIONS.map(q => ({ ...q }));
    saveData();
  }
  renderDashboard();
  drawChart();
};

function loadData() {
  try {
    const raw = localStorage.getItem('onthi_questions');
    questions = raw ? JSON.parse(raw) : [];
  } catch (e) { questions = []; }
}

function saveData() {
  localStorage.setItem('onthi_questions', JSON.stringify(questions));
}

// ============================================================
// NAVIGATION
// ============================================================
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === page);
  });
  document.getElementById(`page-${page}`).classList.add('active');

  const titles = { dashboard: 'Dashboard', study: 'Nhớ ý', write: 'Luyện viết', flashcard: 'Flashcard', manage: 'Quản lý' };
  document.getElementById('topbarTitle').textContent = titles[page] || page;

  closeSidebar();

  if (page === 'dashboard')  { renderDashboard(); drawChart(); }
  if (page === 'study')      initStudy();
  if (page === 'write')      initWrite();
  if (page === 'flashcard')  initFlash();
  if (page === 'manage')     renderManage();
}

// ============================================================
// SIDEBAR
// ============================================================
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

document.getElementById('sidebarClose').onclick = closeSidebar;

// ============================================================
// DARK MODE
// ============================================================
function toggleDark() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

// ============================================================
// SPACED REPETITION
// ============================================================
function getDueQuestions() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return questions.filter(q => {
    if (!q.lastReviewed) return true;
    const next = new Date(q.lastReviewed);
    next.setDate(next.getDate() + (q.interval || 1));
    next.setHours(0, 0, 0, 0);
    return next <= today;
  });
}

function updateSR(q, rating) {
  // rating: 0=bad, 1=partial, 2=good
  q.totalCount = (q.totalCount || 0) + 1;
  q.lastReviewed = new Date().toISOString();

  if (rating === 2) {
    q.goodCount = (q.goodCount || 0) + 1;
    q.easeFactor = Math.max(1.3, (q.easeFactor || 2.5) + 0.1);
    q.interval = Math.round((q.interval || 1) * q.easeFactor);
  } else if (rating === 1) {
    q.easeFactor = Math.max(1.3, (q.easeFactor || 2.5) - 0.15);
    q.interval = Math.max(1, Math.round((q.interval || 1) * 0.7));
  } else {
    q.easeFactor = Math.max(1.3, (q.easeFactor || 2.5) - 0.3);
    q.interval = 1;
  }
  saveData();
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const due = getDueQuestions();
  document.getElementById('statTotal').textContent = questions.length;
  document.getElementById('statDue').textContent = due.length;
  document.getElementById('badgeToday').textContent = `${due.length} câu hôm nay`;

  const withReview = questions.filter(q => q.totalCount > 0);
  const goodRate = withReview.length
    ? Math.round(withReview.reduce((s, q) => s + (q.goodCount / q.totalCount), 0) / withReview.length * 100)
    : 0;
  document.getElementById('statGood').textContent = goodRate + '%';
  document.getElementById('statStreak').textContent = getStreak();

  const dueList = document.getElementById('dueList');
  if (due.length === 0) {
    dueList.innerHTML = `<div style="color:var(--text3);font-size:13px;padding:12px 0">🎉 Không có câu nào cần ôn hôm nay!</div>`;
  } else {
    dueList.innerHTML = due.slice(0, 6).map(q =>
      `<div class="due-item" onclick="navigate('study')">${q.title}</div>`
    ).join('');
  }
}

function getStreak() {
  try {
    const s = localStorage.getItem('onthi_streak');
    const data = s ? JSON.parse(s) : { streak: 0, lastDate: null };
    const today = new Date().toDateString();
    if (data.lastDate === today) return data.streak;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (data.lastDate === yesterday) return data.streak;
    return 0;
  } catch { return 0; }
}

function updateStreak() {
  try {
    const s = localStorage.getItem('onthi_streak');
    const data = s ? JSON.parse(s) : { streak: 0, lastDate: null };
    const today = new Date().toDateString();
    if (data.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    data.streak = data.lastDate === yesterday ? data.streak + 1 : 1;
    data.lastDate = today;
    localStorage.setItem('onthi_streak', JSON.stringify(data));
  } catch {}
}

function drawChart() {
  const canvas = document.getElementById('chartDifficulty');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const easy   = questions.filter(q => q.difficulty === 'easy').length;
  const medium = questions.filter(q => q.difficulty === 'medium').length;
  const hard   = questions.filter(q => q.difficulty === 'hard').length;
  const total  = questions.length || 1;

  canvas.width = canvas.offsetWidth || 300;
  canvas.height = 180;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const bars = [
    { label: 'Dễ',        val: easy,   color: '#3dd68c' },
    { label: 'Trung bình', val: medium, color: '#f5a623' },
    { label: 'Khó',        val: hard,   color: '#f04438' },
  ];

  const barW = 60, gap = (w - bars.length * barW) / (bars.length + 1);
  const maxVal = Math.max(...bars.map(b => b.val), 1);

  bars.forEach((b, i) => {
    const x = gap + i * (barW + gap);
    const bh = Math.max(4, (b.val / maxVal) * (h - 50));
    const y = h - 30 - bh;

    // Bar
    ctx.fillStyle = b.color + '33';
    ctx.beginPath();
    ctx.roundRect(x, y, barW, bh, 6);
    ctx.fill();

    ctx.fillStyle = b.color;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, 4, 2);
    ctx.fill();

    // Label
    ctx.fillStyle = '#8888a0';
    ctx.font = '11px Sora, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(b.label, x + barW / 2, h - 8);

    // Value
    ctx.fillStyle = b.color;
    ctx.font = 'bold 14px IBM Plex Mono, monospace';
    ctx.fillText(b.val, x + barW / 2, y - 6);
  });
}

// ============================================================
// STUDY (Active Recall)
// ============================================================
function initStudy() {
  const filter = document.getElementById('studyFilter').value;
  let pool = [...questions];

  if (filter === 'due')    pool = getDueQuestions();
  else if (filter !== 'all') pool = questions.filter(q => q.difficulty === filter);

  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  studyQueue = pool;
  studyIndex = 0;
  sessionStats = { good: 0, partial: 0, bad: 0 };

  const emptyEl  = document.getElementById('studyEmpty');
  const cardEl   = document.getElementById('studyCard');
  const doneEl   = document.getElementById('studyDone');
  const progEl   = document.getElementById('studyProgress');

  doneEl.style.display = 'none';

  if (studyQueue.length === 0) {
    emptyEl.style.display = 'flex';
    cardEl.style.display = 'none';
    progEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  cardEl.style.display = 'block';
  progEl.style.display = 'flex';
  showStudyCard();
}

function showStudyCard() {
  if (studyIndex >= studyQueue.length) {
    showStudyDone();
    return;
  }
  const q = studyQueue[studyIndex];
  document.getElementById('studyDiff').textContent = diffLabel(q.difficulty);
  document.getElementById('studyDiff').className = `diff-badge diff-${q.difficulty}`;
  document.getElementById('studyNum').textContent = `${studyIndex + 1} / ${studyQueue.length}`;
  document.getElementById('studyQuestion').textContent = q.question;
  document.getElementById('studyHint').textContent = q.hint || '';
  document.getElementById('studyHint').style.display = 'none';
  document.getElementById('studyAnswer').textContent = q.answer;

  // Keywords
  const kwEl = document.getElementById('studyKeywords');
  kwEl.innerHTML = (q.keywords || []).map(k =>
    `<span class="keyword-tag">${k}</span>`
  ).join('');

  document.getElementById('answerBlock').style.display = 'none';
  document.getElementById('revealBtn').style.display = 'block';
  document.getElementById('studyHintRow').style.display = q.hint ? 'block' : 'none';

  // Progress
  const pct = (studyIndex / studyQueue.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${studyIndex} / ${studyQueue.length}`;
}

function toggleHint() {
  const h = document.getElementById('studyHint');
  h.style.display = h.style.display === 'none' ? 'block' : 'none';
}

function revealAnswer() {
  document.getElementById('answerBlock').style.display = 'block';
  document.getElementById('revealBtn').style.display = 'none';
}

function rate(rating) {
  const q = studyQueue[studyIndex];
  const orig = questions.find(x => x.id === q.id);
  if (orig) updateSR(orig, rating);
  if (rating === 2) sessionStats.good++;
  else if (rating === 1) sessionStats.partial++;
  else sessionStats.bad++;

  updateStreak();
  studyIndex++;
  showStudyCard();
}

function showStudyDone() {
  document.getElementById('studyCard').style.display = 'none';
  document.getElementById('studyDone').style.display = 'block';
  document.getElementById('studyProgress').style.display = 'none';
  const total = sessionStats.good + sessionStats.partial + sessionStats.bad;
  document.getElementById('doneStats').innerHTML =
    `✅ Nhớ tốt: <strong>${sessionStats.good}</strong> &nbsp; ⚠️ Nhớ một phần: <strong>${sessionStats.partial}</strong> &nbsp; ❌ Không nhớ: <strong>${sessionStats.bad}</strong><br>Tổng: ${total} câu`;
  renderDashboard();
}

// ============================================================
// WRITE (Luyện viết)
// ============================================================
function initWrite() {
  const filter = document.getElementById('writeFilter').value;
  let pool = filter === 'all' ? [...questions] : questions.filter(q => q.difficulty === filter);

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  writeQueue = pool;
  writeIndex = 0;
  showWriteCard();
}

function showWriteCard() {
  const emptyEl = document.getElementById('writeEmpty');
  const cardEl  = document.getElementById('writeCard');

  if (writeQueue.length === 0) {
    emptyEl.style.display = 'flex';
    cardEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  cardEl.style.display = 'block';

  const q = writeQueue[writeIndex % writeQueue.length];
  document.getElementById('writeDiff').textContent = diffLabel(q.difficulty);
  document.getElementById('writeDiff').className = `diff-badge diff-${q.difficulty}`;
  document.getElementById('writeTitle').textContent = q.title;
  document.getElementById('writeQuestion').textContent = q.question;
  document.getElementById('writeInput').value = '';
  document.getElementById('writeHint').textContent = q.hint || '';
  document.getElementById('writeHint').style.display = 'none';
  document.getElementById('writeInputArea').style.display = 'block';
  document.getElementById('writeResult').style.display = 'none';
}

function toggleWriteHint() {
  const h = document.getElementById('writeHint');
  h.style.display = h.style.display === 'none' ? 'block' : 'none';
}

function checkWrite() {
  const userText = document.getElementById('writeInput').value.trim();
  if (!userText) { showToast('⚠️ Hãy viết câu trả lời trước!'); return; }

  const q = writeQueue[writeIndex % writeQueue.length];
  document.getElementById('userAnswerDisplay').textContent = userText;
  document.getElementById('standardAnswer').textContent = q.answer;

  // Keyword check
  const userLower = userText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const tags = (q.keywords || []).map(kw => {
    const kwNorm = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const found = userLower.includes(kwNorm.split(' ')[0]);
    return `<span class="kw-hit ${found ? 'kw-found' : 'kw-missing'}">${found ? '✓' : '✗'} ${kw}</span>`;
  }).join('');

  const found = (q.keywords || []).filter(kw => {
    const kwNorm = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return userLower.includes(kwNorm.split(' ')[0]);
  }).length;

  document.getElementById('keywordCheck').innerHTML = `
    <div class="kw-title">Từ khóa đã đạt: ${found}/${(q.keywords||[]).length}</div>
    <div class="kw-tags">${tags}</div>
  `;

  document.getElementById('writeInputArea').style.display = 'none';
  document.getElementById('writeResult').style.display = 'block';
}

function nextWrite() {
  writeIndex++;
  showWriteCard();
}

function retryWrite() {
  document.getElementById('writeInput').value = '';
  document.getElementById('writeInputArea').style.display = 'block';
  document.getElementById('writeResult').style.display = 'none';
}

// ============================================================
// FLASHCARD
// ============================================================
function initFlash() {
  const filter = document.getElementById('flashFilter').value;
  let pool = filter === 'all' ? [...questions] : questions.filter(q => q.difficulty === filter);

  flashQueue = pool;
  flashIndex = 0;
  showFlashCard();
}

function showFlashCard() {
  const emptyEl = document.getElementById('flashEmpty');
  const areaEl  = document.getElementById('flashArea');

  if (flashQueue.length === 0) {
    emptyEl.style.display = 'flex';
    areaEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  areaEl.style.display = 'block';

  const q = flashQueue[flashIndex];
  document.getElementById('flashFront').textContent = q.question;
  document.getElementById('flashBack').textContent = q.answer;
  document.getElementById('flashKeywords').innerHTML = (q.keywords || []).map(k =>
    `<span class="keyword-tag">${k}</span>`
  ).join('');

  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('flashCounter').textContent = `${flashIndex + 1} / ${flashQueue.length}`;
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function flashPrev() {
  flashIndex = (flashIndex - 1 + flashQueue.length) % flashQueue.length;
  showFlashCard();
}

function flashNext() {
  flashIndex = (flashIndex + 1) % flashQueue.length;
  showFlashCard();
}

// ============================================================
// MANAGE
// ============================================================
function renderManage() {
  const search = (document.getElementById('searchInput').value || '').toLowerCase();
  const diff   = document.getElementById('filterDiff').value;

  let list = [...questions];
  if (search) list = list.filter(q =>
    q.title.toLowerCase().includes(search) ||
    q.question.toLowerCase().includes(search)
  );
  if (diff) list = list.filter(q => q.difficulty === diff);

  document.getElementById('manageCount').textContent = `${questions.length} câu hỏi`;

  const el = document.getElementById('questionList');
  if (list.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">◈</div><div>Không tìm thấy câu hỏi nào</div></div>`;
    return;
  }

  el.innerHTML = list.map(q => `
    <div class="q-item">
      <div class="q-body">
        <div class="q-title">${escHtml(q.title)}</div>
        <div class="q-question">${escHtml(q.question)}</div>
        <div class="q-meta">
          <span class="diff-badge diff-${q.difficulty}">${diffLabel(q.difficulty)}</span>
          <span class="q-interval">Ôn sau ${q.interval || 1} ngày</span>
          ${q.totalCount > 0 ? `<span class="q-interval">✅ ${Math.round((q.goodCount||0)/q.totalCount*100)}% nhớ tốt</span>` : ''}
        </div>
      </div>
      <div class="q-actions">
        <button class="q-btn" onclick="editQuestion('${q.id}')">✏️ Sửa</button>
        <button class="q-btn del" onclick="deleteQuestion('${q.id}')">🗑️</button>
      </div>
    </div>
  `).join('');
}

// ============================================================
// MODAL
// ============================================================
function openModal(id) {
  editingId = id || null;
  const modal = document.getElementById('modalOverlay');
  document.getElementById('modalTitle').textContent = editingId ? 'Sửa câu hỏi' : 'Thêm câu hỏi';
  selectedDiff = 'medium';

  if (editingId) {
    const q = questions.find(x => x.id === editingId);
    if (q) {
      document.getElementById('fTitle').value    = q.title;
      document.getElementById('fQuestion').value = q.question;
      document.getElementById('fHint').value     = q.hint || '';
      document.getElementById('fAnswer').value   = q.answer;
      document.getElementById('fKeywords').value = (q.keywords || []).join('\n');
      selectedDiff = q.difficulty || 'medium';
    }
  } else {
    document.getElementById('fTitle').value    = '';
    document.getElementById('fQuestion').value = '';
    document.getElementById('fHint').value     = '';
    document.getElementById('fAnswer').value   = '';
    document.getElementById('fKeywords').value = '';
  }

  document.querySelectorAll('.diff-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.val === selectedDiff);
  });

  modal.classList.add('show');
}

function editQuestion(id) { openModal(id); }

function selectDiff(val) {
  selectedDiff = val;
  document.querySelectorAll('.diff-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.val === val);
  });
}

function saveQuestion() {
  const title    = document.getElementById('fTitle').value.trim();
  const question = document.getElementById('fQuestion').value.trim();
  const answer   = document.getElementById('fAnswer').value.trim();

  if (!title || !question || !answer) {
    showToast('⚠️ Vui lòng điền đầy đủ tiêu đề, câu hỏi và đáp án!');
    return;
  }

  const keywords = document.getElementById('fKeywords').value
    .split('\n').map(k => k.trim()).filter(Boolean);
  const hint = document.getElementById('fHint').value.trim();

  if (editingId) {
    const idx = questions.findIndex(x => x.id === editingId);
    if (idx !== -1) {
      questions[idx] = { ...questions[idx], title, question, hint, answer, keywords, difficulty: selectedDiff };
    }
    showToast('✅ Đã cập nhật câu hỏi!');
  } else {
    questions.push({
      id: 'q' + Date.now(),
      title, question, hint, answer, keywords,
      difficulty: selectedDiff,
      interval: 1, easeFactor: 2.5,
      lastReviewed: null, goodCount: 0, totalCount: 0,
    });
    showToast('✅ Đã thêm câu hỏi mới!');
  }

  saveData();
  closeModal();
  renderManage();
  renderDashboard();
  drawChart();
}

function deleteQuestion(id) {
  if (!confirm('Xóa câu hỏi này?')) return;
  questions = questions.filter(q => q.id !== id);
  saveData();
  renderManage();
  renderDashboard();
  drawChart();
  showToast('🗑️ Đã xóa câu hỏi');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  editingId = null;
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

// ============================================================
// IMPORT / EXPORT
// ============================================================
function exportData() {
  const blob = new Blob([JSON.stringify(questions, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `onthi_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ Đã xuất dữ liệu!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error('invalid');
      let added = 0;
      imported.forEach(q => {
        if (!questions.find(x => x.id === q.id)) {
          questions.push(q);
          added++;
        }
      });
      saveData();
      renderManage();
      renderDashboard();
      drawChart();
      showToast(`✅ Đã nhập ${added} câu hỏi mới!`);
    } catch {
      showToast('❌ File JSON không hợp lệ!');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ============================================================
// HELPERS
// ============================================================
function diffLabel(d) {
  return d === 'easy' ? 'Dễ' : d === 'hard' ? 'Khó' : 'Trung bình';
}

function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showToast(msg, dur = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (document.getElementById('modalOverlay').classList.contains('show')) {
    if (e.key === 'Escape') closeModal();
    return;
  }
  if (currentPage === 'study') {
    if (e.key === ' ') { e.preventDefault(); revealAnswer(); }
    if (e.key === '1') rate(0);
    if (e.key === '2') rate(1);
    if (e.key === '3') rate(2);
  }
  if (currentPage === 'flashcard') {
    if (e.key === ' ') { e.preventDefault(); flipCard(); }
    if (e.key === 'ArrowLeft')  flashPrev();
    if (e.key === 'ArrowRight') flashNext();
  }
});
