const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearAll()
        slide.classList.add('active')
    })
})

const clearAll = function () {
    slides.forEach((slide) => slide.classList.remove('active'))
}