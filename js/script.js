//recupero gli elementi dal dom
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numberList = document.getElementById('numbers-list')
const form = document.getElementById('answers-form')

let seconds = 10

//comportamento programma
countdown.innerText = seconds

const randomNum = () => Math.floor(Math.random() * 100 + 1)

for (let i = 1; i <=5; i++) {
    let li = document.createElement('li') 
    li.append(randomNum())
    numberList.appendChild(li)       
}

setTimeout(function () {
    console.log("tempo scaduto")

    instructions.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
    form.classList.remove('d-none')
    numberList.classList.add('d-none')
}, 10000)

let timer = setInterval(function () {
    seconds--

    countdown.innerText = seconds

    if (seconds === 0) {
        clearInterval(timer)
    }
}, 1000)