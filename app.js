document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuButton = document.querySelector(
    "#menu-toggle, #menuToggle, #mobile-menu-btn, #hamburger, .menu-toggle, .hamburger"
  );

  const nav = document.querySelector(
    "#nav-menu, #navMenu, #nav-links, #navbar-menu, .nav-links, .nav-menu"
  );

  if (menuButton && nav) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      nav.classList.toggle("open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active", "open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // English / Arabic language toggle
  const languageButton = document.querySelector(
    "#language-toggle, #languageToggle, #lang-toggle, #langToggle, .language-toggle"
  );

  let currentLanguage = localStorage.getItem("dima-language") || "en";

  function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
      element.textContent =
        language === "ar"
          ? element.getAttribute("data-ar")
          : element.getAttribute("data-en");
    });

    if (languageButton) {
      languageButton.textContent = language === "ar" ? "English" : "العربية";
      languageButton.setAttribute("aria-label", "Change website language");
    }

    localStorage.setItem("dima-language", language);
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      setLanguage(currentLanguage === "en" ? "ar" : "en");
    });
  }

  setLanguage(currentLanguage);
});
