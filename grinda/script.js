"use strict";
(() => {
  const T = {
    ro: {
      n1: "Servicii",
      n2: "Calculator",
      n3: "Lucrări",
      n4: "Contact",
      h1: "Renovăm apartamente și case. Prețul îl știi din start.",
      hp: "Facem reparații la cheie în Chișinău și împrejurimi: de la zugrăveli până la instalații. Calculează costul aproximativ online, iar prețul exact îl afli după vizita meșterului.",
      c1: "Calculează costul",
      c2: "Cere o ofertă",
      b1: "Evaluare gratuită",
      b2: "Garanție 2 ani",
      b3: "Termen fixat în contract",
      s_t: "Ce facem",
      s_p: "O singură echipă pentru toată renovarea: nu cauți separat electrician, instalator și zugrav.",
      from: "de la",
      k_t: "Calculator de cost",
      k_p: "Alege parametrii și vezi imediat costul aproximativ și durata lucrărilor.",
      k_obj: "Tipul obiectului",
      k_type: "Tipul renovării",
      k_area: "Suprafața",
      k_ext: "Lucrări suplimentare",
      k_mat: "Materiale",
      r_price: "Cost aproximativ",
      r_time: (w) => `≈ ${w} săpt.`,
      r_m2: (p) => `${p} lei/m²`,
      r_send: "Trimite calculul",
      r_note:
        "Prețuri orientative pentru demonstrație. Prețul exact îl afli după vizita la obiect.",
      bars: ["Manoperă", "Materiale", "Lucrări suplimentare"],
      w_t: "Înainte și după",
      w_p: "Trage de mâner ca să compari.",
      w_b: "Înainte",
      w_a: "După",
      p_t: "Cum lucrăm",
      f_t: "Cere o ofertă",
      f_p: "Lasă datele și te sunăm în aceeași zi lucrătoare.",
      f_h: "Luni – Sâmbătă, 9:00 – 19:00",
      f_name: "Nume",
      f_phone: "Telefon",
      f_obj: "Obiect",
      f_msg: "Ce trebuie făcut?",
      f_send: "Trimite cererea",
      e_fill: "Completează numele și telefonul.",
      ok: (n) => `Mulțumim, ${n}! Cererea a fost trimisă. Te sunăm în curând.`,
      demo: "Proiect demonstrativ. Compania este fictivă.",
      objs: ["Apartament", "Casă", "Birou"],
      types: [
        ["Cosmetică", "Zugrăvit, tapet, parchet laminat, fără demolări."],
        ["Standard", "Nivelare pereți, gresie, uși noi, tavane."],
        ["Capitală", "Totul de la zero: demolări, instalații, electrică, finisaje."],
      ],
      exts: [
        "Electrică nouă",
        "Instalații sanitare",
        "Încălzire în pardoseală",
        "Proiect de design",
      ],
      mats: ["Cu materiale", "Doar manoperă"],
      svc: [
        ["Renovare la cheie", "Un singur contract, o echipă, un termen.", 900],
        ["Băi și grupuri sanitare", "Gresie, faianță, instalații, mobilier.", 1400],
        ["Bucătării", "Pereți, pardoseală, iluminat, montaj mobilă.", 1100],
        ["Instalații electrice", "Cablare nouă, tablou, prize și iluminat.", 350],
        ["Instalații sanitare", "Țevi, canalizare, boiler, încălzire.", 300],
        ["Zugrăveli și finisaje", "Pereți drepți, vopsea, tapet, tavane.", 180],
      ],
      works: ["Living", "Bucătărie", "Baie"],
      steps: [
        ["Vizită și măsurători", "Venim la obiect, măsurăm și discutăm ce vrei."],
        ["Ofertă și contract", "Primești oferta de preț detaliată și termenul fixat."],
        ["Lucrări", "Echipa lucrează după grafic, iar tu primești poze săptămânal."],
        ["Predare", "Verificăm totul împreună și semnăm actul de predare."],
      ],
    },
    ru: {
      n1: "Услуги",
      n2: "Калькулятор",
      n3: "Работы",
      n4: "Контакты",
      h1: "Ремонт квартир и домов. Цену знаете сразу.",
      hp: "Делаем ремонт под ключ в Кишинёве и пригородах: от покраски до сантехники. Рассчитайте примерную стоимость онлайн, а точную цену узнаете после выезда мастера.",
      c1: "Рассчитать стоимость",
      c2: "Получить предложение",
      b1: "Бесплатная оценка",
      b2: "Гарантия 2 года",
      b3: "Срок фиксируем в договоре",
      s_t: "Что мы делаем",
      s_p: "Одна команда на весь ремонт, не нужно искать отдельно электрика, сантехника и маляра.",
      from: "от",
      k_t: "Калькулятор стоимости",
      k_p: "Выберите параметры и сразу увидите примерную стоимость и сроки.",
      k_obj: "Тип объекта",
      k_type: "Тип ремонта",
      k_area: "Площадь",
      k_ext: "Дополнительные работы",
      k_mat: "Материалы",
      r_price: "Примерная стоимость",
      r_time: (w) => `≈ ${w} нед.`,
      r_m2: (p) => `${p} лей/м²`,
      r_send: "Отправить расчёт",
      r_note: "Цены ориентировочные, для демонстрации. Точную цену скажем после выезда на объект.",
      bars: ["Работа", "Материалы", "Доп. работы"],
      w_t: "До и после",
      w_p: "Потяните ползунок, чтобы сравнить.",
      w_b: "До",
      w_a: "После",
      p_t: "Как мы работаем",
      f_t: "Получить предложение",
      f_p: "Оставьте контакты, и мы перезвоним в тот же рабочий день.",
      f_h: "Пн – Сб, 9:00 – 19:00",
      f_name: "Имя",
      f_phone: "Телефон",
      f_obj: "Объект",
      f_msg: "Что нужно сделать?",
      f_send: "Отправить заявку",
      e_fill: "Заполните имя и телефон.",
      ok: (n) => `Спасибо, ${n}! Заявка отправлена. Скоро перезвоним.`,
      demo: "Демо-проект, компания вымышленная.",
      objs: ["Квартира", "Дом", "Офис"],
      types: [
        ["Косметический", "Покраска, обои, ламинат, без демонтажа."],
        ["Стандартный", "Выравнивание стен, плитка, новые двери, потолки."],
        ["Капитальный", "Всё с нуля: демонтаж, сантехника, электрика, отделка."],
      ],
      exts: ["Новая электрика", "Сантехника", "Тёплый пол", "Дизайн-проект"],
      mats: ["С материалами", "Только работа"],
      svc: [
        ["Ремонт под ключ", "Один договор, одна команда, один срок.", 900],
        ["Ванные и санузлы", "Плитка, сантехника, мебель.", 1400],
        ["Кухни", "Стены, пол, освещение, монтаж мебели.", 1100],
        ["Электрика", "Новая проводка, щиток, розетки и свет.", 350],
        ["Сантехника", "Трубы, канализация, бойлер, отопление.", 300],
        ["Покраска и отделка", "Ровные стены, краска, обои, потолки.", 180],
      ],
      works: ["Гостиная", "Кухня", "Ванная"],
      steps: [
        ["Выезд и замеры", "Приезжаем на объект, замеряем и обсуждаем задачу."],
        ["Цена и договор", "Вы получаете подробный расчёт цены и фиксированный срок."],
        ["Работы", "Бригада работает по графику, вы получаете фото каждую неделю."],
        ["Сдача", "Проверяем всё вместе и подписываем акт."],
      ],
    },
    en: {
      n1: "Services",
      n2: "Calculator",
      n3: "Projects",
      n4: "Contact",
      h1: "We renovate flats and houses. You know the price up front.",
      hp: "Turnkey renovation in Chișinău and nearby: from painting to plumbing. Get a rough cost online, and the exact estimate after our foreman visits.",
      c1: "Calculate the cost",
      c2: "Request a quote",
      b1: "Free estimate",
      b2: "2-year warranty",
      b3: "Deadline fixed in the contract",
      s_t: "What we do",
      s_p: "One team for the whole job, so no hunting for a separate electrician, plumber and painter.",
      from: "from",
      k_t: "Cost calculator",
      k_p: "Pick the options and see the rough cost and timeline right away.",
      k_obj: "Property type",
      k_type: "Renovation type",
      k_area: "Floor area",
      k_ext: "Extra work",
      k_mat: "Materials",
      r_price: "Estimated cost",
      r_time: (w) => `≈ ${w} wk`,
      r_m2: (p) => `${p} MDL/m²`,
      r_send: "Send this estimate",
      r_note: "Sample prices for demonstration. The exact estimate comes after a site visit.",
      bars: ["Labour", "Materials", "Extra work"],
      w_t: "Before and after",
      w_p: "Drag the handle to compare.",
      w_b: "Before",
      w_a: "After",
      p_t: "How we work",
      f_t: "Request a quote",
      f_p: "Leave your details and we'll call you the same working day.",
      f_h: "Mon – Sat, 9:00 – 19:00",
      f_name: "Name",
      f_phone: "Phone",
      f_obj: "Property",
      f_msg: "What needs doing?",
      f_send: "Send request",
      e_fill: "Please fill in your name and phone.",
      ok: (n) => `Thanks, ${n}! Your request is sent. We'll call you soon.`,
      demo: "Demo project. The company is fictional.",
      objs: ["Apartment", "House", "Office"],
      types: [
        ["Cosmetic", "Paint, wallpaper, laminate, no demolition."],
        ["Standard", "Wall levelling, tiles, new doors, ceilings."],
        ["Full", "Everything from scratch: demolition, plumbing, wiring, finishes."],
      ],
      exts: ["New wiring", "Plumbing", "Underfloor heating", "Design project"],
      mats: ["With materials", "Labour only"],
      svc: [
        ["Turnkey renovation", "One contract, one team, one deadline.", 900],
        ["Bathrooms", "Tiles, plumbing, fittings.", 1400],
        ["Kitchens", "Walls, floors, lighting, cabinet fitting.", 1100],
        ["Electrical", "New wiring, panel, sockets and lights.", 350],
        ["Plumbing", "Pipes, drains, boiler, heating.", 300],
        ["Painting & finishes", "Straight walls, paint, wallpaper, ceilings.", 180],
      ],
      works: ["Living room", "Kitchen", "Bathroom"],
      steps: [
        ["Visit & measuring", "We come over, measure and talk through what you want."],
        ["Estimate & contract", "You get a detailed estimate and a fixed deadline."],
        ["The work", "The crew follows the schedule; you get photos every week."],
        ["Handover", "We check everything together and sign off."],
      ],
    },
  };
  // prices for the calculator (MDL)
  const BASE = [1100, 2100, 3600],
    WEEKS = [0.06, 0.11, 0.17],
    OBJK = [1, 1.12, 0.95],
    LAB = 0.42;
  const EXT = [(a) => a * 380, (a) => 9000 + a * 60, (a) => a * 0.35 * 650, (a) => a * 180];
  const ICONS = [
    '<path d="M8 22l15-12 15 12v16H8z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M19 38V28h8v10" stroke="#fff" stroke-width="3" fill="none"/>',
    '<path d="M9 24h28v4a8 8 0 01-8 8H17a8 8 0 01-8-8z" fill="#fff"/><path d="M13 24V13a4 4 0 018 0" stroke="#fff" stroke-width="3" fill="none"/>',
    '<rect x="10" y="12" width="26" height="24" rx="3" fill="none" stroke="#fff" stroke-width="3"/><path d="M10 21h26M16 16h4" stroke="#fff" stroke-width="3"/>',
    '<path d="M25 8L13 26h9l-3 12 13-19h-9z" fill="#fff"/>',
    '<path d="M10 16h14a6 6 0 016 6v14" stroke="#fff" stroke-width="5" fill="none"/><path d="M26 36h8" stroke="#fff" stroke-width="3"/>',
    '<rect x="10" y="10" width="22" height="11" rx="3" fill="#fff"/><path d="M32 15h4v10H22v12" stroke="#fff" stroke-width="3" fill="none"/>',
  ];
  const STEPI = [
    '<circle cx="20" cy="17" r="8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 25v10" stroke="currentColor" stroke-width="3"/>',
    '<rect x="9" y="6" width="22" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><path d="M14 15h12M14 21h12M14 27h7" stroke="currentColor" stroke-width="3"/>',
    '<path d="M8 32l14-14M20 10l10 10-4 4-10-10z" stroke="currentColor" stroke-width="3" fill="none"/>',
    '<path d="M9 21l7 7 15-16" stroke="currentColor" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  ];

  let lang = "ro";
  try {
    lang = localStorage.getItem("grinda-lang") || lang;
  } catch (e) {}
  const S = {
    obj: 0,
    typ: 1,
    area: 60,
    ext: [false, false, false, false],
    mat: 0,
    work: 0,
    fobj: 0,
  };
  const $ = (s) => document.querySelector(s);
  const money = (n) => Math.round(n / 100) * 100;
  const fmtN = (n) => money(n).toLocaleString("ro-RO").replace(/\./g, " ");

  function chips(el, list, cur, key) {
    el.innerHTML = list
      .map(
        (x, i) =>
          `<button type="button" aria-pressed="${i === cur}" data-k="${key}" data-v="${i}">${x}</button>`,
      )
      .join("");
  }

  function calc() {
    const t = T[lang],
      a = S.area;
    let base = a * BASE[S.typ] * OBJK[S.obj];
    let extra = S.ext.reduce((s, on, i) => s + (on ? EXT[i](a) : 0), 0);
    let labour = base * LAB,
      mat = base - labour;
    if (S.mat === 1) {
      mat = 0;
      extra *= 0.55;
    }
    const total = labour + mat + extra;
    const wk = Math.max(
      1,
      Math.round(a * WEEKS[S.typ] * (1 + S.ext.filter(Boolean).length * 0.12)),
    );
    $("#rPrice").innerHTML =
      `<span>${fmtN(total * 0.9)}</span> – <span>${fmtN(total * 1.1)}</span> <small>${lang === "en" ? "MDL" : "lei"}</small>`;
    $("#rTime").textContent = t.r_time(wk);
    $("#rM2").textContent = t.r_m2(fmtN(total / a));
    const parts = [labour, mat, extra];
    $("#rBars").innerHTML = parts
      .map(
        (v, i) =>
          `<div class="bar"><div class="t"><span>${t.bars[i]}</span><b>${fmtN(v)}</b></div><div class="tr"><div class="fl" style="width:${total ? (v / total) * 100 : 0}%"></div></div></div>`,
      )
      .join("");
    return { total, wk };
  }
  function drawCalc() {
    const t = T[lang];
    chips($("#obj"), t.objs, S.obj, "obj");
    chips(
      $("#typ"),
      t.types.map((x) => x[0]),
      S.typ,
      "typ",
    );
    $("#typDesc").textContent = t.types[S.typ][1];
    chips($("#mat"), t.mats, S.mat, "mat");
    $("#ext").innerHTML = t.exts
      .map(
        (x, i) =>
          `<label><input type="checkbox" data-e="${i}" ${S.ext[i] ? "checked" : ""}>${x}</label>`,
      )
      .join("");
    calc();
  }
  document.querySelectorAll("#obj,#typ,#mat").forEach((el) =>
    el.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      S[b.dataset.k] = +b.dataset.v;
      if (b.dataset.k === "obj") S.fobj = S.obj;
      drawCalc();
      pickText();
    }),
  );
  $("#ext").addEventListener("change", (e) => {
    S.ext[+e.target.dataset.e] = e.target.checked;
    calc();
  });
  function setArea(v) {
    v = Math.min(250, Math.max(10, Math.round(+v || 10)));
    S.area = v;
    $("#areaR").value = v;
    calc();
  }
  $("#areaR").addEventListener("input", (e) => {
    S.area = +e.target.value;
    $("#areaN").value = S.area;
    calc();
  });
  $("#areaN").addEventListener("input", (e) => {
    const v = +e.target.value;
    if (v >= 10 && v <= 250) {
      S.area = v;
      $("#areaR").value = v;
      calc();
    }
  });
  $("#areaN").addEventListener("change", (e) => {
    setArea(e.target.value);
    e.target.value = S.area;
  });

  $("#sendCalc").addEventListener("click", () => {
    const t = T[lang],
      r = calc(),
      ex = t.exts.filter((x, i) => S.ext[i]);
    $("#fMsg").value =
      `${t.objs[S.obj]}, ${S.area} m², ${t.types[S.typ][0]}${ex.length ? " + " + ex.join(", ") : ""}. ${t.mats[S.mat]}. ${t.r_price}: ${$("#rPrice").textContent}, ${t.r_time(r.wk)}`;
    S.fobj = S.obj;
    pickText();
  });

  // before / after
  const PAL = [
    { wall: "#efe9df", acc: "#2346c9", floor: "#c49a6c" },
    { wall: "#f3f1ec", acc: "#ff5a4e", floor: "#9c8a78" },
    { wall: "#e8eef0", acc: "#3a8f9a", floor: "#d9dfe2" },
  ];
  function before(k) {
    const cracks = [
      ["M120 80l30 60-20 40 25 50", "M560 60l-20 50 30 40"],
      ["M300 70l20 50-25 30", "M650 120l-30 40 10 60"],
      ["M200 60l25 40-20 50 15 30", "M600 90l-25 60"],
    ][k];
    return `<rect width="800" height="360" fill="#a9a194"/><rect y="360" width="800" height="140" fill="#77706a"/>
  ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M0 ${380 + i * 20}H800" stroke="#5f5953" stroke-width="2"/>`).join("")}
  <rect x="80" y="160" width="160" height="70" fill="#c2baab" opacity=".7"/><rect x="520" y="230" width="120" height="90" fill="#8f877a" opacity=".6"/>
  ${cracks.map((c) => `<path d="${c}" stroke="#4e4740" stroke-width="3" fill="none"/>`).join("")}
  <rect x="330" y="90" width="150" height="170" fill="#9fb3bd" stroke="#6b5e4e" stroke-width="10"/><path d="M405 90v170M330 175h150" stroke="#6b5e4e" stroke-width="8"/>
  <path d="M400 0v40" stroke="#333" stroke-width="3"/><circle cx="400" cy="48" r="10" fill="#fff6c9"/>
  <path d="M0 360H800" stroke="#5a534c" stroke-width="6"/>
  <g transform="translate(600 300)"><rect width="70" height="60" fill="#8a7a62"/><path d="M0 20h70" stroke="#6b5e4e" stroke-width="3"/></g>
  <path d="M90 420l60-10 30 20" stroke="#3f3a35" stroke-width="4" fill="none"/>`;
  }
  function after(k) {
    const p = PAL[k];
    let s = `<rect width="800" height="360" fill="${p.wall}"/><rect y="360" width="800" height="140" fill="${p.floor}"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${i * 110} 360L${i * 110 - 60} 500" stroke="#0002" stroke-width="2"/>`).join("")}
  <rect x="330" y="90" width="150" height="170" fill="#bfe0f2" stroke="#fff" stroke-width="10"/><path d="M405 90v170" stroke="#fff" stroke-width="6"/>
  <path d="M330 90h150v-6H330z" fill="#ddd"/><path d="M0 356H800" stroke="#fff" stroke-width="8"/>`;
    if (k === 0) {
      s += `<rect x="0" y="0" width="230" height="360" fill="${p.acc}"/>
   <g transform="translate(470 270)"><rect x="0" y="20" width="260" height="70" rx="18" fill="#59606e"/><rect x="10" y="0" width="240" height="50" rx="16" fill="#6c7484"/><rect x="0" y="85" width="14" height="20" fill="#333"/><rect x="246" y="85" width="14" height="20" fill="#333"/></g>
   <path d="M120 360V140" stroke="#222" stroke-width="5"/><path d="M90 140h60l-12-40h-36z" fill="#ffe2a8"/>
   <rect x="250" y="120" width="60" height="80" fill="#fff" stroke="#222" stroke-width="5"/><rect x="262" y="132" width="36" height="56" fill="${p.acc}" opacity=".5"/>
   <path d="M40 360c0-50 30-70 30-120 0 50 30 70 30 120z" fill="#3e8d5a"/>`;
    }
    if (k === 1) {
      s += `${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => `<rect x="${40 + i * 62}" y="150" width="60" height="70" fill="${i % 2 ? "#fff" : "#fde1dd"}" stroke="#eee"/>`).join("")}
   <rect x="330" y="90" width="150" height="130" fill="#bfe0f2" stroke="#fff" stroke-width="10"/><path d="M405 90v130" stroke="#fff" stroke-width="6"/>
   <rect x="40" y="220" width="740" height="40" fill="#fff"/>
   <rect x="40" y="260" width="740" height="100" fill="${p.acc}"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${40 + i * 148} 260v100" stroke="#fff" stroke-width="3"/><rect x="${100 + i * 148}" y="300" width="30" height="5" fill="#fff"/>`).join("")}
   <rect x="40" y="20" width="250" height="110" fill="#fff" stroke="#ddd"/><rect x="520" y="20" width="260" height="110" fill="#fff" stroke="#ddd"/><path d="M165 20v110M650 20v110" stroke="#ddd"/>
   <circle cx="150" cy="208" r="10" fill="#555"/><rect x="600" y="196" width="60" height="24" rx="4" fill="#555"/>`;
    }
    if (k === 2) {
      s += `${Array.from({ length: 80 }, (_, i) => `<rect x="${(i % 16) * 50}" y="${Math.floor(i / 16) * 50 + 110}" width="49" height="49" fill="${p.acc}" opacity="${0.15 + ((i * 7) % 5) * 0.08}"/>`).join("")}
   <rect x="330" y="90" width="150" height="170" fill="#bfe0f2" stroke="#fff" stroke-width="10"/><path d="M405 90v170" stroke="#fff" stroke-width="6"/>
   <path d="M60 300h330v30a40 40 0 01-40 40H100a40 40 0 01-40-40z" fill="#fff" stroke="#cfd8db" stroke-width="3"/>
   <rect x="560" y="80" width="140" height="170" rx="70" fill="#dff1f8" stroke="#fff" stroke-width="8"/>
   <rect x="560" y="270" width="140" height="90" fill="#fff"/><rect x="595" y="290" width="70" height="10" rx="5" fill="#cfd8db"/>`;
    }
    return s;
  }
  function drawBA() {
    chips($("#baTabs"), T[lang].works, S.work, "work");
    $("#svgB").innerHTML = before(S.work);
    $("#svgA").innerHTML = after(S.work);
  }
  $("#baTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) {
      S.work = +b.dataset.v;
      drawBA();
    }
  });
  $("#baR").addEventListener("input", (e) =>
    $("#ba").style.setProperty("--x", e.target.value + "%"),
  );

  // property dropdown
  function pickText() {
    $("#fObjT").textContent = T[lang].objs[S.fobj];
  }
  function openPop(o) {
    const p = $("#fObjP");
    p.hidden = !o;
    $("#fObj").setAttribute("aria-expanded", o);
    if (o) {
      p.innerHTML = T[lang].objs
        .map(
          (x, i) =>
            `<button type="button" role="option" data-v="${i}" aria-selected="${i === S.fobj}">${x}</button>`,
        )
        .join("");
      p.querySelector("[aria-selected=true]").focus();
    }
  }
  $("#fObj").addEventListener("click", () => openPop($("#fObjP").hidden));
  $("#fObjP").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    S.fobj = +b.dataset.v;
    pickText();
    openPop(false);
    $("#fObj").focus();
  });
  document.addEventListener("click", (e) => {
    if (
      !$("#fObjP").hidden &&
      !e.composedPath().some((n) => n.classList && n.classList.contains("dp"))
    )
      openPop(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#fObjP").hidden) {
      openPop(false);
      $("#fObj").focus();
    }
  });

  $("#req").addEventListener("submit", (e) => {
    e.preventDefault();
    const t = T[lang],
      n = $("#fName").value.trim(),
      p = $("#fPhone").value.trim();
    $("#ok").classList.remove("show");
    if (!n || !p) {
      $("#err").textContent = t.e_fill;
      return;
    }
    $("#err").textContent = "";
    $("#ok").textContent = t.ok(n);
    $("#ok").classList.add("show");
    e.target.reset();
  });

  function render() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i]").forEach((el) => {
      const v = t[el.dataset.i];
      if (typeof v === "string") el.textContent = v;
    });
    document
      .querySelectorAll(".lang button")
      .forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    const cur = lang === "en" ? "MDL/m²" : "lei/m²";
    $("#svc").innerHTML = t.svc
      .map(
        (s, i) =>
          `<article><svg viewBox="0 0 46 46" aria-hidden="true"><rect width="46" height="46" rx="12" fill="${i % 2 ? "#ff5a4e" : "#2346c9"}"/>${ICONS[i]}</svg><h3>${s[0]}</h3><p>${s[1]}</p><span class="from">${t.from} ${s[2]} ${cur}</span></article>`,
      )
      .join("");
    $("#steps").innerHTML = t.steps
      .map(
        (s, i) =>
          `<li><svg viewBox="0 0 40 40" style="color:${i % 2 ? "#ff5a4e" : "#2346c9"}" aria-hidden="true">${STEPI[i]}</svg><h3>${s[0]}</h3><p>${s[1]}</p></li>`,
      )
      .join("");
    drawCalc();
    drawBA();
    pickText();
    $("#err").textContent = "";
    $("#ok").classList.remove("show");
  }
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try {
        localStorage.setItem("grinda-lang", lang);
      } catch (e) {}
      render();
    }),
  );
  const burger = $("#burger"),
    links = $("#links");
  burger.addEventListener("click", () => {
    const o = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", o);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    }
  });
  render();
})();
