function calculateSlideIndex(currentSlideIndex, number) {
    slides = document.getElementsByClassName("slide");
    currentSlideIndex += number;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    return currentSlideIndex;
}

function showSlide(index) {
    curentSlide = document.querySelector(".slide.active");
    curentSlide.classList.remove("active");
    nextSlide = document.getElementsByClassName("slide").item(index);
    nextSlide.classList.add("active");

    document.querySelector(".slide-dot.active").classList.remove("active");
    document.getElementsByClassName("slide-dot").item(index).classList.add("active");
}

function initialize() {
    let currentSlideIndex = 0;

    function showPrevSlide() {
        currentSlideIndex = calculateSlideIndex(currentSlideIndex, -1);
        showSlide(currentSlideIndex);
    }
    
    function showNextSlide() {
        currentSlideIndex = calculateSlideIndex(currentSlideIndex, 1);
        showSlide(currentSlideIndex);
    }

    function showSlideByDot(index) {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
    }

    return {
        showPrevSlide,
        showNextSlide,
        showSlideByDot
    }
}


const { showPrevSlide, showNextSlide, showSlideByDot } = initialize();

setInterval(showNextSlide, 3000);
