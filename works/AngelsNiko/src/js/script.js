const scrollUp = document.querySelector('.scroll-to-up')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollUp.setAttribute('data-show', 'true')
    }
    if (window.scrollY < 100) {
        scrollUp.setAttribute('data-show', 'false')
    }
})

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })
})
//mobile-menu-toggle
const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('mobile-menu')
})