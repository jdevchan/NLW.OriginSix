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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight){
    // SCROLL É MAIOR QUE A ALTURA DO HEADER
    header.classList.add('scroll')
  } else {
    // MENOS QUE A ALTURA DO HEADER
    header.classList.remove('scroll')
  }
})
