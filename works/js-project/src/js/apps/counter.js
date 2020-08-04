const counterValue = document.querySelector('.counter-number')
const btns = document.querySelectorAll('.counter-btns .btn')
let number = getLocalStorage() ? getLocalStorage() : 0
setNumber(number)

//event on click 
export const counter = () => {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-count') === 'decrase') {
                number--
            } else if (btn.getAttribute('data-count') === 'increase') {
                number++
            } else {
                number = 0
            }
            setLocalStorage(number)
            setNumber(number)
        })
    });
}

function setLocalStorage(int) {
    if (int) {
        localStorage.setItem('counterNumber', int)
    }else {
        localStorage.removeItem('counterNumber')
    }
}
function getLocalStorage() {
    return localStorage.getItem('counterNumber')
}

//enter to html
function setNumber(int) {
    counterValue.innerHTML = int
    setColor(int)
}

//color of number
function setColor(int) {
    if (int > 0) {
        counterValue.style.color = '#f9d89c'
    } else if (int < 0) {
        counterValue.style.color = '#5fdde5'
    } else {
        counterValue.style.color = '#f96d80'
    }
}

