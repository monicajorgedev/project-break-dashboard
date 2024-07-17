const getRandomNumber = (min, max) =>{
    return Math.floor(Math.random()*(max-min) + min)
}

const changeBackground = ()=> {
    return document.body.style.backgroundImage = `url(./assets/img/background/${getRandomNumber(1,12)}.jpg)`
}
changeBackground()
setInterval(changeBackground,15000)
