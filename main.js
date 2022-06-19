let arrayCarousel = ["./bricks-kim-kristina.jpg","./brooks-kim-smoking-woman.jpg","./brooks-kim-yellow-t-shirtsd.jpg"]
let btnBefore = document.getElementsByClassName("before")[0]
let btnAfter = document.getElementsByClassName("after")[0]
let containerImg = document.getElementsByClassName("image")[0]
let containerNewImg = document.getElementsByClassName("imageNew")[0]
let affCarousel = 0

btnAfter.addEventListener("click",()=>{
    affCarousel ++
    if(affCarousel == 3){
        affCarousel = 0
    }
    containerImg.classList.add("transitionImgR")
    containerNewImg.style.backgroundImage = "url("+arrayCarousel[affCarousel]+")"
    setTimeout(() => {
        containerImg.classList.remove("transitionImgR")   
        containerImg.style.backgroundImage = "url("+arrayCarousel[affCarousel]+")"     
    }, 1000);
})
btnBefore.addEventListener("click",()=>{
    affCarousel --
    if(affCarousel == -1){
        affCarousel = 2
    }
    containerImg.classList.add("transitionImgL")
    containerNewImg.style.backgroundImage = "url("+arrayCarousel[affCarousel]+")"
    setTimeout(() => {
        containerImg.classList.remove("transitionImgL")   
        containerImg.style.backgroundImage = "url("+arrayCarousel[affCarousel]+")"     
    }, 1000);
})