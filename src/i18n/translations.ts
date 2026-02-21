export type Lang = "en" | "lv" | "ru";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.directions": "Get Directions",

    // Hero
    "hero.badge": "Old Town Riga, Latvia",
    "hero.title1": "Riga's Ultimate",
    "hero.title2": "Shot",
    "hero.title3": "Experience",
    "hero.subtitle": "50+ signature shots, craft cocktails, and unforgettable nights in the heart of Old Town. Where every round starts a new story.",
    "hero.viewMenu": "View Menu",
    "hero.visitUs": "Visit Us Tonight",

    // About
    "about.tag": "Est. Riga",
    "about.title1": "Where Every Night Is",
    "about.title2": "Legendary",
    "about.desc": "Tucked away in the cobblestone streets of Riga's Old Town, Shot Cafe has been the go-to destination for travelers, students, and locals craving unforgettable nights since day one. No pretense — just great drinks, great music, and even greater memories.",
    "about.feat1.title": "50+ Shots",
    "about.feat1.desc": "Signature, classic, and cocktail shots crafted to perfection",
    "about.feat2.title": "Party Vibes",
    "about.feat2.desc": "Friendly bartenders and the best crowd in Old Town",
    "about.feat3.title": "Live Music",
    "about.feat3.desc": "Country jams and live sets every weekend to keep the energy high",

    // Menu
    "menu.tag": "Drinks",
    "menu.title1": "The",
    "menu.title2": "Menu",
    "menu.cat.signature": "Signature Shots",
    "menu.cat.classic": "Classic Shots",
    "menu.cat.cocktail-shots": "Cocktail Shots",
    "menu.cat.cocktails": "Cocktails",
    "menu.cat.beer": "Beer",
    "menu.surprise": "Can't decide? Ask your bartender for a",
    "menu.surpriseShot": "surprise shot!",

    // Gallery
    "gallery.tag": "Vibes",
    "gallery.title1": "The",
    "gallery.title2": "Gallery",

    // Reviews
    "reviews.tag": "Reviews",
    "reviews.title1": "What They",
    "reviews.title2": "Say",

    // Location
    "location.tag": "Find Us",
    "location.title1": "Visit",
    "location.title2": "Shot Cafe",
    "location.address": "Address",
    "location.hours": "Opening Hours",
    "location.contact": "Contact",
    "location.monThu": "Mon – Thu: 18:00 – 02:00",
    "location.friSat": "Fri – Sat: 18:00 – 05:00",
    "location.sun": "Sunday: 19:00 – 01:00",

    // Footer
    "footer.cta": "Start your night at",
    "footer.events": "Events",

    // Mobile CTA
    "mobile.directions": "Get Directions",
  },

  lv: {
    "nav.about": "Par mums",
    "nav.menu": "Ēdienkarte",
    "nav.gallery": "Galerija",
    "nav.contact": "Kontakti",
    "nav.directions": "Norādes",

    "hero.badge": "Vecrīga, Latvija",
    "hero.title1": "Rīgas labākā",
    "hero.title2": "Šotu",
    "hero.title3": "pieredze",
    "hero.subtitle": "50+ paraksta šoti, kokteiļi un neaizmirstamas naktis Vecrīgas sirdī. Kur katrs raunds sāk jaunu stāstu.",
    "hero.viewMenu": "Skatīt ēdienkarti",
    "hero.visitUs": "Apmeklē mūs šovakar",

    "about.tag": "Dib. Rīgā",
    "about.title1": "Kur katra nakts ir",
    "about.title2": "Leģendāra",
    "about.desc": "Paslēpts Vecrīgas bruģētajās ielās, Shot Cafe ir bijis galvenais galamērķis ceļotājiem, studentiem un vietējiem, kas ilgojas pēc neaizmirstamām naktīm. Bez izlikšanās — tikai lieliski dzērieni, lieliska mūzika un vēl lieliskas atmiņas.",
    "about.feat1.title": "50+ Šoti",
    "about.feat1.desc": "Paraksta, klasiskie un kokteiļu šoti, sagatavoti līdz pilnībai",
    "about.feat2.title": "Ballīšu vibes",
    "about.feat2.desc": "Draudzīgi bārmeņi un labākā publika Vecrīgā",
    "about.feat3.title": "Dzīvā mūzika",
    "about.feat3.desc": "Kantri džemi un dzīvie seti katru nedēļas nogali",

    "menu.tag": "Dzērieni",
    "menu.title1": "",
    "menu.title2": "Ēdienkarte",
    "menu.cat.signature": "Paraksta šoti",
    "menu.cat.classic": "Klasiskie šoti",
    "menu.cat.cocktail-shots": "Kokteiļu šoti",
    "menu.cat.cocktails": "Kokteiļi",
    "menu.cat.beer": "Alus",
    "menu.surprise": "Nevari izlemt? Pajautā bārmenim",
    "menu.surpriseShot": "pārsteiguma šotu!",

    "gallery.tag": "Vibes",
    "gallery.title1": "",
    "gallery.title2": "Galerija",

    "reviews.tag": "Atsauksmes",
    "reviews.title1": "Ko viņi",
    "reviews.title2": "Saka",

    "location.tag": "Atrodi mūs",
    "location.title1": "Apmeklē",
    "location.title2": "Shot Cafe",
    "location.address": "Adrese",
    "location.hours": "Darba laiks",
    "location.contact": "Kontakti",
    "location.monThu": "P – C: 18:00 – 02:00",
    "location.friSat": "Pk – S: 18:00 – 05:00",
    "location.sun": "Svētdiena: 19:00 – 01:00",

    "footer.cta": "Sāc savu vakaru",
    "footer.events": "Pasākumi",

    "mobile.directions": "Norādes",
  },

  ru: {
    "nav.about": "О нас",
    "nav.menu": "Меню",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    "nav.directions": "Как добраться",

    "hero.badge": "Старый город, Рига, Латвия",
    "hero.title1": "Лучший",
    "hero.title2": "Шот",
    "hero.title3": "бар в Риге",
    "hero.subtitle": "50+ фирменных шотов, коктейли и незабываемые ночи в сердце Старого города. Где каждый раунд начинает новую историю.",
    "hero.viewMenu": "Смотреть меню",
    "hero.visitUs": "Приходи сегодня",

    "about.tag": "Осн. в Риге",
    "about.title1": "Где каждая ночь",
    "about.title2": "Легендарна",
    "about.desc": "Спрятанный на мощёных улочках Старого города Риги, Shot Cafe стал главным местом для путешественников, студентов и местных, жаждущих незабываемых ночей. Без притворства — только отличные напитки, отличная музыка и ещё более великие воспоминания.",
    "about.feat1.title": "50+ Шотов",
    "about.feat1.desc": "Фирменные, классические и коктейльные шоты, сделанные до совершенства",
    "about.feat2.title": "Атмосфера вечеринки",
    "about.feat2.desc": "Дружелюбные бармены и лучшая публика в Старом городе",
    "about.feat3.title": "Живая музыка",
    "about.feat3.desc": "Кантри джемы и живые сеты каждые выходные",

    "menu.tag": "Напитки",
    "menu.title1": "",
    "menu.title2": "Меню",
    "menu.cat.signature": "Фирменные шоты",
    "menu.cat.classic": "Классические шоты",
    "menu.cat.cocktail-shots": "Коктейльные шоты",
    "menu.cat.cocktails": "Коктейли",
    "menu.cat.beer": "Пиво",
    "menu.surprise": "Не можешь решить? Попроси бармена",
    "menu.surpriseShot": "шот-сюрприз!",

    "gallery.tag": "Атмосфера",
    "gallery.title1": "",
    "gallery.title2": "Галерея",

    "reviews.tag": "Отзывы",
    "reviews.title1": "Что о нас",
    "reviews.title2": "Говорят",

    "location.tag": "Найди нас",
    "location.title1": "Посети",
    "location.title2": "Shot Cafe",
    "location.address": "Адрес",
    "location.hours": "Часы работы",
    "location.contact": "Контакты",
    "location.monThu": "Пн – Чт: 18:00 – 02:00",
    "location.friSat": "Пт – Сб: 18:00 – 05:00",
    "location.sun": "Воскресенье: 19:00 – 01:00",

    "footer.cta": "Начни свою ночь в",
    "footer.events": "Мероприятия",

    "mobile.directions": "Как добраться",
  },
};
