const bgImage = document.querySelector('.slider')
const btns = bgImage.querySelectorAll('.slider a')

const pictures = [
    "canyon_sunset",
    "grass_fields",
    "green_forest",
    "jellyfish",
    "landscape",
    "mountain",
    "mountain_dusk",
    "palm_tree",
    "plane_forest",
    "river_snowfall"
]

btns.forEach(btn => {
    let index = 0
    btn.addEventListener('click', () => {
        if(btn.classList.contains('btn-left')) {
            index--
            index < 0 ? index = pictures.length - 1 : null
        }else {
            index++
            index > pictures.length - 1 ? index = 0 : null
        }
        bgImage.style.backgroundImage = `url('./img/slider/${pictures[index]}.jpg')`
    })
})
