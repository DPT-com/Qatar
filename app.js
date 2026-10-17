
(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const menuToggle = $("#menuToggle");
  const siteNav = $("#siteNav");
  const languageToggle = $("#languageToggle");

  const translations = {
    en: {
      navHome: "Home",
      navProducts: "Categories",
      navAbout: "About us",
      navContact: "Contact",
      eyebrow: "QATAR · TRUSTED TRADING",
      heroTitle: "Everyday essentials.<br><em>Elevated style.</em>",
      heroText: "Explore clothing accessories and practical lifestyle essentials from DIMA PLUS TRADING W.L.L.",
      explore: "Explore categories ↘",
      contactUs: "Contact us",
      qatarBased: "Based in Qatar",
      ourRange: "OUR RANGE",
      categoriesTitle: "Browse categories",
      categoriesIntro: "Discover categories related to our registered trading activity.",
      ties: "Ties & bow ties",
      tiesDesc: "Classic neckties, bow ties and formalwear accessories.",
      gloves: "Gloves & braces",
      glovesDesc: "Practical gloves, suspenders and clothing accessories.",
      beads: "Prayer beads (tasbih)",
      beadsDesc: "Prayer beads and related everyday accessories.",
      umbrellas: "Umbrellas",
      umbrellasDesc: "Useful umbrellas for day-to-day weather protection.",
      catalogNote: "These are category examples, not confirmed live inventory. Product details and availability will be added after the range is selected.",
      aboutEyebrow: "WHO WE ARE",
      aboutTitle: "A considered approach to everyday trading.",
      aboutText: "DIMA PLUS TRADING W.L.L. is a Qatar-based trading company focused on clothing accessories and practical everyday items. We aim to make discovering our range straightforward and communication easy.",
      valueClear: "Clear communication",
      valueUseful: "Useful essentials",
      valueLocal: "Qatar-based contact",
      getInTouch: "GET IN TOUCH",
      contactTitle: "Let's talk.",
      contactText: "For enquiries about our company and product categories, contact us directly.",
      whatsapp: "WHATSAPP",
      email: "EMAIL",
      address: "ADDRESS",
      addressText: "Building 488, Street 340, Zone 55, 1st Floor, Office 12, Qatar",
      footerText: "Clothing accessories & lifestyle essentials · Qatar",
      privacy: "Privacy",
      terms: "Terms",
      whatsappCta: "Chat on WhatsApp"
    },

    ar: {
      navHome: "الرئيسية",
      navProducts: "الفئات",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      eyebrow: "قطر · تجارة موثوقة",
      heroTitle: "احتياجات يومية.<br><em>بأسلوب راقٍ.</em>",
      heroText: "اكتشف إكسسوارات الملابس والمنتجات العملية من شركة ديما بلس للتجارة ذ.م.م.",
      explore: "استكشف الفئات ↙",
      contactUs: "اتصل بنا",
      qatarBased: "مقرنا في قطر",
      ourRange: "مجموعة منتجاتنا",
      categoriesTitle: "تصفح الفئات",
      categoriesIntro: "اكتشف فئات المنتجات المرتبطة بنشاطنا التجاري المسجل.",
      ties: "ربطات العنق والفراشات",
      tiesDesc: "ربطات عنق كلاسيكية وربطات فراشة وإكسسوارات الملابس الرسمية.",
      gloves: "القفازات والحمالات",
      glovesDesc: "قفازات عملية وحمالات وإكسسوارات للملابس.",
      beads: "المسابح",
      beadsDesc: "مسابح وإكسسوارات يومية ذات صلة.",
      umbrellas: "المظلات",
      umbrellasDesc: "مظلات عملية للحماية من تقلبات الطقس اليومية.",
      catalogNote: "هذه أمثلة للفئات وليست مخزوناً مؤكداً للبيع حالياً. ستضاف تفاصيل المنتجات وتوفرها بعد اختيار المنتجات.",
      aboutEyebrow: "من نحن",
      aboutTitle: "نهج مدروس للتجارة والاحتياجات اليومية.",
      aboutText: "ديما بلس للتجارة ذ.م.م. شركة مقرها قطر، تركز على إكسسوارات الملابس والمنتجات العملية اليومية. نسعى إلى تسهيل استكشاف منتجاتنا والتواصل معنا.",
      valueClear: "تواصل واضح",
      valueUseful: "منتجات عملية",
      valueLocal: "تواصل من داخل قطر",
      getInTouch: "تواصل معنا",
      contactTitle: "يسعدنا تواصلكم.",
      contactText: "للاستفسار عن الشركة وفئات المنتجات، يرجى التواصل معنا مباشرة.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressText: "مبنى 488، شارع 340، منطقة 55، الطابق الأول، مكتب 12، قطر",
      footerText: "إكسسوارات الملابس والمنتجات اليومية · قطر",
      privacy: "الخصوصية",
      terms: "الشروط",
      whatsappCta: "تواصل عبر واتساب"
    }
  };

  let currentLanguage = "en";

  function setLanguage(language) {
    currentLanguage = language;
    const rtl = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.dir = rtl ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translated = translations[language][key];

      if (translated !== undefined) {
        element.innerHTML = translated;
      }
    });

    languageToggle.textContent = rtl ? "English" : "العربية";
    languageToggle.setAttribute(
      "aria-label",
      rtl ? "Switch to English" : "التبديل إلى العربية"
    );

    document.title = rtl
      ? "ديما بلس للتجارة ذ.م.م. | قطر"
      : "DIMA PLUS TRADING W.L.L. | Qatar";

    menuToggle.setAttribute(
      "aria-label",
      siteNav.classList.contains("open")
        ? (rtl ? "إغلاق القائمة" : "Close menu")
        : (rtl ? "فتح القائمة" : "Open menu")
    );
  }

  function closeMenu() {
    siteNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "ar" ? "فتح القائمة" : "Open menu"
    );
  }

  menuToggle.addEventListener("click", () => {
    const open = !siteNav.classList.contains("open");

    siteNav.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));

    menuToggle.setAttribute(
      "aria-label",
      open
        ? (currentLanguage === "ar" ? "إغلاق القائمة" : "Close menu")
        : (currentLanguage === "ar" ? "فتح القائمة" : "Open menu")
    );
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "ar" : "en");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeMenu();
  });

  const yearElement = $("#year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  setLanguage("en");
})();
