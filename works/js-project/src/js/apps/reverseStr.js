const form = document.querySelector('.reverse .form'),
    input = document.querySelector('.form-input'),
    output = document.querySelector('.reverse div p'),
    type = form.querySelector('.reverse .form-select');

form.addEventListener('input', (event) => {
    const string = input.value
    event.preventDefault()

    if (type.value == 'type1') {
        setStr(type1(string))
    } else if (type.value == 'type2') {
        setStr(type2(string))
        console.log('2');
    } else {
        camelCase(string)
    }
})

export const reverseStr = (str) => {
    let newStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

function setStr(str) {
    output.innerHTML = str
}

//reverse str
function type1(value) {
    return reverseStr(value)
}

//reverse str
function type2(value) {
    const newStr = []
    value.split(" ").map(word => {
        newStr.push(reverseStr(word))
    })
    return newStr.join(" ")
}

//first letter toUpperCase()
function camelCase(string) {
    setStr(
        string.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
    )
}

const btn = document.querySelector('.copyBtn')

btn.addEventListener('click', () => {
    let stu = 'slpo'
    stu.select()
    document.execCommand('copy')
    console.log('btn');
})