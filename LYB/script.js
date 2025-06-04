// LANGUAGE TOGGLE
const languageToggle = document.getElementById('language-toggle');
const translatableElements = document.querySelectorAll('[data-en][data-zh]');
let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  updateLanguage();
});

function updateLanguage() {
  translatableElements.forEach(el => {
    el.textContent = el.dataset[currentLanguage];
  });

  languageToggle.src = currentLanguage === 'en' ? 'images/uk-flag.png' : 'images/china-flag.png';
  languageToggle.alt = currentLanguage === 'en' ? 'Switch to Chinese' : '切换到英语';

}

// Optional: Close dropdowns if user clicks outside
document.addEventListener('click', (e) => {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});

// Optional: Show dropdown on hover (for mobile fallback)
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const menu = dropdown.querySelector('.dropdown-content');
    if (menu) menu.style.display = 'block';
  });
  dropdown.addEventListener('mouseleave', () => {
    const menu = dropdown.querySelector('.dropdown-content');
    if (menu) menu.style.display = 'none';
  });
});
