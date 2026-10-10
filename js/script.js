document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const links = document.querySelectorAll('.navbar .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  year.textContent = new Date().getFullYear();

  const updateNav = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    let current = "home";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Close mobile menu after clicking a navigation link
  links.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navbarNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
