console.info('%cbehzkan', 'font-size: 30px;background: #342b38; color: #ff9595; text-shadow: 2px 2px black; border: 1px solid black; padding: 20px; padding-right:100px ;padding-left:100px;text-align: center;border-radius: 4px;margin: 20px; ');

const scrollToTop = document.getElementById('scroll-to-top')
let dataShow = false


//scroll-link
window.addEventListener('scroll', function () {
    if (window.scrollY > 50 && !dataShow) {
        scrollToTop.setAttribute('data-show', 'true')
        dataShow = true
    }
    if (window.scrollY < 50 && dataShow) {
        scrollToTop.setAttribute('data-show', 'false')
        dataShow = false
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//Counter
(function () {
    const counter = document.querySelector('.counter-value')
    const btnParent = document.querySelector('.counter-btn')

    btnParent.addEventListener('click', (event) => {
        const target = event.target
        if (counter.textContent.length < 3) {
            if (target.textContent === '+') {
                counter.textContent++
            } else if (target.textContent === '-') {
                counter.textContent--
            }
        } else {
            counter.textContent = 0
        }
        color()
    })

    function color(value) {
        if (counter.textContent > 0) {
            counter.style.color = '#f9d89c'
        } else if (counter.textContent < 0) {
            counter.style.color = '#5fdde5'
        } else {
            counter.style.color = '#f96d80'

        }
    }
})();

//randomHexColor
(function () {
    const btn = document.querySelector('.random-hex button')
    const hexValue = document.querySelector('.hex-value strong')
    const hexContent = document.querySelector('.random-hex')
    const hexValues = ['a', 'b', 'c', 'd', 'f', 1, 2, 3, 4, 5, 6]

    function changeColor() {
        let hex = '#'
        for (let i = 0; i < 6; i++) {
            const index = parseInt(Math.random() * hexValues.length)
            hex += hexValues[index]
        }
        hexContent.style.background = hex
        hexValue.textContent = hex
    }

    btn.addEventListener('click', changeColor)
})();

//toDoList
(function () {
    const form = document.getElementById('itemForm')
    const itemInput = form.querySelector('#itemInput')
    const itemList = document.querySelector('.item-list')
    const feedback = document.querySelector('.feedback')
    const clearBtn = document.getElementById('clear-list')

    let todoItems = []

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const itemName = itemInput.value

        if (itemName.length == 0) {
            feedback.innerHTML = 'Please enter valid value'
            feedback.classList.add('showItem', 'alert-danger')
            setTimeout(() => {
                feedback.classList.remove('showItem', 'alert-danger')
            }, 3000)
        } else {
            todoItems.push(itemName)
            setLocalStorage(todoItems)
            getList(todoItems)
        }
        itemInput.value = ''
    })

    const setLocalStorage = (todoItems) => {
        localStorage.setItem('todoItems', JSON.stringify(todoItems))
    }

    const getList = (todoItems) => {
        itemList.innerHTML = ''

        todoItems.forEach(item => {
            itemList.insertAdjacentHTML('afterbegin',
                `<div class="item my-3">
                <h5 class="item-name text-capitalize">${item}</h5>
                <div class="item-icons">
                    <a href="#" class="complete-item mx-2 item-icon">
                        <i class="fa fa-check-circle"></i>
                    </a>
                    <a href="#" class="edit-item mx-2 item-icon">
                        <i class="fa fa-edit"></i>
                    </a>
                    <a href="#" class="delete-item item-icon">
                        <i class="fa fa-times-circle"></i>
                    </a>
                </div>
            </div>`
            )
            handleItem(item)
        });
    }

    const handleItem = (itemName) => {
        const items = itemList.querySelectorAll('.item')

        items.forEach(item => {
            if(item.querySelector('.item-name').textContent === itemName){
                item.querySelector('.complete-item').addEventListener('click', function(e){
                    e.preventDefault()
                    item.querySelector('.item-name').classList.toggle('completed')
                    this.classList.toggle('visibility')
                })

                item.querySelector('.edit-item').addEventListener('click',function(e){
                    e.preventDefault()
                    itemInput.value = itemName
                    itemList.removeChild(item)

                    todoItems = todoItems.filter(item => {
                        return item !== itemName
                    })
                })

                item.querySelector('.delete-item').addEventListener('click',function(e){
                    e.preventDefault()

                    itemList.removeChild(item)
                    todoItems  = todoItems.filter(item => item !== itemName)
                    setLocalStorage(todoItems)
                    showFeedback(itemName, 'item-deleted','info')
                })
            }
        })
    }

    const showFeedback = (itemName, itemText, itemStatus) => {
        if(itemName && itemText && itemStatus){
                feedback.innerHTML = `${itemName} deleted`
                feedback.classList.add('showItem', 'alert-'+itemStatus)
                setTimeout(()=> {
                    feedback.classList.remove('showItem')
                },3000)
        }
    }

    const getLocalStorage = () => {
        const todoStorage = localStorage.getItem('todoItems')
        if (todoStorage === 'undefined' || todoStorage == null) {
            todoItems = []
        } else {
            todoItems = JSON.parse(todoStorage)
            getList(todoItems)
        }
    }
    getLocalStorage()

    clearBtn.addEventListener('click', () => {
        todoItems = []
        localStorage.clear()
        getList(todoItems)
    })
})();

//slider
(function(){
    
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

    const btns = document.querySelectorAll('.slider a')
    const sliderBackground = document.querySelector('.slider')
    let index = 0

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('btn-left')){
                index--
                if(index < 0){
                    index = pictures.length - 1
                }
            }
            if(btn.classList.contains('btn-right')){
                index++
                if(index > pictures.length - 1){
                    index = 0
                }
            }
            sliderBackground.style.backgroundImage = `url('./img/slider/${pictures[index]}.jpg')`
        })
    })
})();

//calendar
(function(){
    const lang = navigator.language

    let date = new Date()

    let monthName = date.toLocaleString(lang, {month: 'long'})
    let dayName = date.toLocaleString(lang, {weekday: 'long'})
    let dayNumber = date.getDate()
    let year = date.getFullYear()

    document.getElementById('monthName').innerHTML = monthName
    document.getElementById('dayName').innerHTML = dayName
    document.getElementById('dayNumber').innerHTML = dayNumber
    document.getElementById('year').innerHTML = year

})();
//pick color
(function(){
    const colorContent = document.querySelector('.pick-color')
    const colorPicker = document.getElementById('colorPicker')

    colorPicker.addEventListener('input', () => {
        colorContent.style.background = colorPicker.value
        console.log(colorContent.style.background);
    })
})();