const slidesM = document.querySelectorAll(".middleSlides img");

let slideIndex= 0;
let IntervalId = null;

initializeSlider()

// document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider(){
    
    if(slidesM.length > 0 ){
        slidesM[slideIndex].classList.add("displaySlide");
        IntervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){
    if(index >= slidesM.length){
        slideIndex = 0;
    }
    else if(index<0){
        slideIndex = slidesM.length - 1;
    }

    slidesM.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slidesM[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(IntervalId);
    slideIndex--;
    showSlide(slideIndex);

}

document.getElementById("prevButton").addEventListener("click", prevSlide(){
    slideIndex--
    showSlide(slideIndex)

});

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}