function menuMobile() {
  const btnMobile = document.querySelector('.btn-mobile');

  function toggleMenu(event) {
    const navbar = document.querySelector('.navbar');
    const active = navbar.classList.contains('active');

    if (event.type === 'touchstart') {
      event.preventDefault();
    }

    navbar.classList.toggle('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('tochstart', toggleMenu);
}

menuMobile();

// const linksInternos = document.querySelectorAll('.navbar-links a[href^="#"]');
// const navbar = document.querySelector('.navbar');


// function smoothScroll(event) {
//   event.preventDefault()

// }

// linksInternos.forEach((link) => {
//   link.addEventListener('click', smoothScroll);
// });
