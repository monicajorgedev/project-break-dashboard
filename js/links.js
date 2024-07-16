const list = document.getElementById("list")
const inputName = document.getElementById("inputName")
const inputUrl = document.getElementById("inputUrl")
const btnLink = document.getElementById("btnLink")


let arrlinks = [];

const createTemplete = ()=>{
    list.innerHTML = ""
    arrlinks = JSON.parse(localStorage.getItem("links"))
    arrlinks.forEach((link, i) => {
        const template = `<li><a href="${link.url}" target="_blank">${link.name}</a><button class="btnClose"id="btnClose-${i}">x</button></li>`
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
        }
        console.log(arrlinks)
        arrlinks.push(link) 
        localStorage.setItem("links", JSON.stringify(arrlinks))
        createTemplete()
        inputName.value = ""
        inputUrl.value = ""
})


window.addEventListener("load",()=> {
    createTemplete()

})