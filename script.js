const button=document.querySelector('.sidebarbutton')
const background=document.querySelector(".homepage")
const sidebar =document.querySelector(".sidebar")
const menuTop =document.querySelector(".menuTop")
const menuBottom =document.querySelector(".menuBottom")
const cardcontainer=document.querySelector(".cardDetail")
const activeones=document.querySelectorAll(".inactive")




background.addEventListener("click",()=>{sidebar.classList.remove('sidebaar')})

button.addEventListener("click",()=>{sidebar.classList.toggle('sidebaar')
activeones.forEach(e=> e.classList.toggle("imageContShift"))

cardcontainer.classList.toggle('cardshift')
menuTop.classList.toggle('menuTopActive')
menuBottom.classList.toggle('menuBottomActive')})







