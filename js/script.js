//recupero gli elementi dal dom
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numberList = document.getElementById('number-list')
const form = document.getElementById('answers-form')

let seconds = 10

//comportamento programma
countdown.innerText = seconds

setTimeout(function () {
    console.log("tempo scaduto")

    instructions.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
    form.classList.remove('d-none')
}, 10000)

let timer = setInterval(function () {
    seconds--

    countdown.innerText = seconds

    if (seconds === 0) {
        clearInterval(timer)
    }
}, 1000)

const randomNum = () => Math.floor(Math.random() * 100 + 1)

console.log(randomNum())