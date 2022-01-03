function menuMobile() {
  const btnMobile = document.querySelector('.btn-mobile');
  
  // const navbar = document.querySelector('.navbar');

  function toggleMenu(event) {
    
    const navbarMenu = document.querySelector('.navbar-menu');

    if (event.type === 'touchstart') {
      event.preventDefault();
    }

    navbarMenu.classList.toggle('active');
    event.currentTarget.setAttribute('aria-expended', 'true')
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('tochstart', toggleMenu);
}

menuMobile();
