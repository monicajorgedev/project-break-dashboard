
const hour = document.getElementById("hour")
const date = document.getElementById("date")
const textClock = document.getElementById("textClock") 

const ceroSiete = "Es hora de descansar. Apaga y sigue mañana"
const sieteDoce = "Buenos días, desayuna fuerte y a darle al código"
const doceCatorce = "Echa un rato más pero no olvides comer"
const catorceDieciseis ="Espero que hayas comido"
const dieciseisDieciocho = "Buenas tardes, el último empujón"
const dieciochoVeintidos = "Esto ya son horas extras, ... piensa en parar pronto"
const veintidosCero = "Buenas noches, es hora de pensar en parar y descansar"


const dateAndHour = () => {
    const nowDate = new Date().toLocaleDateString()
    const nowHour = new Date().toLocaleTimeString()
    
    date.innerHTML = nowDate
    hour.innerHTML = nowHour

    const numHour = new Date().getHours()

    if (numHour >= 0 && numHour < 7) {
        textClock.textContent = ceroSiete;
    } else if (numHour >= 7 && numHour < 12) {
        textClock.textContent = sieteDoce;
    } else if (numHour >= 12 && numHour < 14) {
        textClock.textContent = doceCatorce;
    } else if (numHour >= 14 && numHour < 16) {
        textClock.textContent = catorceDieciseis;
    } else if (numHour >= 16 && numHour < 18) {
        textClock.textContent = dieciseisDieciocho;
    } else if (numHour >= 18 && numHour < 22) {
        textClock.textContent = dieciochoVeintidos;
    } else if (numHour >= 22 && numHour < 24) {
        textClock.textContent = veintidosCero;
    }
}

dateAndHour()
setInterval(dateAndHour,1000)

