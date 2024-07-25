const getPassword = document.getElementById("get-password")
const numberCharacters = document.getElementById("number-characters")
const passwordResult = document.getElementById("password-result")

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"
const characters = mayusculas + minusculas + numeros + simbolos


const randomNumber = (min, max) =>{
    return Math.floor(Math.random()*(max-min) + min)
}

const getCharacter = (string) => {
    return  string[randomNumber(1,string.length)]
}

const getLastCharacters = (number) => {
    let lastPassword = ""
    for(let i = 4; i < number; i++){
        lastPassword += getCharacter(characters)
    }return lastPassword
}

getPassword.addEventListener("click",() => {
    let password = ""
    const passwordLength = numberCharacters.value
    if(passwordLength < 12 || passwordLength > 50) {
        return window.alert("Introduce un número entre 12 y 50")
    }
    password += getCharacter(mayusculas)
    password += getCharacter(minusculas)
    password += getCharacter(numeros)
    password += getCharacter(simbolos)
    password += getLastCharacters(passwordLength)
    passwordResult.innerHTML = `<p>Contraseña Generada:</p><span>${password}</span>`
})

