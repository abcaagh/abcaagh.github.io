const welcome = document.querySelector('.welcome')

window.addEventListener('load', () => {
   welcome.style.display = 'block'
})

//mobile menu
const menuToggle = document.querySelector('.menu-toggle')
const backdrop = document.querySelector('.backdrop')

backdrop.addEventListener('click', function (e) {
   if (e.target.classList.contains('backdrop')) {
      menuToggle.classList.remove('active')
      backdrop.style.display = 'none'
   }

})
menuToggle.addEventListener('click', () => {
   if (menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active')
      backdrop.style.display = 'none'
   } else {
      menuToggle.classList.add('active')
      backdrop.style.display = 'block'
   }
})