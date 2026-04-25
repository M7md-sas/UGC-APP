// ==============================================
// UGC Academy — App Logic (Compact & Working)
// ==============================================

const D = window.APP_DATA;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const State = {
  currentPage: 'home',
  navStack: ['home'],
  user: { name: 'المستخدم', role: null, experience: null, onboarded: false },
  theme: 'light',
  bookmarks: [],
  completedLessons: [],
  moduleProgress: {},
  calcHistory: [],
  currentModule: null,
  currentCategory: null,

  save() {
    localStorage.setItem('ugc_state', JSON.stringify({
      user: this.user, theme: this.theme, bookmarks: this.bookmarks,
      completedLessons: this.completedLessons, moduleProgress: this.moduleProgress,
      calcHistory: this.calcHistory
    }));
  },
  load() {
    const s = localStorage.getItem('ugc_state');
    if (s) try { Object.assign(this, JSON.parse(s)); } catch (e) {}
  }
};

// ===== Helpers =====
const ic = (n, s = 18) => `<i data-lucide="${n}" style="width:${s}px;height:${s}px"></i>`;
const refreshIcons = () => window.lucide && lucide.createIcons({ nameAttr: 'data-lucide' });

function toast(msg, iconName = 'check-circle') {
  const c = $('#toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${ic(iconName, 16)}<span>${msg}</span>`;
  c.appendChild(t);
  refreshIcons();
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2200);
}

function goTo(page, opts = {}) {
  $$('.page').forEach(p => p.classList.remove('active'));
  if (opts.back) State.navStack.pop();
  else if (!opts.replace) {
    State.navStack.push(page);
    history.pushState({ page }, '');
  }
  State.currentPage = page;
  const el = $(`#page-${page}`);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); el.scrollTop = 0; }
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.nav === page));
  const fullscreen = ['onboarding', 'quiz-question'];
  $('#bottom-nav').classList.toggle('hidden', fullscreen.includes(page));
  refreshIcons();

  // Route to renderer
  const renderers = {
    'home': renderHome, 'modules': renderModules, 'module-detail': () => renderModuleDetail(State.currentModule),
    'lesson': () => {}, 'library': renderLibrary, 'category': () => renderCategoryDetail(State.currentCategory),
    'topic': () => {}, 'tools': renderTools, 'calculator': () => {},
    'bookmarks': renderBookmarks, 'glossary': renderGlossary, 'settings': renderSettings,
    'decision-trees': renderDecisionTrees, 'red-flags': renderRedFlags,
    'templates': renderTemplates, 'emergency': renderEmergency,
    'gap-analysis': renderGapAnalysisIntro, 'search': renderSearch
  };
  if (renderers[page]) renderers[page]();
}

function goBack() {
  if (State.navStack.length > 1) {
    State.navStack.pop();
    goTo(State.navStack[State.navStack.length - 1], { replace: true });
  } else goTo('home', { replace: true });
}

function toggleTheme() {
  State.theme = State.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', State.theme);
  State.save();
  toast(State.theme === 'dark' ? 'الوضع الليلي' : 'الوضع الفاتح', 'moon');
  if (State.currentPage === 'settings') renderSettings();
}

function toggleBookmark(type, id, title) {
  const idx = State.bookmarks.findIndex(b => b.type === type && b.id === id);
  if (idx >= 0) { State.bookmarks.splice(idx, 1); toast('أُزيل من المحفوظات', 'bookmark-x'); }
  else { State.bookmarks.unshift({ type, id, title, date: Date.now() }); toast('تم الحفظ', 'bookmark-check'); }
  State.save();
  if (State.currentPage === 'bookmarks') renderBookmarks();
}

const isBookmarked = (type, id) => State.bookmarks.some(b => b.type === type && b.id === id);

// ===== Reusable header =====
function topBar(title, subtitle, rightBtn = '') {
  return `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title">${subtitle ? `<span class="top-bar-subtitle">${subtitle}</span><br>` : ''}<span>${title}</span></div>
      ${rightBtn || '<div style="width:40px"></div>'}
    </div>
  `;
}

// ===== HOME =====
function renderHome() {
  const totalLessons = D.MODULES.reduce((s, m) => s + m.lessons, 0);
  const overall = Math.round((State.completedLessons.length / totalLessons) * 100) || 0;
  const cont = State.currentModule ? D.MODULES.find(m => m.id === State.currentModule) : D.MODULES[0];
  const certs = Object.keys(State.moduleProgress).filter(k => State.moduleProgress[k] === 100).length;

  $('#page-home').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="position:relative"><div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary-500),var(--primary-700));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:13px">م.ع</div><div style="position:absolute;bottom:-2px;left:-2px;width:12px;height:12px;background:var(--success);border-radius:50%;border:2px solid var(--bg)" class="dot-live"></div></div>
        <div><p style="font-size:10px;color:var(--text-muted);margin:0">أهلاً بعودتك</p><h1 style="font-size:14px;font-weight:700;margin:0">${State.user.name}</h1></div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="icon-btn" onclick="goTo('search')">${ic('search')}</button>
        <button class="icon-btn" onclick="goTo('settings')">${ic('settings')}</button>
      </div>
    </div>

    <div class="px-5 mb-5 fade-up">
      <div class="hero-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;position:relative">
          <div>
            <p style="font-size:11px;color:var(--primary-200);margin:0 0 4px">تقدّمك الإجمالي</p>
            <div style="display:flex;align-items:baseline;gap:4px">
              <span class="font-en tabular" style="font-size:36px;font-weight:700;line-height:1">${overall}</span>
              <span style="font-size:20px;font-weight:700;color:var(--primary-200)">%</span>
            </div>
            <p style="font-size:11px;color:var(--primary-200);margin:4px 0 0"><span class="font-en tabular" style="color:white;font-weight:700">${State.completedLessons.length}</span> / <span class="font-en tabular" style="color:white;font-weight:700">${totalLessons}</span> درس</p>
          </div>
          <div style="width:80px;height:80px;position:relative">
            <svg width="80" height="80" viewBox="0 0 100 100" style="transform:rotate(-90deg)">
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,.15)" stroke-width="6" fill="none"/>
              <circle cx="50" cy="50" r="45" stroke="white" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="${283-(283*overall/100)}"/>
            </svg>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">${ic('zap',28)}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding-top:16px;border-top:1px solid rgba(255,255,255,.1);position:relative">
          <div><div style="display:flex;gap:4px;align-items:center;margin-bottom:2px">${ic('bookmark',11)}<span style="font-size:9px;color:var(--primary-200)">محفوظات</span></div><p class="font-en tabular" style="font-size:18px;font-weight:700;margin:0">${State.bookmarks.length}</p></div>
          <div><div style="display:flex;gap:4px;align-items:center;margin-bottom:2px">${ic('award',11)}<span style="font-size:9px;color:var(--primary-200)">شهادات</span></div><p class="font-en tabular" style="font-size:18px;font-weight:700;margin:0">${certs}</p></div>
          <div><div style="display:flex;gap:4px;align-items:center;margin-bottom:2px">${ic('flame',11)}<span style="font-size:9px;color:var(--primary-200)">متتالية</span></div><p class="font-en tabular" style="font-size:18px;font-weight:700;margin:0">7</p></div>
        </div>
      </div>
    </div>

    <div class="section-title fade-up delay-1"><div class="section-title-bar"></div><h2>أكمل من حيث توقفت</h2></div>
    <div class="px-5 mb-5 fade-up delay-1">
      <button class="module-card w-full" onclick="openModule(${cont.id})">
        <div class="module-number">${cont.id.toString().padStart(2,'0')}</div>
        <div class="module-info">
          <div class="module-title">${cont.title}</div>
          <div class="module-desc">${cont.desc}</div>
          <div class="progress-bar-track" style="margin-top:8px"><div class="progress-bar-fill" style="width:${State.moduleProgress[cont.id]||10}%"></div></div>
          <div class="module-meta"><span>${ic('clock',11)} ${cont.duration}</span><span>${ic('layers',11)} ${cont.lessons}</span></div>
        </div>
        ${ic('arrow-left',16)}
      </button>
    </div>

    <div class="section-title fade-up delay-2"><div class="section-title-bar"></div><h2>وصول سريع</h2></div>
    <div class="px-5 mb-5 fade-up delay-2">
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
        ${[
          ['tools','calculator','الحاسبات','6 حاسبات','rgba(192,57,43,.1)'],
          ['glossary','book-open','القاموس',`${D.GLOSSARY.length}+ مصطلح`,'rgba(52,152,219,.1)'],
          ['decision-trees','git-branch','شجرات القرار',`${D.DECISION_TREES.length} سيناريو`,'rgba(39,174,96,.1)'],
          ['gap-analysis','target','الاختبار التشخيصي','Gap Analysis','rgba(107,91,149,.1)'],
          ['red-flags','alert-triangle','الإشارات الحمراء',`${D.RED_FLAGS.length} إشارة`,'rgba(230,126,34,.1)'],
          ['templates','file-text','قوالب التواصل',`${D.TEMPLATES.length} قالب`,'rgba(24,160,133,.1)'],
          ['emergency','siren','بروتوكولات الطوارئ',`${D.EMERGENCY.length} حالة`,'rgba(192,57,43,.12)'],
          ['library','library','المكتبة','10 أقسام','rgba(30,58,95,.1)']
        ].map(([p,i,t,s,bg])=>`
          <button class="card card-interactive" onclick="goTo('${p}')" style="padding:14px">
            <div style="width:36px;height:36px;border-radius:10px;background:${bg};display:flex;align-items:center;justify-content:center;margin-bottom:8px">${ic(i,18)}</div>
            <p style="font-size:12px;font-weight:700;margin:0">${t}</p>
            <p style="font-size:10px;color:var(--text-muted);margin:2px 0 0">${s}</p>
          </button>
        `).join('')}
      </div>
    </div>

    <div class="px-5 fade-up delay-3">
      <div class="alert-box warning">
        ${ic('shield-alert',20)}
        <div><h4>تنبيه السلامة اليومي</h4><p>لا تنسَ Portable Earthing قبل أي عمل على كيبل مفصول. <strong>الكيبل المفصول ≠ كيبل آمن</strong>.</p></div>
      </div>
    </div>
  `;
  refreshIcons();
}

// ===== MODULES =====
function renderModules() {
  $('#page-modules').innerHTML = topBar('الموديولات التعليمية', '17 موديول') + `
    <div class="px-5 mb-4 fade-up">
      <div class="card" style="background:linear-gradient(135deg,var(--primary-50),var(--secondary-50));border-color:var(--primary-100);padding:14px">
        <div style="display:flex;gap:12px;align-items:center">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--surface);display:flex;align-items:center;justify-content:center">${ic('book-open',20)}</div>
          <div><p style="font-size:13px;font-weight:700;margin:0;color:var(--primary-600)">17 موديول تعليمي</p><p style="font-size:11px;color:var(--text-muted);margin:2px 0 0">من الصفر إلى مدير مشروع</p></div>
        </div>
      </div>
    </div>
    <div class="px-5">
      ${D.MODULES.map((m,i)=>{
        const p = State.moduleProgress[m.id]||0;
        const done = p===100;
        return `
          <button class="module-card w-full fade-up ${done?'completed':''}" style="animation-delay:${50*i}ms" onclick="openModule(${m.id})">
            <div class="module-number">${done?'✓':m.id.toString().padStart(2,'0')}</div>
            <div class="module-info">
              <div class="module-title">${m.title}</div>
              <div class="module-desc">${m.desc}</div>
              ${p>0&&!done?`<div class="progress-bar-track" style="margin-top:6px"><div class="progress-bar-fill" style="width:${p}%"></div></div>`:''}
              <div class="module-meta">
                <span>${ic('clock',11)} ${m.duration}</span>
                <span>${ic('layers',11)} ${m.lessons}</span>
                ${m.featured?'<span class="badge badge-primary">⭐</span>':''}
                ${m.required?'<span class="badge badge-warning">إلزامي</span>':''}
              </div>
            </div>
            ${ic('chevron-left',16)}
          </button>
        `;
      }).join('')}
    </div>
  `;
  refreshIcons();
}

function openModule(id) { State.currentModule = id; State.save(); goTo('module-detail'); }

function renderModuleDetail(id) {
  const m = D.MODULES.find(x => x.id === id);
  if (!m) return;
  const bk = isBookmarked('module', String(m.id));
  $('#page-module-detail').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="top-bar-subtitle">MODULE ${m.id.toString().padStart(2,'0')}</span><br><span>${m.title}</span></div>
      <button class="icon-btn" onclick="toggleBookmark('module','${m.id}','${m.title.replace(/'/g,"\\'")}');goTo('module-detail',{replace:true})">${ic(bk?'bookmark-check':'bookmark')}</button>
    </div>
    <div class="topic-hero fade-up" style="background:linear-gradient(135deg,var(--primary-600),var(--primary-500))">
      <span class="font-en" style="font-size:10px;font-weight:700;color:var(--primary-100);letter-spacing:2px">MODULE ${m.id.toString().padStart(2,'0')}</span>
      <h1 style="font-size:22px;font-weight:700;margin:6px 0 4px;color:white;line-height:1.3">${m.title}</h1>
      <p class="font-en" style="font-size:12px;color:var(--primary-100);opacity:.85;margin:0 0 14px">${m.titleEn}</p>
      <div style="display:flex;gap:14px;padding-top:14px;border-top:1px solid rgba(255,255,255,.15)">
        <div style="display:flex;align-items:center;gap:4px">${ic('clock',13)}<span style="font-size:11px;color:white;font-weight:600">${m.duration}</span></div>
        <div style="width:1px;height:12px;background:rgba(255,255,255,.2)"></div>
        <div style="display:flex;align-items:center;gap:4px">${ic('layers',13)}<span style="font-size:11px;color:white;font-weight:600">${m.lessons}</span></div>
        <div style="width:1px;height:12px;background:rgba(255,255,255,.2)"></div>
        <div style="display:flex;align-items:center;gap:4px">${ic('bar-chart-3',13)}<span style="font-size:11px;color:white;font-weight:600">${m.difficulty}</span></div>
      </div>
    </div>
    <div class="topic-section fade-up delay-1"><h3>📖 الوصف</h3><p>${m.desc}</p></div>
    <div class="topic-section fade-up delay-2"><h3>🎯 ماذا ستتعلم؟</h3><ul>${m.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></div>
    <div class="section-title fade-up delay-3"><div class="section-title-bar"></div><h2>الدروس</h2></div>
    <div class="px-5 fade-up delay-3">
      ${Array.from({length:m.lessons},(_,i)=>{
        const k = `${m.id}-${i}`;
        const done = State.completedLessons.includes(k);
        const cur = !done && i === State.completedLessons.filter(l=>l.startsWith(`${m.id}-`)).length;
        return `
          <button class="topic-item" onclick="openLesson(${m.id},${i})">
            <div style="width:36px;height:36px;border-radius:50%;background:${done?'var(--success)':cur?'linear-gradient(135deg,var(--primary-500),var(--primary-600))':'var(--border)'};color:${done||cur?'white':'var(--text-muted)'};display:flex;align-items:center;justify-content:center;font-family:Inter;font-weight:700;font-size:13px;flex-shrink:0">${done?'✓':(i+1)}</div>
            <div style="flex:1;text-align:right">
              <div class="topic-title">الدرس ${i+1}: ${lessonTitle(m.id,i)}</div>
              <div class="topic-desc">${5+Math.floor(Math.random()*10)} دقائق · ${done?'مكتمل ✓':cur?'التالي':'قيد الانتظار'}</div>
            </div>
            ${ic('chevron-left',14)}
          </button>
        `;
      }).join('')}
    </div>
  `;
  refreshIcons();
}

const genericLessons = ['المفاهيم الأساسية','التعريفات والمصطلحات','المعايير المرجعية','الإجراءات العملية','الأدوات والمعدات','الاختبارات المطلوبة','الأخطاء الشائعة','تطبيقات ميدانية','دراسة حالة','المراجعة النهائية','تمارين عملية','تطبيقات متقدمة','نصائح من الخبراء','خلاصة الموديول'];
function lessonTitle(mid, idx) {
  const m = D.MODULES.find(x => x.id === mid);
  if (m && m.objectives[idx]) return m.objectives[idx];
  return genericLessons[idx % genericLessons.length];
}

function openLesson(mid, idx) {
  const m = D.MODULES.find(x => x.id === mid);
  if (!m) return;
  const k = `${mid}-${idx}`;
  $('#page-lesson').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="top-bar-subtitle">الدرس ${idx+1} من ${m.lessons}</span><br><span style="font-size:12px">${lessonTitle(mid,idx)}</span></div>
      <button class="icon-btn" onclick="toggleBookmark('lesson','${k}','${lessonTitle(mid,idx).replace(/'/g,"\\'")}')">${ic(isBookmarked('lesson',k)?'bookmark-check':'bookmark')}</button>
    </div>
    <div class="topic-hero fade-up" style="background:linear-gradient(135deg,var(--primary-600),var(--primary-500))">
      <span class="font-en" style="font-size:10px;font-weight:700;color:var(--primary-100)">LESSON ${idx+1}</span>
      <h1 style="font-size:20px;font-weight:700;margin:6px 0;color:white;line-height:1.3">${lessonTitle(mid,idx)}</h1>
      <p style="font-size:12px;color:var(--primary-100);margin:0">ضمن: ${m.title}</p>
    </div>
    <div class="placeholder-notice fade-up delay-1"><strong>📝 محتوى نموذجي</strong><br>هذه بنية الدرس الأساسية. المحتوى التقني التفصيلي يُضاف بمراجعة مهندس متخصص.</div>
    <div class="topic-section fade-up delay-2"><h3>📖 مقدمة</h3><p>هذا الدرس يناقش <strong>${lessonTitle(mid,idx)}</strong> في سياق ${m.title}. سنغطي المفاهيم الأساسية والتطبيقات العملية والأخطاء الشائعة.</p></div>
    <div class="topic-section fade-up delay-3"><h3>🎯 المحاور</h3><ul><li>المفاهيم والتعريفات</li><li>المعايير المرجعية (IEC / SEC / IEEE)</li><li>الإجراءات العملية خطوة بخطوة</li><li>الأخطاء الشائعة وتجنّبها</li></ul></div>
    <div class="topic-section fade-up delay-4"><h3>🔧 التطبيق العملي</h3><ul><li>الظروف البيئية</li><li>معايير السلامة (HSE)</li><li>متطلبات المواصفات (PTS/GTS)</li><li>إجراءات الجودة (ITP)</li></ul></div>
    <div class="alert-box info fade-up delay-5">${ic('lightbulb',20)}<div><h4>💡 نصيحة احترافية</h4><p>راجع دليل المصنّع وتعليمات الاستشاري قبل التطبيق الميداني.</p></div></div>
    <div class="px-5" style="margin-top:20px"><button class="btn btn-primary btn-full" onclick="completeLesson('${k}',${mid})">${ic('check',16)} أتممت الدرس</button></div>
  `;
  goTo('lesson');
}

function completeLesson(k, mid) {
  if (!State.completedLessons.includes(k)) State.completedLessons.push(k);
  const m = D.MODULES.find(x => x.id === mid);
  const done = State.completedLessons.filter(l => l.startsWith(`${mid}-`)).length;
  State.moduleProgress[mid] = Math.round((done / m.lessons) * 100);
  State.save();
  toast('تم تسجيل الإكمال', 'check-circle');
  setTimeout(goBack, 700);
}

// ===== LIBRARY =====
function renderLibrary() {
  $('#page-library').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div style="padding:16px 20px 12px" class="fade-up">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <div style="width:28px;height:28px;border-radius:8px;background:var(--primary-600);display:flex;align-items:center;justify-content:center;color:white">${ic('library',15)}</div>
            <h1 style="font-size:20px;font-weight:700;margin:0">المكتبة المرجعية</h1>
          </div>
          <p style="font-size:11px;color:var(--text-muted);margin:0;padding-right:36px">تصفّح حر — كل المحتوى في مكان واحد</p>
        </div>
        <button class="icon-btn" onclick="goTo('bookmarks')" style="position:relative">
          ${ic('bookmark',18)}
          ${State.bookmarks.length>0?`<span style="position:absolute;top:-4px;left:-4px;background:var(--primary-600);color:white;font-size:9px;font-weight:700;padding:2px 6px;border-radius:99px">${State.bookmarks.length}</span>`:''}
        </button>
      </div>
      <div style="position:relative;margin-bottom:16px">
        <div style="position:absolute;right:14px;top:50%;transform:translateY(-50%);pointer-events:none">${ic('search',16)}</div>
        <input type="text" placeholder="ابحث عن موضوع..." class="input-field" style="padding-right:44px" oninput="searchLibrary(this.value)"/>
      </div>
    </div>
    <div id="lib-content">${libCategoriesHtml()}</div>
  `;
  refreshIcons();
}

function libCategoriesHtml() {
  return `
    <div class="section-title fade-up delay-1"><div class="section-title-bar"></div><h2>الأقسام الرئيسية</h2></div>
    <div class="px-5 fade-up delay-1">
      <div class="cat-grid">
        ${D.CATEGORIES.map((c,i)=>`
          <button class="cat-card ${c.featured?'featured':''}" onclick="openCategory('${c.id}')" style="animation-delay:${50*i}ms">
            <div class="cat-card-header ${c.color}">
              ${c.mostSearched?`<div style="position:absolute;top:8px;right:8px;background:var(--v-mv);color:#2C3E50;font-size:9px;font-weight:800;padding:4px 8px;border-radius:6px;display:flex;align-items:center;gap:4px;z-index:2">${ic('trending-up',10)}<span>الأكثر بحثاً</span></div>`:''}
              <div style="position:relative;width:40px;height:40px">${c.icon}</div>
            </div>
            <div class="cat-card-body">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <span class="cat-card-num">${c.num}</span>
                ${c.featured&&!c.mostSearched?'<span class="badge badge-primary">⭐</span>':''}
                ${c.required?'<span class="badge badge-warning" style="font-size:8px">HSE</span>':''}
              </div>
              <div class="cat-card-title">${c.title}</div>
              <div class="cat-card-desc">${c.desc}</div>
              <div style="display:flex;justify-content:flex-end;margin-top:8px">${ic('arrow-left',12)}</div>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function searchLibrary(q) {
  const c = $('#lib-content');
  if (!q || q.length < 2) { c.innerHTML = libCategoriesHtml(); refreshIcons(); return; }
  const query = q.toLowerCase();
  const results = [];
  D.CATEGORIES.forEach(cat => {
    if (cat.title.includes(q) || cat.titleEn.toLowerCase().includes(query)) results.push({ type: 'cat', data: cat });
    cat.subsections.forEach(s => {
      if (s.title.includes(q)) results.push({ type: 'sub', cat, data: s });
      s.topics.forEach((t, i) => { if (t.toLowerCase().includes(query)) results.push({ type: 'topic', cat, sub: s, topic: t, idx: i }); });
    });
  });
  c.innerHTML = `<div class="px-5"><p style="font-size:12px;color:var(--text-muted);margin:16px 0 12px"><strong>${results.length}</strong> نتيجة</p>
    ${results.length===0?`<div class="empty-state"><div class="empty-state-icon">${ic('search-x',32)}</div><h3>لا توجد نتائج</h3><p>جرّب كلمات أخرى</p></div>`:
    results.slice(0,20).map(r=>`
      <button class="topic-item" onclick="openCategory('${r.cat?r.cat.id:r.data.id}')">
        <div class="topic-icon">${ic(r.type==='cat'?'folder':r.type==='sub'?'book':'file-text',18)}</div>
        <div style="flex:1;text-align:right">
          <div class="topic-title">${r.type==='topic'?r.topic:r.data.title}</div>
          <div class="topic-desc">${r.type==='cat'?r.data.desc:r.type==='sub'?r.cat.title:`${r.cat.title} › ${r.sub.title}`}</div>
        </div>${ic('arrow-left',14)}
      </button>`).join('')}</div>`;
  refreshIcons();
}

function openCategory(id) { State.currentCategory = id; goTo('category'); }

function renderCategoryDetail(id) {
  const c = D.CATEGORIES.find(x => x.id === id);
  if (!c) return;
  const bk = isBookmarked('category', c.id);
  $('#page-category').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div style="display:flex;align-items:center;gap:4px;font-size:11px"><span style="color:var(--text-muted)">المكتبة</span>${ic('chevron-left',12)}<span style="font-weight:700">${c.title}</span></div>
      <button class="icon-btn" onclick="toggleBookmark('category','${c.id}','${c.title.replace(/'/g,"\\'")}');goTo('category',{replace:true})">${ic(bk?'bookmark-check':'bookmark')}</button>
    </div>
    <div class="topic-hero fade-up" style="background:linear-gradient(135deg,var(--cat-700),var(--cat-500))">
      <div style="display:flex;align-items:flex-start;gap:14px;position:relative">
        <div style="width:60px;height:60px;border-radius:16px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0"><div style="width:36px;height:36px">${c.icon}</div></div>
        <div style="flex:1;min-width:0">
          <span class="font-en" style="font-size:10px;font-weight:700;color:var(--cat-100);letter-spacing:2px;opacity:.8">SECTION · ${c.num}</span>
          <h1 style="font-size:20px;font-weight:700;margin:4px 0 2px;color:white;line-height:1.3">${c.title}</h1>
          <p class="font-en" style="font-size:11px;color:var(--cat-100);opacity:.85;margin:0 0 10px">${c.titleEn}</p>
          <p style="font-size:11px;color:rgba(255,255,255,.85);line-height:1.6;margin:0">${c.desc}</p>
        </div>
      </div>
    </div>
    ${c.subsections.map((sub,i)=>`
      <div class="section-title fade-up" style="animation-delay:${60*(i+1)}ms"><div class="section-title-bar" style="background:linear-gradient(180deg,var(--cat-500),var(--secondary-400))"></div><h2>${sub.title}</h2></div>
      <div class="px-5 fade-up" style="animation-delay:${60*(i+1)}ms">
        ${sub.topics.map((t,ti)=>{
          const tk = `${sub.id}-${ti}`;
          const hd = D.TOPIC_DETAILS[tk];
          return `
            <button class="topic-item" onclick="openTopic('${sub.id}',${ti},'${c.id}')">
              <div class="topic-icon">${ic(ti%3===0?'file-text':ti%3===1?'video':'book-open',18)}</div>
              <div style="flex:1;text-align:right">
                <div class="topic-title">${t}</div>
                <div class="topic-desc">${hd?'محتوى تفصيلي كامل':'مقال + شرح'}</div>
              </div>
              ${ic('chevron-left',14)}
            </button>
          `;
        }).join('')}
      </div>
    `).join('')}
  `;
  refreshIcons();
}

function openTopic(subId, idx, catId) {
  const c = D.CATEGORIES.find(x => x.id === catId);
  const sub = c?.subsections.find(s => s.id === subId);
  const name = sub?.topics[idx];
  const key = `${subId}-${idx}`;
  const d = D.TOPIC_DETAILS[key];
  $('#page-topic').innerHTML = d ? topicFull(d, key) : topicPlaceholder(name, c, sub);
  goTo('topic');
}

function topicFull(d, key) {
  const bk = isBookmarked('topic', key);
  return `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="top-bar-subtitle">${d.category}</span><br><span style="font-size:12px">${d.title}</span></div>
      <button class="icon-btn" onclick="toggleBookmark('topic','${key}','${d.title.replace(/'/g,"\\'")}');goTo('topic',{replace:true})">${ic(bk?'bookmark-check':'bookmark')}</button>
    </div>
    <div class="topic-hero fade-up" style="background:linear-gradient(135deg,var(--cat-700),var(--cat-500))">
      <h1 style="font-size:22px;font-weight:700;margin:0 0 6px;color:white;line-height:1.3">${d.title}</h1>
      <p class="font-en" style="font-size:12px;color:var(--cat-100);opacity:.85;margin:0">${d.categoryEn}</p>
    </div>
    <div class="topic-section fade-up delay-1"><h3>🎯 ماذا ستتعلم؟</h3><ul>${d.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></div>
    <div class="topic-section fade-up delay-2">${d.content}</div>
    ${d.tools?`<div class="section-title fade-up delay-3"><div class="section-title-bar"></div><h2>الأدوات المطلوبة</h2></div><div class="px-5 fade-up delay-3" style="margin-bottom:14px"><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">${d.tools.map(t=>`<div class="card" style="padding:10px;display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;border-radius:8px;background:var(--cat-50);display:flex;align-items:center;justify-content:center">${ic(t.icon,16)}</div><span style="font-size:11px;font-weight:600">${t.name}</span></div>`).join('')}</div></div>`:''}
    ${d.hseWarnings?`<div class="alert-box warning fade-up delay-4">${ic('shield-alert',20)}<div><h4>⚠️ تنبيهات السلامة</h4><ul style="margin:6px 0 0;padding-right:16px">${d.hseWarnings.map(w=>`<li style="font-size:12px;margin-bottom:4px">${w}</li>`).join('')}</ul></div></div>`:''}
    ${d.commonMistakes?`<div class="alert-box danger fade-up delay-5">${ic('x-circle',20)}<div><h4>❌ أخطاء تُفشل العمل</h4><ul style="margin:6px 0 0;padding-right:16px">${d.commonMistakes.map(m=>`<li style="font-size:12px;margin-bottom:4px">${m}</li>`).join('')}</ul></div></div>`:''}
    ${d.references?`<div class="topic-section fade-up delay-6"><h3>📚 المراجع</h3><ul>${d.references.map(r=>`<li>${r}</li>`).join('')}</ul></div>`:''}
    <div class="px-5 fade-up delay-6" style="margin-top:20px"><button class="btn btn-primary btn-full" onclick="completeLesson('${key}',0);goBack()">${ic('check-circle',16)} أتممت</button></div>
  `;
}

function topicPlaceholder(name, c, sub) {
  return `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="top-bar-subtitle">${c?.title||''}</span><br><span style="font-size:12px">${name}</span></div>
      <div style="width:40px"></div>
    </div>
    <div class="topic-hero fade-up" style="background:linear-gradient(135deg,var(--cat-700),var(--cat-500))">
      <h1 style="font-size:22px;font-weight:700;margin:0 0 6px;color:white;line-height:1.3">${name}</h1>
      <p class="font-en" style="font-size:12px;color:var(--cat-100);opacity:.85;margin:0">${sub?.title||''}</p>
    </div>
    <div class="placeholder-notice fade-up delay-1"><strong>📝 محتوى قيد الإعداد</strong><br>هذا الموضوع يحتاج محتوى تفصيلي من مهندس متخصص. هذه بنيته الأساسية.</div>
    <div class="topic-section fade-up delay-2"><h3>📖 مقدمة</h3><p><strong>${name}</strong> ضمن <strong>${c?.title}</strong> — فرع: <em>${sub?.title}</em></p></div>
    <div class="topic-section fade-up delay-3"><h3>🎯 المحاور</h3><ul><li>المفاهيم والتعريفات</li><li>المعايير المرجعية (IEC / SEC / IEEE)</li><li>الإجراءات العملية خطوة بخطوة</li><li>الأدوات والمعدات</li><li>معايير القبول والرفض</li><li>الأخطاء الشائعة</li><li>متطلبات HSE</li></ul></div>
    <div class="topic-section fade-up delay-4"><h3>🔧 التطبيق العملي</h3><ul><li>الظروف البيئية</li><li>متطلبات المواصفات (PTS)</li><li>الحصول على PTW</li><li>التوثيق في ITP</li></ul></div>
    <div class="alert-box info fade-up delay-5">${ic('book',20)}<div><h4>مصادر القراءة</h4><p>راجع IEC و IEEE و CIGRÉ ومواصفات SEC للتعمق.</p></div></div>
    <div class="px-5" style="margin-top:20px"><button class="btn btn-primary btn-full" onclick="goBack()">${ic('arrow-right',16)} عودة للقسم</button></div>
  `;
}

// ===== TOOLS (Calculators) =====
function renderTools() {
  $('#page-tools').innerHTML = topBar('الأدوات الهندسية', '6 حاسبات دقيقة') + `
    <div class="px-5 mb-4 fade-up"><p style="font-size:12px;color:var(--text-muted);margin:0">مبنية على IEC & IEEE Standards</p></div>
    <div class="section-title fade-up delay-1"><div class="section-title-bar"></div><h2>جميع الحاسبات</h2></div>
    <div class="px-5 fade-up delay-1">
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px">
        ${D.CALCULATORS.map((c,i)=>`
          <button class="card card-interactive" style="text-align:right;padding:16px;animation-delay:${60*i}ms" onclick="openCalculator('${c.id}')">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(30,58,95,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:12px">${ic(c.icon,20)}</div>
            <h3 style="font-size:13px;font-weight:700;margin:0 0 2px;line-height:1.3">${c.title}</h3>
            <p class="font-en" style="font-size:10px;color:var(--text-muted);margin:0 0 6px">${c.titleEn}</p>
            <div style="display:flex;align-items:center;gap:4px;font-size:9px;color:var(--text-subtle)">${ic('file-text',10)}<span class="font-en">${c.reference}</span></div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  refreshIcons();
}

const CALC_CONFIGS = {
  pulling: {
    inputs: [
      { id: 'W', label: 'وزن الكيبل (W)', unit: 'kg/m', val: 8.5 },
      { id: 'L', label: 'طول المقطع (L)', unit: 'm', val: 200 },
      { id: 'mu', label: 'معامل الاحتكاك (μ)', unit: '—', val: 0.5 }
    ],
    calc: (v) => v.mu * v.W * v.L,
    unit: 'N',
    threshold: 1875
  },
  vdrop: {
    inputs: [
      { id: 'I', label: 'التيار (I)', unit: 'A', val: 100 },
      { id: 'L', label: 'طول الخط (L)', unit: 'm', val: 200 },
      { id: 'R', label: 'مقاومة الكيبل (R)', unit: 'Ω/km', val: 0.5 }
    ],
    calc: (v) => 2 * v.I * v.R * v.L / 1000,
    unit: 'V',
    threshold: 11
  },
  ampacity: {
    inputs: [
      { id: 'Imax', label: 'التيار الأساسي', unit: 'A', val: 1000 },
      { id: 'tempF', label: 'معامل الحرارة', unit: '—', val: 0.95 },
      { id: 'depthF', label: 'معامل العمق', unit: '—', val: 0.98 }
    ],
    calc: (v) => v.Imax * v.tempF * v.depthF,
    unit: 'A',
    threshold: null
  },
  sc: {
    inputs: [
      { id: 'Isc', label: 'تيار القصر', unit: 'kA', val: 40 },
      { id: 't', label: 'مدة القصر', unit: 's', val: 0.2 }
    ],
    calc: (v) => v.Isc * 1000 * Math.sqrt(v.t) / 143,
    unit: 'mm²',
    threshold: null
  },
  fiber: {
    inputs: [
      { id: 'dist', label: 'المسافة', unit: 'km', val: 25 },
      { id: 'splices', label: 'عدد Splices', unit: '', val: 5 },
      { id: 'connectors', label: 'عدد Connectors', unit: '', val: 2 },
      { id: 'wl', label: 'Loss/km', unit: 'dB', val: 0.35 }
    ],
    calc: (v) => v.dist * v.wl + v.splices * 0.1 + v.connectors * 0.5,
    unit: 'dB',
    threshold: 25
  },
  site: {
    inputs: [
      { id: 'baseAmp', label: 'Base Ampacity', unit: 'A', val: 1000 },
      { id: 'temp', label: 'حرارة الأرض', unit: '°C', val: 45 },
      { id: 'depth', label: 'عمق الدفن', unit: 'm', val: 1.0 },
      { id: 'soil', label: 'Soil ρ', unit: 'K·m/W', val: 1.5 }
    ],
    calc: (v) => {
      const tF = Math.max(0.6, 1 - (v.temp - 20) * 0.008);
      const dF = v.depth > 1 ? 0.95 : 1.0;
      const sF = v.soil < 1.5 ? 1.0 : v.soil < 2.0 ? 0.93 : 0.87;
      return v.baseAmp * tF * dF * sF;
    },
    unit: 'A',
    threshold: null
  }
};

function openCalculator(id) {
  const c = D.CALCULATORS.find(x => x.id === id);
  const cfg = CALC_CONFIGS[id];
  if (!c || !cfg) return;
  State.currentCalc = id;
  const initVals = {};
  cfg.inputs.forEach(i => initVals[i.id] = i.val);
  const result = cfg.calc(initVals);

  $('#page-calculator').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goBack()">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="font-en top-bar-subtitle">${c.titleEn.toUpperCase()}</span><br><span style="font-size:12px">${c.title}</span></div>
      <div style="width:40px"></div>
    </div>
    <div class="px-5 mb-4 fade-up" id="calc-result">${calcResultHtml(result, cfg)}</div>
    <div class="section-title fade-up delay-1"><div class="section-title-bar"></div><h2>المدخلات</h2></div>
    <div class="px-5 fade-up delay-2">
      ${cfg.inputs.map(i=>`
        <div class="calc-input-box">
          <label class="calc-input-label">${i.label}${i.unit?`<span class="calc-input-unit">${i.unit}</span>`:''}</label>
          <input type="number" id="ci-${i.id}" value="${i.val}" step="0.01"/>
        </div>
      `).join('')}
    </div>
    <div class="px-5" style="margin-top:16px;padding-bottom:24px">
      <button class="btn btn-primary btn-full" onclick="runCalc('${id}')">${ic('calculator',16)} احسب</button>
      <p style="text-align:center;font-size:10px;color:var(--text-muted);margin:12px 0 0">${ic('shield-check',10)} مبني على ${c.reference}</p>
    </div>
  `;
  goTo('calculator');
}

function calcResultHtml(val, cfg) {
  const safe = cfg.threshold ? val < cfg.threshold : true;
  return `
    <div class="calc-result-hero">
      <p style="font-size:10px;font-weight:700;color:var(--primary-200);margin:0 0 4px">النتيجة</p>
      <div style="display:flex;align-items:baseline;gap:6px;position:relative">
        <span class="calc-result-value font-en tabular">${val < 10 ? val.toFixed(2) : Math.round(val)}</span>
        <span class="font-en" style="font-size:20px;font-weight:700;color:var(--primary-200)">${cfg.unit}</span>
      </div>
      ${cfg.threshold ? `
        <div style="margin-top:14px;padding:10px;background:${safe?'rgba(39,174,96,0.2)':'rgba(192,57,43,0.2)'};border:1px solid ${safe?'rgba(39,174,96,0.4)':'rgba(192,57,43,0.4)'};border-radius:10px;display:flex;gap:10px;align-items:center;position:relative">
          <div style="width:30px;height:30px;border-radius:50%;background:${safe?'var(--success)':'var(--danger)'};display:flex;align-items:center;justify-content:center">${ic(safe?'check':'x',15)}</div>
          <div><p style="font-size:11px;font-weight:700;margin:0;color:white">${safe?'✓ ضمن الحد المسموح':'⚠️ يتجاوز الحد'}</p></div>
        </div>
      ` : ''}
    </div>
  `;
}

function runCalc(id) {
  const cfg = CALC_CONFIGS[id];
  const vals = {};
  cfg.inputs.forEach(i => vals[i.id] = parseFloat($(`#ci-${i.id}`).value) || 0);
  const result = cfg.calc(vals);
  $('#calc-result').innerHTML = calcResultHtml(result, cfg);
  State.calcHistory.unshift({ calc: id, result: `${result < 10 ? result.toFixed(2) : Math.round(result)} ${cfg.unit}`, time: Date.now() });
  if (State.calcHistory.length > 20) State.calcHistory = State.calcHistory.slice(0, 20);
  State.save();
  toast(`النتيجة: ${result < 10 ? result.toFixed(2) : Math.round(result)} ${cfg.unit}`, 'check-circle');
}

// ===== GLOSSARY =====
function renderGlossary() {
  $('#page-glossary').innerHTML = topBar('القاموس الهندسي', `${D.GLOSSARY.length} مصطلح`) + `
    <div class="px-5 mb-3 fade-up">
      <div style="position:relative">
        <div style="position:absolute;right:14px;top:50%;transform:translateY(-50%);pointer-events:none">${ic('search',16)}</div>
        <input type="text" placeholder="ابحث في القاموس..." class="input-field" style="padding-right:44px" oninput="searchGlossary(this.value)"/>
      </div>
    </div>
    <div class="px-5" id="glossary-list">${glossaryHtml(D.GLOSSARY)}</div>
  `;
  refreshIcons();
}

function glossaryHtml(arr) {
  return arr.map((g,i)=>`
    <div class="card fade-up" style="animation-delay:${20*i}ms;margin-bottom:10px;padding:14px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
        <h3 style="font-size:14px;font-weight:700;margin:0">${g.ar}</h3>
        <span class="font-en" style="font-size:10px;color:var(--text-muted);font-weight:600">${g.en}</span>
      </div>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.7;margin:0">${g.def}</p>
    </div>
  `).join('');
}

function searchGlossary(q) {
  if (!q) { $('#glossary-list').innerHTML = glossaryHtml(D.GLOSSARY); return; }
  const ql = q.toLowerCase();
  const filtered = D.GLOSSARY.filter(g => g.ar.includes(q) || g.en.toLowerCase().includes(ql) || g.def.toLowerCase().includes(ql));
  $('#glossary-list').innerHTML = filtered.length ? glossaryHtml(filtered) : `<div class="empty-state"><div class="empty-state-icon">${ic('search-x',32)}</div><h3>لا توجد نتائج</h3></div>`;
  refreshIcons();
}

// ===== BOOKMARKS =====
function renderBookmarks() {
  $('#page-bookmarks').innerHTML = topBar('المحفوظات', `${State.bookmarks.length} عنصر`) + `
    <div class="px-5 fade-up">
      ${State.bookmarks.length === 0 ? `
        <div class="empty-state"><div class="empty-state-icon">${ic('bookmark',32)}</div><h3>لا توجد محفوظات</h3><p>اضغط ${ic('bookmark',12)} على أي محتوى لحفظه هنا</p></div>
      ` : State.bookmarks.map((b,i)=>`
        <button class="topic-item fade-up" style="animation-delay:${40*i}ms" onclick="openBookmark('${b.type}','${b.id}')">
          <div class="topic-icon">${ic(b.type==='module'?'book-open':b.type==='category'?'folder':b.type==='topic'?'file-text':'book',18)}</div>
          <div style="flex:1;text-align:right">
            <div class="topic-title">${b.title}</div>
            <div class="topic-desc">${b.type==='module'?'موديول':b.type==='category'?'قسم':b.type==='topic'?'موضوع':'درس'} · ${new Date(b.date).toLocaleDateString('ar-SA')}</div>
          </div>
          <button onclick="event.stopPropagation();toggleBookmark('${b.type}','${b.id}','${b.title.replace(/'/g,"\\'")}')" class="icon-btn" style="width:32px;height:32px">${ic('x',14)}</button>
        </button>
      `).join('')}
    </div>
  `;
  refreshIcons();
}

function openBookmark(type, id) {
  if (type === 'module') { State.currentModule = parseInt(id); goTo('module-detail'); }
  else if (type === 'category') { State.currentCategory = id; goTo('category'); }
  else if (type === 'lesson') {
    const [mid, idx] = id.split('-').map(Number);
    openLesson(mid, idx);
  } else if (type === 'topic') {
    const parts = id.split('-');
    const catId = D.CATEGORIES.find(c => c.subsections.some(s => s.id === parts.slice(0,2).join('-')))?.id;
    if (catId) openTopic(parts.slice(0,2).join('-'), parseInt(parts[2]), catId);
  }
}

// ===== SETTINGS =====
function renderSettings() {
  $('#page-settings').innerHTML = topBar('الإعدادات') + `
    <div class="px-5 fade-up">
      <div class="section-title" style="padding:0;margin:10px 0"><div class="section-title-bar"></div><h2>المظهر</h2></div>
      <div class="card" style="padding:0">
        <button onclick="toggleTheme()" style="width:100%;padding:14px;display:flex;align-items:center;justify-content:space-between;background:transparent;text-align:right">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-alt);display:flex;align-items:center;justify-content:center">${ic(State.theme==='dark'?'moon':'sun',18)}</div>
            <div>
              <p style="font-size:13px;font-weight:700;margin:0">${State.theme==='dark'?'الوضع الليلي':'الوضع الفاتح'}</p>
              <p style="font-size:11px;color:var(--text-muted);margin:2px 0 0">اضغط للتبديل</p>
            </div>
          </div>
          <div style="width:44px;height:24px;border-radius:12px;background:${State.theme==='dark'?'var(--primary-600)':'var(--border-strong)'};position:relative;transition:.3s">
            <div style="width:20px;height:20px;border-radius:50%;background:white;position:absolute;top:2px;${State.theme==='dark'?'right:22px':'right:2px'};transition:.3s;box-shadow:0 2px 4px rgba(0,0,0,.2)"></div>
          </div>
        </button>
      </div>
    </div>
    <div class="px-5 fade-up delay-1">
      <div class="section-title" style="padding:0;margin:16px 0 10px"><div class="section-title-bar"></div><h2>الملف الشخصي</h2></div>
      <div class="card">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,var(--primary-500),var(--primary-700));display:flex;align-items:center;justify-content:center;color:white;font-weight:700">م.ع</div>
          <div><p style="font-size:14px;font-weight:700;margin:0">${State.user.name}</p><p style="font-size:11px;color:var(--text-muted);margin:2px 0 0">${State.user.role||'لم يحدد الدور'}</p></div>
        </div>
        <button class="btn btn-secondary btn-full" onclick="goTo('onboarding')">${ic('user-cog',14)} تعديل الملف الشخصي</button>
      </div>
    </div>
    <div class="px-5 fade-up delay-2">
      <div class="section-title" style="padding:0;margin:16px 0 10px"><div class="section-title-bar"></div><h2>التقدم</h2></div>
      <div class="card" style="padding:0">
        <div style="padding:12px;display:flex;justify-content:space-between;border-bottom:1px solid var(--border)">
          <span style="font-size:12px">الدروس المكتملة</span><strong class="font-en tabular">${State.completedLessons.length}</strong>
        </div>
        <div style="padding:12px;display:flex;justify-content:space-between;border-bottom:1px solid var(--border)">
          <span style="font-size:12px">المحفوظات</span><strong class="font-en tabular">${State.bookmarks.length}</strong>
        </div>
        <div style="padding:12px;display:flex;justify-content:space-between">
          <span style="font-size:12px">سجل الحاسبات</span><strong class="font-en tabular">${State.calcHistory.length}</strong>
        </div>
      </div>
    </div>
    <div class="px-5 fade-up delay-3" style="margin-top:16px">
      <button class="btn btn-secondary btn-full" onclick="resetApp()" style="color:var(--danger)">${ic('trash-2',14)} إعادة تعيين التطبيق</button>
    </div>
    <div class="px-5" style="margin-top:20px;text-align:center">
      <p style="font-size:10px;color:var(--text-muted);margin:0">UGC Academy v1.0 · صُمم بعناية ❤️</p>
    </div>
  `;
  refreshIcons();
}

function resetApp() {
  if (confirm('هل أنت متأكد؟ سيتم حذف كل التقدم والمحفوظات.')) {
    localStorage.removeItem('ugc_state');
    location.reload();
  }
}

// ===== DECISION TREES =====
function renderDecisionTrees() {
  $('#page-decision-trees').innerHTML = topBar('شجرات القرار', `${D.DECISION_TREES.length} سيناريو`) + `
    <div class="px-5 fade-up">
      <div class="alert-box info" style="margin:0 0 14px 0">${ic('git-branch',20)}<div><h4>ماذا أفعل لو...؟</h4><p>سيناريوهات حقيقية من الميدان مع خطوات واضحة للوصول للقرار الصحيح.</p></div></div>
      ${D.DECISION_TREES.map((t,i)=>`
        <button class="topic-item fade-up" style="animation-delay:${80*i}ms" onclick="openDecisionTree('${t.id}')">
          <div class="topic-icon" style="background:rgba(39,174,96,0.1);border-color:rgba(39,174,96,0.25)">${ic('git-branch',18)}</div>
          <div style="flex:1;text-align:right">
            <div class="topic-title">${t.title}</div>
            <div class="topic-desc">${t.desc}</div>
          </div>
          ${ic('arrow-left',14)}
        </button>
      `).join('')}
    </div>
  `;
  refreshIcons();
}

let dtState = { tree: null, step: 0, path: [] };

function openDecisionTree(id) {
  const t = D.DECISION_TREES.find(x => x.id === id);
  if (!t) return;
  dtState = { tree: t, step: 0, path: [] };
  renderDTStep();
  goTo('decision-tree');
}

function renderDTStep() {
  const t = dtState.tree;
  const s = t.steps[dtState.step];
  $('#page-decision-tree').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="${dtState.step>0?'dtBack()':'goBack()'}">${ic('arrow-right')}</button>
      <div class="top-bar-title"><span class="top-bar-subtitle">شجرة القرار</span><br><span style="font-size:12px">${t.title}</span></div>
      <button class="icon-btn" onclick="openDecisionTree('${t.id}')">${ic('rotate-ccw',16)}</button>
    </div>
    <div class="px-5 fade-up">
      <div style="display:flex;gap:6px;justify-content:center;margin:16px 0">
        ${t.steps.map((_,i)=>`<div style="width:${i===dtState.step?24:8}px;height:8px;border-radius:4px;background:${i<dtState.step?'var(--success)':i===dtState.step?'var(--primary-600)':'var(--border)'};transition:.3s"></div>`).join('')}
      </div>
      ${dtState.path.length>0?`
        <div class="card" style="background:rgba(39,174,96,.05);border-color:rgba(39,174,96,.2);margin-bottom:14px;padding:12px">
          <p style="font-size:10px;font-weight:700;color:var(--success);margin:0 0 4px">الخطوات السابقة</p>
          ${dtState.path.map((p,i)=>`<div style="display:flex;gap:8px;align-items:center;font-size:11px;margin-bottom:4px"><div style="width:18px;height:18px;border-radius:50%;background:var(--success);color:white;display:flex;align-items:center;justify-content:center;font-size:10px">${i+1}</div><span>${p}</span></div>`).join('')}
        </div>
      `:''}
      <div class="card" style="background:linear-gradient(135deg,var(--primary-500),var(--primary-600));color:white;margin-bottom:16px;padding:16px">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <div style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0">${ic('help-circle',18)}</div>
          <div><p style="font-size:10px;font-weight:700;color:var(--primary-200);margin:0 0 4px">السؤال</p><h2 style="font-size:16px;font-weight:700;margin:0;line-height:1.4">${s.q}</h2></div>
        </div>
        ${s.explain?`<p style="font-size:11px;color:var(--primary-200);margin:10px 0 0;padding-top:10px;border-top:1px solid rgba(255,255,255,.15);line-height:1.6">${s.explain}</p>`:''}
      </div>
      <div>
        ${s.options.map((o,i)=>{
          const sev = o.severity;
          const bg = sev==='safe'?'rgba(39,174,96,.1)':sev==='warn'?'rgba(243,156,18,.1)':sev==='danger'?'rgba(192,57,43,.1)':'var(--surface)';
          const bc = sev==='safe'?'var(--success)':sev==='warn'?'var(--warning)':sev==='danger'?'var(--danger)':'var(--border)';
          return `
            <button class="card card-interactive" style="width:100%;margin-bottom:10px;padding:14px;text-align:right;border:2px solid ${bc};background:${bg}" onclick="dtChoose(${i})">
              <div style="display:flex;align-items:center;gap:10px">
                <div style="width:32px;height:32px;border-radius:10px;background:var(--surface);display:flex;align-items:center;justify-content:center">${ic(sev==='safe'?'check-circle-2':sev==='warn'?'alert-circle':sev==='danger'?'alert-triangle':'circle',18)}</div>
                <div style="flex:1">
                  <p style="font-size:13px;font-weight:700;margin:0">${o.label}</p>
                </div>
                ${ic('chevron-left',14)}
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
  refreshIcons();
}

function dtChoose(optIdx) {
  const s = dtState.tree.steps[dtState.step];
  const opt = s.options[optIdx];
  dtState.path.push(opt.label);
  if (opt.action) {
    // Show action/result
    $('#page-decision-tree').innerHTML = `
      <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
      <div class="top-bar">
        <button class="icon-btn" onclick="openDecisionTree('${dtState.tree.id}')">${ic('rotate-ccw',16)}</button>
        <div class="top-bar-title">النتيجة</div>
        <button class="icon-btn" onclick="goTo('decision-trees')">${ic('x',18)}</button>
      </div>
      <div class="px-5 fade-up" style="padding-top:40px">
        <div style="text-align:center;margin-bottom:24px">
          <div style="width:80px;height:80px;border-radius:50%;background:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 16px">${ic('check',36)}</div>
          <h1 style="font-size:20px;font-weight:700;margin:0 0 8px">الإجراء المطلوب</h1>
        </div>
        <div class="card" style="background:var(--primary-50);border-color:var(--primary-100);padding:16px;margin-bottom:14px">
          <p style="font-size:13px;line-height:1.8;margin:0">${opt.action}</p>
        </div>
        <div class="card" style="padding:12px;margin-bottom:14px">
          <p style="font-size:10px;font-weight:700;color:var(--text-muted);margin:0 0 8px">مسار القرار</p>
          ${dtState.path.map((p,i)=>`<div style="display:flex;gap:8px;align-items:center;font-size:11px;margin-bottom:4px"><div style="width:18px;height:18px;border-radius:50%;background:var(--success);color:white;display:flex;align-items:center;justify-content:center;font-size:10px">${i+1}</div><span>${p}</span></div>`).join('')}
        </div>
        <button class="btn btn-primary btn-full" onclick="openDecisionTree('${dtState.tree.id}')">${ic('rotate-ccw',14)} ابدأ من جديد</button>
        <button class="btn btn-secondary btn-full" onclick="goTo('decision-trees')" style="margin-top:8px">${ic('arrow-right',14)} كل شجرات القرار</button>
      </div>
    `;
    refreshIcons();
  } else if (opt.next !== undefined) {
    dtState.step = opt.next;
    renderDTStep();
  }
}

function dtBack() {
  dtState.path.pop();
  dtState.step = Math.max(0, dtState.step - 1);
  renderDTStep();
}

// ===== RED FLAGS =====
function renderRedFlags() {
  $('#page-red-flags').innerHTML = topBar('الإشارات الحمراء', 'Red Flags Library') + `
    <div class="px-5 fade-up">
      <div class="alert-box danger" style="margin:0 0 14px 0">${ic('alert-triangle',20)}<div><h4>علامات يجب الانتباه لها</h4><p>إشارات تحذيرية من الميدان — مع الأسباب والإجراءات المطلوبة.</p></div></div>
      ${D.RED_FLAGS.map((f,i)=>{
        const sev = f.severity;
        const color = sev==='critical'?'var(--danger)':sev==='high'?'var(--warning)':'var(--info)';
        return `
          <div class="card fade-up" style="animation-delay:${50*i}ms;margin-bottom:10px;padding:14px;border-right:3px solid ${color}">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
              <h3 style="font-size:13px;font-weight:700;margin:0;flex:1">${f.title}</h3>
              <span class="badge ${sev==='critical'?'badge-danger':sev==='high'?'badge-warning':'badge-info'}" style="white-space:nowrap">${sev==='critical'?'حرج':sev==='high'?'عالي':'متوسط'}</span>
            </div>
            <p style="font-size:10px;color:var(--text-muted);margin:0 0 6px">${f.category}</p>
            <p style="font-size:12px;color:var(--text);line-height:1.7;margin:0">${f.desc}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
  refreshIcons();
}

// ===== TEMPLATES =====
function renderTemplates() {
  $('#page-templates').innerHTML = topBar('قوالب التواصل', `${D.TEMPLATES.length} قالب`) + `
    <div class="px-5 fade-up">
      <div class="alert-box info" style="margin:0 0 14px 0">${ic('file-text',20)}<div><h4>قوالب جاهزة للاستخدام</h4><p>نماذج احترافية للمراسلات الرسمية. اضغط القالب لعرضه ونسخه.</p></div></div>
      ${D.TEMPLATES.map((t,i)=>`
        <button class="topic-item fade-up" style="animation-delay:${60*i}ms" onclick="openTemplate(${i})">
          <div class="topic-icon" style="background:rgba(24,160,133,.1);border-color:rgba(24,160,133,.25)">${ic(t.type==='formal'?'mail':t.type==='report'?'file-spreadsheet':'file-text',18)}</div>
          <div style="flex:1;text-align:right">
            <div class="topic-title">${t.title}</div>
            <div class="topic-desc">${t.type==='formal'?'رسمي':'تقرير'}</div>
          </div>
          ${ic('arrow-left',14)}
        </button>
      `).join('')}
    </div>
  `;
  refreshIcons();
}

function openTemplate(idx) {
  const t = D.TEMPLATES[idx];
  const modal = $('#modal-backdrop');
  const content = $('#modal-content');
  content.innerHTML = `
    <div class="modal-handle"></div>
    <h2 style="font-size:16px;font-weight:700;margin:0 0 12px">${t.title}</h2>
    <div class="card" style="background:var(--bg-alt);padding:14px;margin-bottom:14px">
      <pre style="font-size:12px;line-height:1.8;white-space:pre-wrap;margin:0;font-family:inherit;direction:rtl;text-align:right">${t.template}</pre>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-secondary" style="flex:1" onclick="hideModal()">${ic('x',14)} إغلاق</button>
      <button class="btn btn-primary" style="flex:1" onclick="copyTemplate(${idx})">${ic('copy',14)} نسخ</button>
    </div>
  `;
  modal.classList.add('active');
  refreshIcons();
}

function copyTemplate(idx) {
  const t = D.TEMPLATES[idx];
  navigator.clipboard.writeText(t.template).then(() => toast('تم نسخ القالب', 'check-circle'));
}

function hideModal() { $('#modal-backdrop').classList.remove('active'); }

// ===== EMERGENCY =====
function renderEmergency() {
  $('#page-emergency').innerHTML = topBar('بروتوكولات الطوارئ', `${D.EMERGENCY.length} حالة`) + `
    <div class="px-5 fade-up">
      <div class="alert-box danger" style="margin:0 0 14px 0">${ic('siren',20)}<div><h4>إجراءات الطوارئ</h4><p>خطوات واضحة للتعامل مع الحوادث. احفظ أرقام الطوارئ: <strong>997 إسعاف</strong> · <strong>998 دفاع مدني</strong>.</p></div></div>
      ${D.EMERGENCY.map((e,i)=>`
        <div class="card fade-up" style="animation-delay:${80*i}ms;margin-bottom:12px;padding:14px">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <div style="width:40px;height:40px;border-radius:12px;background:rgba(192,57,43,.1);display:flex;align-items:center;justify-content:center">${ic(e.icon,20)}</div>
            <h3 style="font-size:14px;font-weight:700;margin:0;flex:1">${e.title}</h3>
          </div>
          <div style="padding-top:10px;border-top:1px solid var(--border)">
            ${e.steps.map((s,si)=>`
              <div style="display:flex;gap:10px;margin-bottom:8px">
                <div style="width:22px;height:22px;border-radius:50%;background:var(--danger);color:white;display:flex;align-items:center;justify-content:center;font-family:Inter;font-weight:700;font-size:11px;flex-shrink:0">${si+1}</div>
                <p style="font-size:12px;margin:0;line-height:1.6;flex:1">${s}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  refreshIcons();
}

// ===== GAP ANALYSIS =====
function renderGapAnalysisIntro() {
  $('#page-gap-analysis').innerHTML = topBar('الاختبار التشخيصي', 'Gap Analysis') + `
    <div class="px-5 fade-up" style="padding-top:20px">
      <div style="text-align:center;margin-bottom:24px">
        <div style="width:80px;height:80px;border-radius:20px;background:linear-gradient(135deg,var(--primary-500),var(--primary-700));display:flex;align-items:center;justify-content:center;margin:0 auto 16px;color:white">${ic('target',40)}</div>
        <h1 style="font-size:22px;font-weight:700;margin:0 0 8px">اكتشف فجواتك المعرفية</h1>
        <p style="font-size:13px;color:var(--text-muted);max-width:300px;margin:0 auto">اختبار سريع يقيس مستواك ويرسم لك خارطة طريق مخصصة</p>
      </div>
      <div class="card" style="margin-bottom:10px;padding:12px;display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-alt);display:flex;align-items:center;justify-content:center">${ic('clock',18)}</div>
        <div><p style="font-size:13px;font-weight:700;margin:0">10-15 دقيقة</p><p style="font-size:11px;color:var(--text-muted);margin:0">مدة الاختبار</p></div>
      </div>
      <div class="card" style="margin-bottom:10px;padding:12px;display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-alt);display:flex;align-items:center;justify-content:center">${ic('list-checks',18)}</div>
        <div><p style="font-size:13px;font-weight:700;margin:0">${D.QUIZ_QUESTIONS.module12.length} أسئلة</p><p style="font-size:11px;color:var(--text-muted);margin:0">عينة تشخيصية</p></div>
      </div>
      <div class="card" style="margin-bottom:24px;padding:12px;display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-alt);display:flex;align-items:center;justify-content:center">${ic('chart-bar',18)}</div>
        <div><p style="font-size:13px;font-weight:700;margin:0">تقرير مرئي + توصيات</p><p style="font-size:11px;color:var(--text-muted);margin:0">خارطة طريق شخصية</p></div>
      </div>
      <button class="btn btn-primary btn-full" onclick="startQuiz()">${ic('play',16)} ابدأ الاختبار</button>
    </div>
  `;
  refreshIcons();
}

// ===== QUIZ =====
let quizState = { qs: [], idx: 0, answers: [], score: 0 };
function startQuiz() {
  quizState = { qs: D.QUIZ_QUESTIONS.module12, idx: 0, answers: [], score: 0 };
  renderQuizQuestion();
  goTo('quiz-question');
}

function renderQuizQuestion() {
  const q = quizState.qs[quizState.idx];
  $('#page-quiz-question').innerHTML = `
    <div class="status-bar"><span class="font-en tabular">9:41</span><div class="status-bar-icons">${ic('signal',14)}${ic('wifi',14)}${ic('battery-full',16)}</div></div>
    <div class="top-bar">
      <button class="icon-btn" onclick="goTo('gap-analysis')">${ic('x',18)}</button>
      <div class="top-bar-title"><span class="font-en tabular">${quizState.idx+1} / ${quizState.qs.length}</span></div>
      <div style="width:40px"></div>
    </div>
    <div class="px-5">
      <div class="progress-bar-track" style="margin:8px 0 20px"><div class="progress-bar-fill" style="width:${((quizState.idx+1)/quizState.qs.length)*100}%"></div></div>
    </div>
    <div class="px-5 fade-up">
      <h2 style="font-size:18px;font-weight:700;line-height:1.5;margin:0 0 20px">${q.q}</h2>
      <div id="quiz-options">
        ${q.options.map((o,i)=>`
          <button class="quiz-option" data-idx="${i}" onclick="selectQuizOption(${i})">
            <div class="quiz-letter">${['A','B','C','D'][i]}</div>
            <p style="margin:0;font-size:13px;font-weight:600;flex:1">${o}</p>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="px-5" style="margin-top:20px">
      <button id="quiz-next-btn" class="btn btn-primary btn-full" onclick="nextQuiz()" disabled style="opacity:.5">${ic('arrow-left',16)} التالي</button>
    </div>
  `;
  refreshIcons();
}

function selectQuizOption(idx) {
  const q = quizState.qs[quizState.idx];
  $$('.quiz-option').forEach(o => {
    o.classList.remove('selected', 'correct', 'wrong');
    const oi = parseInt(o.dataset.idx);
    if (oi === idx) o.classList.add(idx === q.correct ? 'correct' : 'wrong');
    else if (oi === q.correct) o.classList.add('correct');
  });
  quizState.answers[quizState.idx] = idx;
  if (idx === q.correct) quizState.score++;
  $('#quiz-next-btn').disabled = false;
  $('#quiz-next-btn').style.opacity = 1;
}

function nextQuiz() {
  if (quizState.idx < quizState.qs.length - 1) {
    quizState.idx++;
    renderQuizQuestion();
  } else {
    renderQuizResult();
  }
}

function renderQuizResult() {
  const total = quizState.qs.length;
  const pct = Math.round((quizState.score / total) * 100);
  $('#page-quiz-question').innerHTML = topBar('النتيجة') + `
    <div class="px-5 fade-up" style="padding-top:30px">
      <div style="text-align:center;margin-bottom:24px">
        <div style="position:relative;width:140px;height:140px;margin:0 auto 20px">
          <svg width="140" height="140" viewBox="0 0 100 100" style="transform:rotate(-90deg)">
            <circle cx="50" cy="50" r="45" stroke="var(--border)" stroke-width="8" fill="none"/>
            <circle cx="50" cy="50" r="45" stroke="${pct>=70?'var(--success)':pct>=50?'var(--warning)':'var(--danger)'}" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="${283-(283*pct/100)}"/>
          </svg>
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
            <span class="font-en tabular" style="font-size:36px;font-weight:700">${pct}</span>
            <span style="font-size:12px;color:var(--text-muted)">%</span>
          </div>
        </div>
        <h1 style="font-size:22px;font-weight:700;margin:0 0 8px">${pct>=70?'أحسنت! 🎉':pct>=50?'جيد! 👍':'بحاجة للمراجعة 📚'}</h1>
        <p style="font-size:13px;color:var(--text-muted)">${quizState.score} من ${total} إجابة صحيحة</p>
      </div>
      ${quizState.qs.map((q,i)=>{
        const ans = quizState.answers[i];
        const correct = ans === q.correct;
        return `
          <div class="card" style="margin-bottom:10px;padding:12px;border-right:3px solid ${correct?'var(--success)':'var(--danger)'}">
            <div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px">
              ${ic(correct?'check-circle-2':'x-circle',18)}
              <p style="font-size:12px;font-weight:700;margin:0;flex:1">${q.q}</p>
            </div>
            <p style="font-size:11px;margin:0 0 4px;color:${correct?'var(--success)':'var(--danger)'}">إجابتك: ${q.options[ans]}</p>
            ${!correct?`<p style="font-size:11px;margin:0 0 6px;color:var(--success)">الصحيح: ${q.options[q.correct]}</p>`:''}
            <p style="font-size:11px;color:var(--text-muted);margin:0;line-height:1.6">${q.explain}</p>
          </div>
        `;
      }).join('')}
      <button class="btn btn-primary btn-full" onclick="goTo('home')" style="margin-top:20px">${ic('home',14)} العودة للرئيسية</button>
    </div>
  `;
  State.quizResults = State.quizResults || {};
  State.quizResults[Date.now()] = { score: pct, total, date: Date.now() };
  State.save();
  refreshIcons();
}

// ===== SEARCH =====
function renderSearch() {
  $('#page-search').innerHTML = topBar('البحث') + `
    <div class="px-5 fade-up">
      <div style="position:relative;margin-bottom:16px">
        <div style="position:absolute;right:14px;top:50%;transform:translateY(-50%);pointer-events:none">${ic('search',16)}</div>
        <input type="text" id="global-search" placeholder="ابحث في كل شي..." class="input-field" style="padding-right:44px" oninput="globalSearch(this.value)" autofocus/>
      </div>
      <div id="search-results">
        <p style="text-align:center;color:var(--text-muted);font-size:12px;padding:40px 20px">ابدأ بالكتابة للبحث في الموديولات، المكتبة، والقاموس...</p>
      </div>
    </div>
  `;
  $('#global-search')?.focus();
  refreshIcons();
}

function globalSearch(q) {
  if (!q || q.length < 2) { $('#search-results').innerHTML = ''; return; }
  const ql = q.toLowerCase();
  const results = [];
  D.MODULES.forEach(m => { if (m.title.includes(q) || m.desc.includes(q)) results.push({type:'module',data:m}); });
  D.CATEGORIES.forEach(c => {
    if (c.title.includes(q)) results.push({type:'category',data:c});
    c.subsections.forEach(s => s.topics.forEach((t,i) => { if (t.toLowerCase().includes(ql)) results.push({type:'topic',cat:c,sub:s,topic:t,idx:i}); }));
  });
  D.GLOSSARY.forEach(g => { if (g.ar.includes(q) || g.en.toLowerCase().includes(ql)) results.push({type:'glossary',data:g}); });

  $('#search-results').innerHTML = results.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${ic('search-x',32)}</div><h3>لا نتائج</h3></div>` : `
    <p style="font-size:12px;color:var(--text-muted);margin:0 0 12px"><strong>${results.length}</strong> نتيجة</p>
    ${results.slice(0,25).map(r=>{
      if (r.type === 'module') return `<button class="topic-item" onclick="State.currentModule=${r.data.id};State.save();goTo('module-detail')"><div class="topic-icon">${ic('book-open',18)}</div><div style="flex:1;text-align:right"><div class="topic-title">${r.data.title}</div><div class="topic-desc">موديول · ${r.data.desc}</div></div>${ic('arrow-left',14)}</button>`;
      if (r.type === 'category') return `<button class="topic-item" onclick="openCategory('${r.data.id}')"><div class="topic-icon">${ic('folder',18)}</div><div style="flex:1;text-align:right"><div class="topic-title">${r.data.title}</div><div class="topic-desc">قسم · ${r.data.desc}</div></div>${ic('arrow-left',14)}</button>`;
      if (r.type === 'topic') return `<button class="topic-item" onclick="openTopic('${r.sub.id}',${r.idx},'${r.cat.id}')"><div class="topic-icon">${ic('file-text',18)}</div><div style="flex:1;text-align:right"><div class="topic-title">${r.topic}</div><div class="topic-desc">${r.cat.title} › ${r.sub.title}</div></div>${ic('arrow-left',14)}</button>`;
      if (r.type === 'glossary') return `<div class="card" style="margin-bottom:10px;padding:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><strong style="font-size:13px">${r.data.ar}</strong><span class="font-en" style="font-size:10px;color:var(--text-muted)">${r.data.en}</span></div><p style="font-size:11px;color:var(--text-muted);margin:0">${r.data.def}</p></div>`;
    }).join('')}
  `;
  refreshIcons();
}

// ===== INIT =====
function init() {
  State.load();
  document.documentElement.setAttribute('data-theme', State.theme);
  goTo('home', { replace: true });
  State.navStack = ['home'];
  refreshIcons();

  // زر الرجوع في الجوال
  history.pushState({ page: 'home' }, '');
  window.addEventListener('popstate', function(e) {
    if (State.navStack.length > 1) {
      goBack();
      history.pushState({ page: State.currentPage }, '');
    } else {
      history.pushState({ page: 'home' }, '');
    }
  });
}

// Expose globals for inline handlers
Object.assign(window, {
  goTo, goBack, toggleTheme, toggleBookmark,
  openModule, openLesson, completeLesson,
  openCategory, openTopic,
  openCalculator, runCalc,
  renderGlossary, searchGlossary,
  openBookmark, resetApp,
  openDecisionTree, dtChoose, dtBack,
  openTemplate, copyTemplate, hideModal,
  startQuiz, selectQuizOption, nextQuiz,
  searchLibrary, globalSearch, State
});

// Boot
document.addEventListener('DOMContentLoaded', init);
