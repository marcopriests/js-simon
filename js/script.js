//recupero gli elementi dal dom
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numberList = document.getElementById('numbers-list')
const form = document.getElementById('answers-form')
const inputs = document.querySelectorAll(".form-control")
const bottone = document.querySelector('.btn')
const message = document.getElementById('message')


let seconds = 10

const numArray = []

//comportamento programma
countdown.innerText = seconds

const randomNum = () => Math.floor(Math.random() * 100 + 1)

for (let i = 0; i < 5; i++) {
    let num = randomNum()

    numArray.push(num)

    let li = document.createElement('li') 
    li.append(num)
    numberList.appendChild(li)       
}

console.log(numArray)

setTimeout(function () {
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

bottone.addEventListener('click', function(event){
    event.preventDefault()

    const guessedNums = []

    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[i].value == numArray[j]) {
                guessedNums.push(inputs[i].value)
            }
            
        }
    }

    console.log('cliccato')
    message.innerText = "Hai indovinato " + guessedNums.length + " numeri! (" + guessedNums + ")"
})