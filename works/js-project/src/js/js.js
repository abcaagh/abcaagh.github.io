console.info('%cbehzkan', 'font-size: 30px;background: #342b38; color: #ff9595; text-shadow: 2px 2px black; border: 1px solid black; padding: 20px; padding-right:100px ;padding-left:100px;text-align: center;border-radius: 4px;margin: 20px; ');

import { reverseStr } from "./apps/reverseStr.js";
import { counter } from './apps/counter.js';
import {  } from "./apps/randomBg.js";
import {} from './apps/slider.js';
    
counter()

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

//calendar
(function () {
    const lang = navigator.language

    let date = new Date()

    let monthName = date.toLocaleString(lang, { month: 'long' })
    let dayName = date.toLocaleString(lang, { weekday: 'long' })
    let dayNumber = date.getDate()
    let year = date.getFullYear()

    document.getElementById('monthName').innerHTML = monthName
    document.getElementById('dayName').innerHTML = dayName
    document.getElementById('dayNumber').innerHTML = dayNumber
    document.getElementById('year').innerHTML = year

})();
//pick color
(function () {
    const colorContent = document.querySelector('.pick-color')
    const colorPicker = document.getElementById('colorPicker')

    colorPicker.addEventListener('input', () => {
        colorContent.style.background = colorPicker.value
        console.log(colorContent.style.background);
    })
})();

//mosaic
(function () {
    const mosaic = document.querySelector('.mosaic-block')
    const btns = document.querySelectorAll('.mosaic button')


    for (let i = 0; i < 96; i++) {
        const div = document.createElement('div')
        mosaic.appendChild(div)
        div.classList.add('box')
        changeColor(div)
    }


    function randomizeColor() {
        const hexValue = 'abcfde123456'
        const colorLength = 6
        let color = ''

        for (let i = 0; i < colorLength; i++) {
            let colorNumber = Math.floor(Math.random() * hexValue.length)
            color += hexValue.substring(colorNumber, colorNumber + 1)
        }
        return '#' + color
    }

    function setColor() {
        document.querySelectorAll('.mosaic .box').forEach((box) => {
            box.style.background = randomizeColor()
            box.classList.add('box-shadow')
        })
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent === 'type1') {
                setColor()
            }

        })
    })

    function changeColor(div) {
        div.addEventListener('click', () => {
            div.style.background = randomizeColor()
        })
    }
})();

(function () {
    const quotesList = [
        {
            quote: `— Это не ответ.<br>
            — Нет, это ответ. Просто это не то, что вы хотите услышать.`,
            author: 'Виталий Мухаметзянов'
        },
        {
            quote: `
            Иногда момент, который ты так долго ждал, приходит в самое неподходящее время...
            `,
            author: 'Доктор Джон «Джей Ди (J.D.)» Дориан'
        },
        {
            quote: 'Денег, которые я заработал, хватит мне до конца жизни, если я умру сегодня в 16.00.',
            author: 'Хенни Янгман'
        },
        {
            quote: 'Ничто так не выдает человека, как то, над чем он смеётся.',
            author: 'Иоганн Вольфганг фон Гёте'
        },
        {
            quote: 'Каждый живет, как хочет, и расплачивается за это сам.',
            author: 'Оскар Уайльд'
        },
        {
            quote: 'Иногда хватает мгновения, чтобы забыть жизнь, а иногда не хватает жизни, чтобы забыть мгновение.',
            author: 'Джим Моррисон'
        },
        {
            quote: 'Все мы гении. Но если вы будете судить рыбу по её способности взбираться на дерево, она проживёт всю жизнь, считая себя дурой.',
            author: 'Альберт Эйнштейн'
        },
        {
            quote: 'Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает... и никто не знает почему!',
            author: 'Альберт Эйнштейн'
        },
        {
            quote: 'Самой большой ошибкой, которую вы можете совершить в своей жизни, является постоянная боязнь ошибаться.',
            author: 'Элберт Грин Хаббард'
        },
        {
            quote: `
                    — И сколько же это будет стоить?<br>
                    — Это бесплатно!<br>
                    — Звучит дороговато.
                `,
            author: 'Симпсоны (The Simpsons)'
        },
        {
            quote: 'Если вы хотите иметь то, что никогда не имели, вам придётся делать то, что никогда не делали.',
            author: 'Коко Шанель'
        }
    ]

    const btn = document.querySelector('.quote-block button'),
        quoteText = document.querySelector('.quote-text'),
        author = document.querySelector('.author strong');


    let lastQuote = 0

    btn.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * quotesList.length)

        while (randomNumber == lastQuote) {
            randomNumber = Math.floor(Math.random() * quotesList.length)
        }
        quoteText.innerHTML = quotesList[randomNumber].quote
        author.textContent = quotesList[randomNumber].author
        lastQuote = randomNumber
    })
})()

