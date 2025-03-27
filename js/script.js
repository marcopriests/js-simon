//recupero gli elementi dal dom
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numberList = document.getElementById('number-list')
const form = document.getElementById('answers-form')

//comportamento programma
setTimeout(function () {
    console.log("tempo scaduto")

    instructions.innerText = "Inserisci i numeri che ricordi"
    form.classList.remove('d-none')
}, 10000)