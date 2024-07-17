const getPassword = document.getElementById("get-password")
const numberCharacters = document.getElementById("number-characters")
const passwordResult = document.getElementById("password-result")

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"
const characters = mayusculas + minusculas + numeros + simbolos

let password = ""

const randomNumber = (min, max) =>{
    return Math.floor(Math.random()*(max-min) + min)
}

const getCharacter = (string) => {
    return password += string[randomNumber(1,string.length)]
}

const getLastCharacters = (number) => {
    const characters = mayusculas + minusculas + numeros + simbolos
    let lastPassword = ""
    for(let i = 4; i < number; i++){
        lastPassword = getCharacter(characters)
    }return lastPassword
}

getPassword.addEventListener("click",() => {
    password = ""
    const passwordLength = numberCharacters.value
    if(passwordLength < 12 || passwordLength > 50) {
        return window.alert("Introduce un número entre 12 y 50")
    }
    getCharacter(mayusculas)
    getCharacter(minusculas)
    getCharacter(numeros)
    getCharacter(simbolos)
    getLastCharacters(passwordLength)
    passwordResult.innerHTML = `<p>Contraseña Generada:</p><span>${password}</span>`
})

