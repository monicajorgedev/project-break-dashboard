const list = document.getElementById("list")
const inputName = document.getElementById("input-name")
const inputUrl = document.getElementById("input-url")
const btnLink = document.getElementById("btn-link")


let arrlinks = [];

const createTemplete = ()=>{
    list.innerHTML = ""
    arrlinks = JSON.parse(localStorage.getItem("links"))
    arrlinks.forEach((link, i) => {
        const template = `<li><img src=${link.icon} alt="icono"><a href="${link.url}" target="_blank">${link.name}</a><button class="btnClose"id="btnClose-${i}">x</button></li>`
        list.insertAdjacentHTML("beforeend", template)
        const btnClose = document.getElementById(`btnClose-${i}`)
        btnClose.addEventListener("click", ()=>{
            removelink(i)
            createTemplete()
        })
    })
}

const removelink = (i)=> {
    arrlinks.splice(i,1)
    localStorage.setItem("links", JSON.stringify(arrlinks))
}

btnLink.addEventListener("click", ()=> {
    if(inputName.value === "" || inputUrl.value === ""){
        return window.alert("Introduce Nombre de enlace y URL")
    } 
    if(!inputUrl.value.startsWith("https://")){
        return window.alert("Introduce una URL completa")
    } const link = {
        name: inputName.value,
        url: inputUrl.value, 
        icon: `"https://www.google.com/s2/favicons?domain=${inputUrl.value}"`
        }
        arrlinks.push(link) 
        localStorage.setItem("links", JSON.stringify(arrlinks))
        createTemplete()
        inputName.value = ""
        inputUrl.value = ""
})


window.addEventListener("load",()=> {
    createTemplete()
})