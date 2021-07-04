const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

// MUDAR HEADER QUANDO DER SCROLL


function changeHeaderWenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight){
    // SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else {
    // MENOS QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
}

// TESTIMONIAL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLLREVEAL SUAVISAR EXIBIÇÃO DE ITENS
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about.text,
   #services .header, #services .card,
   #testimonials .header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `, {interval: 100})

  // BACK TO TOP
  function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    }else {
      backToTopButton.classList.remove('show')
    }
  }

  // WHEN SCROLL
  window.addEventListener('scroll', function() {
    changeHeaderWenScroll()
    backToTop()
  })