let ob = document.querySelector(".offer-bar")

function xmark(){
     ob.style.display="none"
}


let arrowleft = document.getElementById("arrowleft");

let arrowright = document.getElementById("arrowright");

let slides = document.querySelectorAll(".slider__image")

console.log(slides)

let totalSlides = 3;
let currentSlide = 1;

function next(){
     if(currentSlide==3){
        currentSlide=1;
        showSlide();
        return;
    }
    if(currentSlide<totalSlides){
        currentSlide++;
        showSlide();
    }
}

function pre(){
    
    if(currentSlide==1){
        currentSlide=totalSlides;
        showSlide();
        return;
    }

   if(currentSlide>1){
    currentSlide--;
    showSlide();
   }
}

function showSlide(){
      for(let index=0;index<totalSlides;index++){
        if(currentSlide== index+1){
            slides[index].classList.remove("hidden")
        }
        else{
            slides[index].classList.add("hidden")
        }
      }
}


function heart(event){
    if(event.target.style.color=="red"){
        event.target.style.color="grey";
    }else{
        event.target.style.color="red";
    }
}

let menulist = document.querySelector(".menulist")


function menu(){
    menulist.classList.add("show")
}

function x(){
    menulist.classList.remove("show")
}