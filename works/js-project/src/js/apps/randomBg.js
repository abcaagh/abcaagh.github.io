const backGround = document.querySelector('.random-bg')
const btn = backGround.querySelector('.btn')
const randomNumber = backGround.querySelector('.random-output')

setBgColor()

btn.addEventListener('click', () => {
    let color =  randomizeColor()
    setBgColor( color )
})

function randomizeColor() {
    const hexValues = '123456abcdfe'
    const colorLength = 6
    let hex = '#'

    for(let i = 0; i < colorLength; i++) {
        const randomNumber = Math.floor(Math.random() * hexValues.length)
        hex += hexValues.slice(randomNumber, randomNumber + 1)        
    }
    return hex
}

function setBgColor(color) {
    color ? backGround.style.background =  randomNumber.textContent  = color 
          : randomNumber.textContent = null
}