
let sliders = [
    {slider: "Room",href: document.getElementsByClassName("Room__Slider-item"),dots: document.getElementsByClassName("Room__Slider-dots")},
    {slider: "Details",href: document.getElementsByClassName("Details__Slider-item"),dots:document.getElementsByClassName("Details__Slider-dots")},
    {slider: "Best",href: document.getElementsByClassName("Best__Slider-item"),dots:document.getElementsByClassName("Best__Slider-dots")},
    {slider: "Room-middle",href: document.getElementsByClassName("Room__Slider-middle-item"),dots:document.getElementsByClassName("Room__Slider-middle-dots")}
]
let slideIndex = 1;
sliders.map(slider => {
    showSlides(slideIndex,slider.href,slider.dots);
})

function plusSlide(name) {
    sliders.map(slider => {
        if(name === slider.slider){
            showSlides(slideIndex += 1,slider.href,slider.dots);
            console.log(slider.slider)
        }
    })
}
function minusSlide(name) {
    sliders.map(slider => {
        if(name === slider.slider){
            showSlides(slideIndex -= 1,slider.href,slider.dots);
        }
    })
}

function showSlides(n,slides,dots) {
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
