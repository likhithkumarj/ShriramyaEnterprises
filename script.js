document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!toggleBtn || !mainNav) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('is-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking on any navigation link
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when clicking outside the header
  document.addEventListener('click', (event) => {
    if (!event.target.closest('header.top')) {
      closeMenu();
    }
  });

  // Close menu on pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // Reset menu state if resized wider than 848px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 848) {
      closeMenu();
    }
  });
});

