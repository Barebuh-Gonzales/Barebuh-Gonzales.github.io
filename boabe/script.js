"use strict";
(() => {
  const T = {
    ro: {
      nav_about: "Despre noi",
      nav_menu: "Meniu",
      nav_visit: "Vizită",
      hero_t1: "Cafea proaspăt prăjită",
      hero_t2: "în inima Chișinăului",
      hero_p:
        "Boabe de specialitate, prăjite local în fiecare săptămână. Vino pentru un espresso rapid sau rămâi la o prăjitură și o carte.",
      cta_book: "Rezervă o masă",
      cta_menu: "Vezi meniul",
      f_open: "deschidem zilnic",
      f_origin: "țări de origine",
      f_seats: "locuri",
      ab_t: "O cafenea mică, cu grijă mare",
      ab_p: "Am deschis Boabe pentru cei care vor o cafea bună fără grabă. Alegem boabele direct de la ferme mici și le prăjim în loturi mici, ca fiecare ceașcă să aibă gustul ei.",
      ft1_t: "Prăjire locală",
      ft1_p:
        "Prăjim în fiecare marți, așa că cafeaua ajunge la tine în prima săptămână după prăjire.",
      ft2_t: "Barista atenți",
      ft2_p:
        "Îți spunem ce bei și te ajutăm să alegi metoda potrivită: espresso, V60 sau cold brew.",
      ft3_t: "Spațiu pentru lucru",
      ft3_p: "Wi-Fi rapid, prize la fiecare masă și liniște dimineața.",
      mn_t: "Meniu",
      vs_t: "Program și adresă",
      vs_addr_l: "Adresa",
      days: ["Luni – Vineri", "Sâmbătă", "Duminică"],
      bk_t: "Rezervă o masă",
      bk_name: "Nume",
      bk_phone: "Telefon",
      bk_date: "Data",
      bk_time: "Ora",
      bk_guests: "Persoane",
      bk_note: "Mesaj (opțional)",
      bk_send: "Trimite rezervarea",
      e_fill: "Completează numele, telefonul și data.",
      e_past: "Alege o dată de azi încolo.",
      ok: (n, d, t, g) =>
        `Mulțumim, ${n}! Masa pentru ${g} pe ${d} la ${t} e rezervată. Te sunăm pentru confirmare.`,
      demo: "Proiect demonstrativ. Cafeneaua este fictivă.",
      cats: ["Cafea", "Ceai", "Deserturi"],
      pick: "Alege data",
      prev: "Luna precedentă",
      next: "Luna următoare",
      loc: "ro-RO",
    },
    ru: {
      nav_about: "О нас",
      nav_menu: "Меню",
      nav_visit: "Как найти",
      hero_t1: "Свеже\u00ADобжаренный кофе",
      hero_t2: "в самом сердце Кишинёва",
      hero_p:
        "Спешелти-зёрна, которые мы обжариваем сами каждую неделю. Забегайте за быстрым эспрессо или оставайтесь с десертом и книгой.",
      cta_book: "Забронировать стол",
      cta_menu: "Смотреть меню",
      f_open: "открываемся каждый день",
      f_origin: "страны происхождения",
      f_seats: "мест",
      ab_t: "Маленькая кофейня с большой заботой",
      ab_p: "Мы открыли Boabe для тех, кто любит хороший кофе без спешки. Берём зёрна напрямую у небольших ферм и обжариваем малыми партиями, чтобы у каждой чашки был свой вкус.",
      ft1_t: "Своя обжарка",
      ft1_p:
        "Обжариваем каждый вторник, так что кофе попадает к вам в первую неделю после обжарки.",
      ft2_t: "Внимательные бариста",
      ft2_p: "Расскажем, что вы пьёте, и поможем выбрать способ: эспрессо, V60 или колд брю.",
      ft3_t: "Место для работы",
      ft3_p: "Быстрый Wi-Fi, розетки у каждого стола и тишина по утрам.",
      mn_t: "Меню",
      vs_t: "Часы работы и адрес",
      vs_addr_l: "Адрес",
      days: ["Пн – Пт", "Суббота", "Воскресенье"],
      bk_t: "Забронировать стол",
      bk_name: "Имя",
      bk_phone: "Телефон",
      bk_date: "Дата",
      bk_time: "Время",
      bk_guests: "Гостей",
      bk_note: "Комментарий (необязательно)",
      bk_send: "Отправить бронь",
      e_fill: "Заполните имя, телефон и дату.",
      e_past: "Выберите дату не раньше сегодняшней.",
      ok: (n, d, t, g) =>
        `Спасибо, ${n}! Стол на ${g} чел. ${d} в ${t} забронирован. Мы перезвоним для подтверждения.`,
      demo: "Демо-проект, кофейня вымышленная.",
      cats: ["Кофе", "Чай", "Десерты"],
      pick: "Выберите дату",
      prev: "Предыдущий месяц",
      next: "Следующий месяц",
      loc: "ru-RU",
    },
    en: {
      nav_about: "About",
      nav_menu: "Menu",
      nav_visit: "Visit",
      hero_t1: "Freshly roasted coffee",
      hero_t2: "in the heart of Chișinău",
      hero_p:
        "Specialty beans we roast ourselves every week. Drop in for a quick espresso or stay for a pastry and a good book.",
      cta_book: "Book a table",
      cta_menu: "See the menu",
      f_open: "open every day",
      f_origin: "origin countries",
      f_seats: "seats",
      ab_t: "A small café that cares a lot",
      ab_p: "We opened Boabe for people who like good coffee without the rush. We buy beans directly from small farms and roast in small batches, so every cup tastes like itself.",
      ft1_t: "Roasted in-house",
      ft1_p: "We roast every Tuesday, so your coffee reaches you within a week of roasting.",
      ft2_t: "Friendly baristas",
      ft2_p:
        "We'll tell you what's in your cup and help you pick a method: espresso, V60 or cold brew.",
      ft3_t: "Room to work",
      ft3_p: "Fast Wi-Fi, a socket at every table and quiet mornings.",
      mn_t: "Menu",
      vs_t: "Hours & address",
      vs_addr_l: "Address",
      days: ["Mon – Fri", "Saturday", "Sunday"],
      bk_t: "Book a table",
      bk_name: "Name",
      bk_phone: "Phone",
      bk_date: "Date",
      bk_time: "Time",
      bk_guests: "Guests",
      bk_note: "Message (optional)",
      bk_send: "Send booking",
      e_fill: "Please fill in your name, phone and date.",
      e_past: "Please pick today or a later date.",
      ok: (n, d, t, g) =>
        `Thanks, ${n}! A table for ${g} on ${d} at ${t} is booked. We'll call you to confirm.`,
      demo: "Demo project. The café is fictional.",
      cats: ["Coffee", "Tea", "Desserts"],
      pick: "Pick a date",
      prev: "Previous month",
      next: "Next month",
      loc: "en-GB",
    },
  };
  const MENU = [
    [
      [
        "Espresso",
        "Эспрессо",
        "Espresso",
        "Etiopia, note de afine",
        "Эфиопия, ноты черники",
        "Ethiopia, blueberry notes",
        30,
      ],
      [
        "Flat white",
        "Флэт уайт",
        "Flat white",
        "Dublu espresso, lapte catifelat",
        "Двойной эспрессо, бархатное молоко",
        "Double espresso, silky milk",
        45,
      ],
      [
        "Cappuccino",
        "Капучино",
        "Cappuccino",
        "Clasic, 250 ml",
        "Классический, 250 мл",
        "Classic, 250 ml",
        40,
      ],
      [
        "V60 filtru",
        "Фильтр V60",
        "V60 pour-over",
        "Lot al săptămânii",
        "Зерно недели",
        "Bean of the week",
        50,
      ],
      [
        "Cold brew",
        "Колд брю",
        "Cold brew",
        "Infuzat 18 ore",
        "Настаивается 18 часов",
        "Steeped for 18 hours",
        48,
      ],
      [
        "Raf cu lavandă",
        "Раф с лавандой",
        "Lavender raf",
        "Cremă, vanilie, lavandă",
        "Сливки, ваниль, лаванда",
        "Cream, vanilla, lavender",
        55,
      ],
    ],
    [
      [
        "Ceai verde Sencha",
        "Зелёный Сенча",
        "Sencha green tea",
        "Japonia, 400 ml",
        "Япония, 400 мл",
        "Japan, 400 ml",
        40,
      ],
      [
        "Ceai de cătină",
        "Облепиховый чай",
        "Sea buckthorn tea",
        "Cu miere și ghimbir",
        "С мёдом и имбирём",
        "With honey and ginger",
        50,
      ],
      [
        "Masala chai",
        "Масала чай",
        "Masala chai",
        "Condimente, lapte",
        "Специи, молоко",
        "Spices, milk",
        48,
      ],
      [
        "Matcha latte",
        "Матча латте",
        "Matcha latte",
        "Matcha ceremonială",
        "Церемониальная матча",
        "Ceremonial matcha",
        58,
      ],
    ],
    [
      [
        "Plăcintă cu brânză",
        "Плачинда с брынзой",
        "Cheese plăcintă",
        "Rețeta bunicii",
        "Бабушкин рецепт",
        "Grandma's recipe",
        35,
      ],
      [
        "Cheesecake",
        "Чизкейк",
        "Cheesecake",
        "Cu sos de vișine",
        "С вишнёвым соусом",
        "With sour cherry sauce",
        55,
      ],
      [
        "Croissant",
        "Круассан",
        "Croissant",
        "Unt, coacere proprie",
        "Сливочный, своя выпечка",
        "Butter, baked in-house",
        32,
      ],
      [
        "Cozonac",
        "Козонак",
        "Cozonac",
        "Cu nucă și cacao",
        "С орехом и какао",
        "Walnut and cocoa",
        38,
      ],
    ],
  ];
  const HOURS = ["7:30 – 21:00", "9:00 – 22:00", "9:00 – 20:00"];
  const L = { ro: 0, ru: 1, en: 2 };
  let lang = "ro",
    cat = 0;
  try {
    lang = localStorage.getItem("boabe-lang") || lang;
  } catch (e) {}
  const $ = (s) => document.querySelector(s);

  function renderMenu() {
    const t = T[lang],
      i = L[lang];
    $("#tabs").innerHTML = t.cats
      .map((c, k) => `<button role="tab" aria-selected="${k === cat}" data-k="${k}">${c}</button>`)
      .join("");
    $("#items").innerHTML = MENU[cat]
      .map(
        (m) =>
          `<li><div><span class="n">${m[i]}</span><span class="d">${m[i + 3]}</span></div><span class="p">${m[6]} lei</span></li>`,
      )
      .join("");
  }
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
    $("#hours").innerHTML = t.days
      .map((d, k) => `<li><span>${d}</span><span class="t">${HOURS[k]}</span></li>`)
      .join("");
    renderMenu();
    if (typeof dateText === "function") {
      dateText();
      if (!cal.hidden) drawCal();
    }
    $("#ok").classList.remove("show");
    $("#err").textContent = "";
  }

  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try {
        localStorage.setItem("boabe-lang", lang);
      } catch (e) {}
      render();
    }),
  );
  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) {
      cat = +b.dataset.k;
      renderMenu();
    }
  });
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

  const times = [];
  for (let h = 8; h <= 20; h++) {
    times.push(h + ":00");
    if (h < 20) times.push(h + ":30");
  }
  const PICK = {
    time: { opts: times, def: "10:00" },
    guests: { opts: ["1", "2", "3", "4", "5", "6+"], def: "2" },
  };
  for (const k in PICK) PICK[k].val = PICK[k].def;
  function pickText(k) {
    $(`#b-${k}-txt`).textContent = PICK[k].val;
  }
  function drawPop(k) {
    const P = PICK[k],
      pop = $(`#pop-${k}`);
    pop.innerHTML = P.opts
      .map(
        (o) =>
          `<button type="button" role="option" data-v="${o}" aria-selected="${o === P.val}">${o}</button>`,
      )
      .join("");
  }
  function openPop(k, o) {
    const pop = $(`#pop-${k}`);
    pop.hidden = !o;
    $(`#b-${k}`).setAttribute("aria-expanded", o);
    if (o) {
      drawPop(k);
      const s = pop.querySelector("[aria-selected=true]");
      if (s) {
        s.scrollIntoView({ block: "nearest" });
        s.focus();
      }
    }
  }
  for (const k in PICK) {
    pickText(k);
    $(`#b-${k}`).addEventListener("click", () => {
      const o = $(`#pop-${k}`).hidden;
      closeAll();
      openPop(k, o);
    });
    $(`#pop-${k}`).addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      PICK[k].val = b.dataset.v;
      pickText(k);
      openPop(k, false);
      $(`#b-${k}`).focus();
    });
  }
  function closeAll(keep) {
    for (const k in PICK) if (k !== keep && !$(`#pop-${k}`).hidden) openPop(k, false);
    if (keep !== "date" && !cal.hidden) openCal(false);
  }
  // date picker
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDay = new Date(today);
  maxDay.setMonth(maxDay.getMonth() + 3);
  let sel = null,
    view = new Date(today.getFullYear(), today.getMonth(), 1);
  const pad = (n) => String(n).padStart(2, "0");
  const fmt = (d) => `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
  const dBtn = $("#b-date"),
    cal = $("#cal");
  function dateText() {
    const s = $("#b-date-txt");
    s.textContent = sel ? fmt(sel) : T[lang].pick;
    dBtn.classList.toggle("empty", !sel);
  }
  function drawCal() {
    const t = T[lang],
      y = view.getFullYear(),
      m = view.getMonth();
    let title = new Intl.DateTimeFormat(t.loc, { month: "long" }).format(view);
    title = title.charAt(0).toUpperCase() + title.slice(1) + " " + y;
    const wd = [];
    for (let i = 0; i < 7; i++) {
      wd.push(
        new Intl.DateTimeFormat(t.loc, { weekday: "short" })
          .format(new Date(2024, 0, 1 + i))
          .replace(".", ""),
      );
    }
    const first = (new Date(y, m, 1).getDay() + 6) % 7,
      days = new Date(y, m + 1, 0).getDate();
    let cells = "";
    for (let i = 0; i < first; i++) cells += "<span></span>";
    for (let d = 1; d <= days; d++) {
      const dt = new Date(y, m, d),
        off = dt < today || dt > maxDay;
      const isSel = sel && dt.getTime() === sel.getTime(),
        isT = dt.getTime() === today.getTime();
      cells += `<button type="button" data-d="${d}" ${off ? "disabled" : ""} class="${isT ? "today" : ""}" aria-pressed="${!!isSel}" aria-label="${fmt(dt)}">${d}</button>`;
    }
    const atMin = y === today.getFullYear() && m === today.getMonth();
    const atMax = y === maxDay.getFullYear() && m === maxDay.getMonth();
    cal.innerHTML = `<div class="cal-h"><button type="button" data-nav="-1" aria-label="${t.prev}" ${atMin ? "disabled" : ""}>‹</button><b>${title}</b><button type="button" data-nav="1" aria-label="${t.next}" ${atMax ? "disabled" : ""}>›</button></div><div class="cal-g">${wd.map((w) => `<span class="wd">${w}</span>`).join("")}${cells}</div>`;
  }
  function openCal(o) {
    cal.hidden = !o;
    dBtn.setAttribute("aria-expanded", o);
    if (o) {
      if (sel) view = new Date(sel.getFullYear(), sel.getMonth(), 1);
      drawCal();
      (
        cal.querySelector("[aria-pressed=true]") ||
        cal.querySelector(".cal-g button:not(:disabled)")
      )?.focus();
    }
  }
  dBtn.addEventListener("click", () => {
    const o = cal.hidden;
    closeAll("date");
    openCal(o);
  });
  cal.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.dataset.nav) {
      view.setMonth(view.getMonth() + +b.dataset.nav);
      drawCal();
      return;
    }
    sel = new Date(view.getFullYear(), view.getMonth(), +b.dataset.d);
    dateText();
    openCal(false);
    dBtn.focus();
  });
  document.addEventListener("click", (e) => {
    const dp = e.composedPath().find((n) => n.classList && n.classList.contains("dp"));
    closeAll(dp ? dp.dataset.pick || "date" : undefined);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = document.querySelector(".dp-btn[aria-expanded=true]");
    if (open) {
      closeAll();
      open.focus();
    }
  });

  $("#book").addEventListener("submit", (e) => {
    e.preventDefault();
    const t = T[lang],
      n = $("#b-name").value.trim(),
      p = $("#b-phone").value.trim(),
      d = sel;
    const ok = $("#ok"),
      err = $("#err");
    ok.classList.remove("show");
    if (!n || !p || !d) {
      err.textContent = t.e_fill;
      return;
    }
    if (d < today) {
      err.textContent = t.e_past;
      return;
    }
    err.textContent = "";
    const nice = fmt(d);
    ok.textContent = t.ok(n, nice, PICK.time.val, PICK.guests.val);
    ok.classList.add("show");
    e.target.reset();
    sel = null;
    dateText();
    for (const k in PICK) {
      PICK[k].val = PICK[k].def;
      pickText(k);
    }
  });

  render();
})();
