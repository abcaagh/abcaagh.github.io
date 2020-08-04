const form = document.querySelector('.reverse .reverse-form'),
    input = form.querySelector('.reverse__input'),
    output = document.querySelector('.reverse .reverse-output p'),
    type = form.querySelector('.reverse .reverse-select');

export const reverseStr = (event) => {
    const str = event.target.value
    let newStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    setStr(newStr)
}

function setStr(str) {
    output.textContent = str
}

form.addEventListener('input', (event) => {

    event.preventDefault()

    if(type.value == 'type1') {
        reverseStr(event)
    }else {
        
    }
})
