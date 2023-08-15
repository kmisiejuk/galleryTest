let activeSlideNumber = 1
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")

const image1 = document.querySelector("#img1")
const image2 = document.querySelector("#img2")
const image3 = document.querySelector("#img3")

const hideActiveSlide = () => {
	const activeElement = document.querySelector(".active")
	activeElement.classList.remove("active")
	
}

const showSlide = slideNumber => {
	hideActiveSlide()
	document.querySelector("#img" + slideNumber).classList.add("active")
	changeDotsColor()
}

const showNextSlide = () => {
	if (activeSlideNumber === 3) {
		activeSlideNumber = 1
	} else {
		activeSlideNumber = activeSlideNumber + 1
	}
	showSlide(activeSlideNumber)
}
const showPrevSlide = () => {
	if (activeSlideNumber === 1) {
		activeSlideNumber = 3
	} else {
		activeSlideNumber = activeSlideNumber - 1
	}
	showSlide(activeSlideNumber)
}


const changeDotsColor = () => {
	for (let i = 1; i <= 3; i++) {
		const allImg = document.querySelector(`#img${i}`)
		const allDots = document.querySelector(`#dot${i}`)
		if (allImg.classList.contains("active")) {
			allDots.classList.add("dot-active")
		} else {
			allDots.classList.remove("dot-active")
		}
	}
}

for (let i = 1; i <= 3; i++) {
	const showSlidesI = () => {
		activeSlideNumber + i
		showSlide(i)
	}
	document.querySelector("#dot" + i).addEventListener("click", showSlidesI)
}

arrowRight.addEventListener("click", showNextSlide)
arrowLeft.addEventListener("click", showPrevSlide)
