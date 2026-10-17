
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const langButton = document.getElementById("languageToggle");

  // Mobile menu
  if (menu && nav) {
    menu.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  // English and Arabic translations
  const translations = {
    navHome: ["Home", "الرئيسية"],
    navCategories: ["Categories", "الفئات"],
    navAbout: ["Who We Are", "من نحن"],
    navContact: ["Contact", "اتصل بنا"],
    heroEyebrow: ["ELEGANCE IN EVERY DETAIL", "الأناقة في كل التفاصيل"],
    heroTitle: ["Style That Speaks. Quality That Lasts.", "أناقة تعبّر عنك وجودة تدوم"],
    heroText: ["Discover timeless clothing accessories designed to complement your style with elegance and confidence.", "اكتشف إكسسوارات الملابس الكلاسيكية التي تكمل أناقتك بثقة وتميّز."],
    explore: ["Explore Categories", "استكشف الفئات"],
    learnMore: ["Learn More", "اعرف المزيد"],
    heroNote: ["Based in Qatar", "مقرنا في قطر"],
    labelStyle: ["Timeless Style", "أناقة خالدة"],
    labelQuality: ["Attention to Detail", "اهتمام بالتفاصيل"],
    categoryEyebrow: ["OUR COLLECTION", "مجموعتنا"],
    categoryTitle: ["Explore Our Categories", "استكشف فئاتنا"],
    categoryText: ["A selection of accessories for everyday style and special occasions.", "مجموعة من الإكسسوارات للاستخدام اليومي والمناسبات الخاصة."],
    catOneKicker: ["FORMAL STYLE", "أناقة رسمية"],
    catOne: ["Ties & Accessories", "ربطات العنق والإكسسوارات"],
    catOneText: ["Elegant details for a polished look.", "تفاصيل أنيقة لإطلالة متكاملة."],
    catTwoKicker: ["EVERYDAY ESSENTIALS", "أساسيات يومية"],
    catTwo: ["Gloves", "القفازات"],
    catTwoText: ["Practical accessories with classic appeal.", "إكسسوارات عملية بطابع كلاسيكي."],
    catThreeKicker: ["TIMELESS TRADITION", "تراث خالد"],
    catThree: ["Prayer Beads", "المسابح"],
    catThreeText: ["Traditional accessories with a refined finish.", "إكسسوارات تقليدية بلمسة راقية."],
    catFourKicker: ["DAILY COMFORT", "راحة يومية"],
    catFour: ["Umbrellas", "المظلات"],
    catFourText: ["Useful everyday essentials for changing weather.", "مستلزمات يومية مفيدة لمختلف الظروف الجوية."],
    imageCaption: ["QUALITY · STYLE · TRUST", "الجودة · الأناقة · الثقة"],
    aboutSide: ["OUR COMPANY", "شركتنا"],
    aboutEyebrow: ["GET TO KNOW US", "تعرّف علينا"],
    aboutTitle: ["Who We Are", "من نحن"],
    aboutText: ["DIMA PLUS TRADING W.L.L. is a Qatar-based company operating in the retail sale of clothing accessories. We aim to present useful, stylish and timeless accessories for different needs and occasions.", "ديما بلس للتجارة ذ.م.م شركة مقرها قطر وتعمل في بيع إكسسوارات الملابس بالتجزئة. نهدف إلى تقديم إكسسوارات عملية وأنيقة وخالدة لمختلف الاحتياجات والمناسبات."],
    aboutTextTwo: ["Our business activity includes items such as gloves, ties, suspenders, prayer beads and umbrellas. We believe in clear communication, thoughtful selection and professional customer service.", "يشمل نشاطنا القفازات وربطات العنق والحمالات والمسابح والمظلات. نؤمن بالتواصل الواضح والاختيار المدروس وخدمة العملاء الاحترافية."],
    aboutLink: ["Get in Touch", "تواصل معنا"],
    contactEyebrow: ["LET'S CONNECT", "لنتواصل"],
    contactTitle: ["Contact Our Team", "تواصل مع فريقنا"],
    contactText: ["Have a question? Contact us using the details below.", "هل لديك سؤال؟ تواصل معنا عبر التفاصيل أدناه."],
    whatsappLabel: ["WHATSAPP / PHONE", "واتساب / الهاتف"],
    whatsappDetail: ["Message us directly", "راسلنا مباشرة"],
    emailLabel: ["EMAIL", "البريد الإلكتروني"],
    emailDetail: ["Send us an email", "أرسل لنا بريدًا إلكترونيًا"],
    addressLabel: ["OUR ADDRESS", "عنواننا"],
    addressTitle: ["Doha, Qatar", "الدوحة، قطر"],
    addressDetail: ["Building 488, Street 340, Zone 55, 1st Floor, Office 12, Qatar.", "مبنى 488، شارع 340، منطقة 55، الطابق الأول، مكتب 12، قطر."],
    ctaEyebrow: ["DIMA PLUS TRADING W.L.L.", "ديما بلس للتجارة ذ.م.م"],
    ctaTitle: ["Let's Start a Conversation", "لنبدأ حوارًا"],
    ctaText: ["We welcome your enquiries.", "نرحب باستفساراتكم."],
    ctaButton: ["Contact on WhatsApp", "تواصل عبر واتساب"],
    footerText: ["Clothing accessories and everyday essentials in Qatar.", "إكسسوارات الملابس والاحتياجات اليومية في قطر."],
    privacy: ["Privacy Policy", "سياسة الخصوصية"],
    terms: ["Terms & Conditions", "الشروط والأحكام"],
    rights: ["All rights reserved.", "جميع الحقوق محفوظة."]
  };

  let language = "en";

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      if (translations[key]) {
        element.textContent = translations[key][language === "ar" ? 1 : 0];
      }
    });

    if (langButton) {
      langButton.textContent = language === "ar" ? "English" : "العربية";
    }

    try {
      localStorage.setItem("dima-language", language);
    } catch (error) {}
  }

  if (langButton) {
    langButton.addEventListener("click", function () {
      setLanguage(language === "en" ? "ar" : "en");
    });
  }

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("dima-language") || "en";
  } catch (error) {}

  setLanguage(savedLanguage === "ar" ? "ar" : "en");

  const year = document.getElementById("currentYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
