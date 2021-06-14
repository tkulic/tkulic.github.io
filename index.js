// navigation

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    })
})

// lightbox gallery

const thumbnails = document.querySelectorAll('.thumbnail')
const lightbox = document.querySelector("#lightbox")
const slides = document.querySelectorAll(".lightbox-slide")
const previousSlideBtn = document.querySelector("#previous-slide-btn")
const nextSlideBtn = document.querySelector("#next-slide-btn")

let currentSlide


// open lightbox
function showSlide(slideNum) {
    for (slide of slides) {
        if (slideNum == slide.dataset.slide) {
            slide.classList.add("active")
        }
    }
    currentSlide = +slideNum
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", event => {
        showSlide(event.target.parentElement.dataset.slide)
        lightbox.classList.remove("hidden")
        nextSlideBtn.focus()
    })
})

// navigate lightbox slides
function goToPreviuosSlide() {
    hideAllSlides()

    if (currentSlide === 0) {
        currentSlide = slides.length - 1
    } else {
        currentSlide -= 1
    }

    showSlide(currentSlide)
}

function goToNextSlide() {
    hideAllSlides()

    if (currentSlide === slides.length - 1) {
        currentSlide = 0
    } else {
        currentSlide += 1
    }

    showSlide(currentSlide)
}

previousSlideBtn.addEventListener("click", goToPreviuosSlide)
lightbox.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
        goToPreviuosSlide()
    }
})

nextSlideBtn.addEventListener("click", goToNextSlide)
lightbox.addEventListener("keyup", (event) => {
    if (event.code == "ArrowRight") {
        goToNextSlide()
    }
})

// close lightbox
function hideAllSlides() {
    for (slide of slides) {
        slide.classList.remove("active")
    }
}

lightbox.addEventListener("click", (event) => {
    if (!Array.from(slides).includes(event.target.parentElement) &&
        event.target !== previousSlideBtn &&
        event.target !== nextSlideBtn) {
        lightbox.classList.add("hidden")
        hideAllSlides()
    }
})

lightbox.addEventListener("keyup", (event) => {
    if (event.code == "Escape") {
        lightbox.classList.add("hidden")
        hideAllSlides()
    }
})
