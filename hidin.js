
const arraybutton=document.querySelectorAll("[data-tab-target]")
const tabcontents=document.querySelectorAll(".inactive")





arraybutton.forEach(e=>{
    e.addEventListener("click",()=>{
        const tget=document.querySelector(e.dataset.tabTarget)
        tabcontents.forEach(a=>{
            a.classList.remove("active");
        })
        tget.classList.add("active")
        cardcontainer.classList.add("inactive");

    
})

})


//const sevenwonders=document.querySelector(".sw");
//const sevenwondersbutton=document.querySelector(".swondersMenu");


//sevenwondersbutton.addEventListener("click",()=>{sevenwonders.classList.remove("sevenwonders")})

const detailbtn=document.querySelectorAll("[data-detail]")

detailbtn.forEach(e=>{
    e.addEventListener("click",()=>{
        const tget=document.querySelector(e.dataset.detail)
       tget.classList.toggle('act');
       e.classList.toggle('readmorClk')       

    })
})


const scroll=document.querySelectorAll("[data-scrol]")

scroll.forEach(e=>{
    e.addEventListener("click",()=>{
        const tget=document.querySelector(e.dataset.scrol)
        tget.classList.toggle('act');       

    })
})
