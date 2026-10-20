document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const menuButton = document.getElementById("menuToggle");
  const navigation = document.getElementById("mainNav");
  const languageSelect = document.getElementById("languageToggle");

  const languages = ["en", "ar", "ur", "hi"];

  const translations = {
    navHome: [
      "Home", "الرئيسية", "ہوم", "होम"
    ],
    navCategories: [
      "Categories", "الفئات", "اقسام", "श्रेणियाँ"
    ],
    navAbout: [
      "Who We Are", "من نحن", "ہمارے بارے میں", "हमारे बारे में"
    ],
    navContact: [
      "Contact", "اتصل بنا", "رابطہ کریں", "संपर्क करें"
    ],

    heroEyebrow: [
      "ELEGANCE IN EVERY DETAIL",
      "الأناقة في كل التفاصيل",
      "ہر تفصیل میں نفاست",
      "हर विवरण में खूबसूरती"
    ],
    heroTitle: [
      "Style That Speaks. Quality That Lasts.",
      "أناقة تعبّر عنك وجودة تدوم",
      "ایسا انداز جو بولے، ایسا معیار جو قائم رہے",
      "ऐसा अंदाज़ जो बोले, ऐसी गुणवत्ता जो टिके"
    ],
    heroText: [
      "Discover timeless clothing accessories designed to complement your style with elegance and confidence.",
      "اكتشف إكسسوارات الملابس الكلاسيكية التي تكمل أناقتك بثقة وتميّز.",
      "کپڑوں کی خوبصورت اور پائیدار ایکسیسریز دریافت کریں جو آپ کے انداز کو نکھاریں۔",
      "ऐसे सदाबहार कपड़ों के एक्सेसरीज़ खोजें जो आपके अंदाज़ को खूबसूरती और आत्मविश्वास दें।"
    ],
    explore: [
      "Explore Categories", "استكشف الفئات",
      "اقسام دیکھیں", "श्रेणियाँ देखें"
    ],
    learnMore: [
      "Learn More", "اعرف المزيد", "مزید جانیں", "और जानें"
    ],
    heroNote: [
      "Based in Qatar", "مقرنا في قطر", "قطر میں قائم", "क़तर में स्थित"
    ],
    labelStyle: [
      "Timeless Style", "أناقة خالدة", "ہمیشہ قائم رہنے والا انداز", "सदाबहार अंदाज़"
    ],
    labelQuality: [
      "Attention to Detail", "اهتمام بالتفاصيل", "باریک تفصیلات پر توجہ", "हर विवरण पर ध्यान"
    ],

    categoryEyebrow: [
      "OUR COLLECTION", "مجموعتنا", "ہمارا مجموعہ", "हमारा संग्रह"
    ],
    categoryTitle: [
      "Explore Our Categories", "استكشف فئاتنا",
      "ہماری اقسام دیکھیں", "हमारी श्रेणियाँ देखें"
    ],
    categoryText: [
      "Accessories for everyday style and special occasions.",
      "مجموعة من الإكسسوارات للاستخدام اليومي والمناسبات الخاصة.",
      "روزمرہ استعمال اور خاص مواقع کے لیے ایکسیسریز کا انتخاب۔",
      "रोज़मर्रा के इस्तेमाल और खास मौकों के लिए एक्सेसरीज़ का संग्रह۔"
    ],

    catOneKicker: [
      "FORMAL STYLE", "أناقة رسمية", "رسمی انداز", "औपचारिक अंदाज़"
    ],
    catOne: [
      "Ties & Accessories", "ربطات العنق والإكسسوارات",
      "ٹائیاں اور ایکسیسریز", "टाई और एक्सेसरीज़"
    ],
    catOneText: [
      "Elegant details for a polished look.",
      "تفاصيل أنيقة لإطلالة متكاملة.",
      "خوبصورت انداز کے لیے نفیس تفصیلات۔",
      "शानदार लुक के लिए खूबसूरत चीज़ें।"
    ],

    catTwoKicker: [
      "EVERYDAY ESSENTIALS", "أساسيات يومية",
      "روزمرہ کی ضروریات", "रोज़मर्रा की ज़रूरतें"
    ],
    catTwo: [
      "Gloves", "القفازات", "دستانے", "दस्ताने"
    ],
    catTwoText: [
      "Practical accessories with classic appeal.",
      "إكسسوارات عملية بطابع كلاسيكي.",
      "کلاسیکی انداز کی عملی ایکسیسریز۔",
      "क्लासिक अंदाज़ वाले उपयोगी एक्सेसरीज़۔"
    ],

    catThreeKicker: [
      "TIMELESS TRADITION", "تراث خالد",
      "روایتی خوبصورتی", "सदाबहार परंपरा"
    ],
    catThree: [
      "Prayer Beads", "المسابح", "تسبیح", "तस्बीह"
    ],
    catThreeText: [
      "Traditional accessories with a refined finish.",
      "إكسسوارات تقليدية بلمسة راقية.",
      "نفیس انداز میں روایتی ایکسیسریز۔",
      "खूबसूरत रूप में पारंपरिक एक्सेसरीज़۔"
    ],

    catFourKicker: [
      "DAILY COMFORT", "راحة يومية",
      "روزمرہ آرام", "रोज़मर्रा का आराम"
    ],
    catFour: [
      "Umbrellas", "المظلات", "چھتریاں", "छतरियाँ"
    ],
    catFourText: [
      "Useful everyday essentials for changing weather.",
      "مستلزمات يومية مفيدة لمختلف الظروف الجوية.",
      "بدلتے موسم کے لیے روزمرہ کی مفید اشیا۔",
      "बदलते मौसम के लिए रोज़मर्रा की उपयोगी चीज़ें۔"
    ],

    imageCaption: [
      "QUALITY · STYLE · TRUST",
      "الجودة · الأناقة · الثقة",
      "معیار · انداز · اعتماد",
      "गुणवत्ता · अंदाज़ · भरोसा"
    ],

    aboutEyebrow: [
      "GET TO KNOW US", "تعرّف علينا", "ہمیں جانیے", "हमें जानिए"
    ],
    aboutTitle: [
      "Who We Are", "من نحن", "ہم کون ہیں", "हम कौन हैं"
    ],
    aboutText: [
      "DIMA PLUS TADING W.L.L. is a Qatar-based company operating in the retail sale of clothing accessories. We aim to present useful, stylish and timeless accessories for different needs and occasions.",
      "ديما بلس تادينغ ذ.م.م شركة مقرها قطر وتعمل في بيع إكسسوارات الملابس بالتجزئة. نهدف إلى تقديم إكسسوارات عملية وأنيقة لمختلف الاحتياجات والمناسبات.",
      "DIMA PLUS TADING W.L.L. قطر میں قائم ایک کمپنی ہے جو کپڑوں کی ایکسیسریز کی خوردہ فروخت کرتی ہے۔ ہمارا مقصد مختلف ضروریات اور مواقع کے لیے مفید، خوبصورت اور پائیدار ایکسیسریز پیش کرنا ہے۔",
      "DIMA PLUS TADING W.L.L. क़तर में स्थित एक कंपनी है, जो कपड़ों के एक्सेसरीज़ की खुदरा बिक्री करती है। हमारा उद्देश्य अलग-अलग ज़रूरतों और मौकों के लिए उपयोगी, आकर्षक और सदाबहार एक्सेसरीज़ पेश करना है।"
    ],
    aboutTextTwo: [
      "Our products include gloves, ties, suspenders, prayer beads and umbrellas. We believe in clear communication, thoughtful selection and professional customer service.",
      "تشمل منتجاتنا القفازات وربطات العنق والحمالات والمسابح والمظلات. نؤمن بالتواصل الواضح والاختيار المدروس وخدمة العملاء الاحترافية.",
      "ہماری مصنوعات میں دستانے، ٹائیاں، سسپینڈر، تسبیح اور چھتریاں شامل ہیں۔ ہم واضح رابطے، سوچ سمجھ کر انتخاب اور پیشہ ورانہ کسٹمر سروس پر یقین رکھتے ہیں۔",
      "हमारे उत्पादों में दस्ताने, टाई, सस्पेंडर, तस्बीह और छतरियाँ शामिल हैं। हम स्पष्ट संवाद, सोच-समझकर चयन और पेशेवर ग्राहक सेवा में विश्वास करते हैं।"
    ],
    aboutLink: [
      "Get in Touch ↗", "تواصل معنا ↗",
      "رابطہ کریں ↗", "संपर्क करें ↗"
    ],

    contactEyebrow: [
      "LET'S CONNECT", "لنتواصل", "آئیے رابطہ کریں", "आइए जुड़ें"
    ],
    contactTitle: [
      "Contact Our Team", "تواصل مع فريقنا",
      "ہماری ٹیم سے رابطہ کریں", "हमारी टीम से संपर्क करें"
    ],
    contactText: [
      "Have a question? Contact us using the details below.",
      "هل لديك سؤال؟ تواصل معنا عبر التفاصيل أدناه.",
      "کوئی سوال ہے؟ نیچے دی گئی تفصیلات کے ذریعے رابطہ کریں۔",
      "कोई सवाल है? नीचे दी गई जानकारी से संपर्क करें।"
    ],

    whatsappLabel: [
      "WHATSAPP / PHONE", "واتساب / الهاتف",
      "واٹس ایپ / فون", "व्हाट्सऐप / फ़ोन"
    ],
    whatsappDetail: [
      "Message us directly", "راسلنا مباشرة",
      "ہمیں براہ راست پیغام بھیجیں", "हमें सीधे संदेश भेजें"
    ],
    emailLabel: [
      "EMAIL", "البريد الإلكتروني", "ای میل", "ईमेल"
    ],
    emailDetail: [
      "Send us an email", "أرسل لنا بريدًا إلكترونيًا",
      "ہمیں ای میل بھیجیں", "हमें ईमेल भेजें"
    ],
    addressLabel: [
      "OUR ADDRESS", "عنواننا", "ہمارا پتہ", "हमारा पता"
    ],
    addressTitle: [
      "Qatar", "قطر", "قطر", "क़तर"
    ],
    addressDetail: [
      "Building 488, Street 340, Zone 55, 1st Floor, Office 12, Qatar.",
      "مبنى 488، شارع 340، منطقة 55، الطابق الأول، مكتب 12، قطر.",
      "بلڈنگ 488، اسٹریٹ 340، زون 55، پہلی منزل، آفس 12، قطر۔",
      "बिल्डिंग 488, स्ट्रीट 340, ज़ोन 55, पहली मंज़िल, ऑफिस 12, क़तर।"
    ],

    ctaTitle: [
      "Let's Start a Conversation", "لنبدأ حوارًا",
      "آئیے بات چیت شروع کریں", "आइए बातचीत शुरू करें"
    ],
    ctaText: [
      "We welcome your enquiries.",
      "نرحب باستفساراتكم.",
      "ہم آپ کے سوالات کا خیرمقدم کرتے ہیں۔",
      "हम आपकी पूछताछ का स्वागत करते हैं।"
    ],
    ctaButton: [
      "Contact on WhatsApp", "تواصل عبر واتساب",
      "واٹس ایپ پر رابطہ کریں", "व्हाट्सऐप पर संपर्क करें"
    ],

    footerText: [
      "Clothing accessories and everyday essentials in Qatar.",
      "إكسسوارات الملابس والاحتياجات اليومية في قطر.",
      "قطر میں کپڑوں کی ایکسیسریز اور روزمرہ کی ضروریات۔",
      "क़तर में कपड़ों के एक्सेसरीज़ और रोज़मर्रा की ज़रूरतें۔"
    ],
    privacy: [
      "Privacy Policy", "سياسة الخصوصية",
      "پرائیویسی پالیسی", "गोपनीयता नीति"
    ],
    terms: [
      "Terms & Conditions", "الشروط والأحكام",
      "شرائط و ضوابط", "नियम और शर्तें"
    ],
    rights: [
      "All rights reserved.", "جميع الحقوق محفوظة.",
      "جملہ حقوق محفوظ ہیں۔", "सर्वाधिकार सुरक्षित।"
    ]
  };

  function setLanguage(language) {
    if (!languages.includes(language)) {
      language = "en";
    }

    const index = languages.indexOf(language);
    const rtl = language === "ar" || language === "ur";

    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      const values = translations[key];

      if (values) {
        element.textContent = values[index];
      }
    });

    if (languageSelect) {
      languageSelect.value = language;
    }

    try {
      localStorage.setItem("dima-language", language);
    } catch (error) {
      // Language switching works even if storage is unavailable.
    }
  }

  // Restore the previously selected language.
  let currentLanguage = "en";

  try {
    const saved = localStorage.getItem("dima-language");

    if (languages.includes(saved)) {
      currentLanguage = saved;
    }
  } catch (error) {
    // English is the default language.
  }

  setLanguage(currentLanguage);

  // Change language when the visitor selects an option.
  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      setLanguage(languageSelect.value);
    });
  }

  // Mobile navigation.
  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const opened = navigation.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(opened));
      menuButton.setAttribute(
        "aria-label",
        opened ? "Close navigation" : "Open navigation"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  // Automatically update copyright year.
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
