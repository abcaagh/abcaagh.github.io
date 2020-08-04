const scrollUp = document.querySelector('.scroll-to-up')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        scrollUp.setAttribute('data-show', 'true')
    }
    if(window.scrollY < 100){
        scrollUp.setAttribute('data-show', 'false')
    }
})

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })
})