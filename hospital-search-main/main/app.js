// document.body.style.zoom = .9
const hamburger = document.querySelector(".ham-bar")
const links = document.querySelector(".links")
let counter = 0

const spec = document.querySelector(".mul-spec_icon")
const trans = document.querySelector('.content')
let c2 = 0
spec.addEventListener("click",() => {
    if(!c2){
        trans.style.transform = "translateY('0')"
        trans.style.opacity = "1"
        c2 = 1
    }else{
        trans.style.transform = "translateY('-10rem')"
        trans.style.opacity = "0"
        c2 = 0
    }
})

hamburger.addEventListener("click",() => {
    if(!counter){
        links.style.transform = "translateY('0')"
        links.style.opacity = "1"
        counter = 1
    }else{
        links.style.transform = "translateY('-10rem')"
        links.style.opacity = "0"
        counter = 0
    }
})
