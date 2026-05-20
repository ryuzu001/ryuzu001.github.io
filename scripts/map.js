
const wrapperNode = document.querySelector('.embla')
const viewportNode = wrapperNode.querySelector('.embla__viewport')
const emblaApi = EmblaCarousel(viewportNode, { loop: false })

// const prevButtonNode = wrapperNode.querySelector('.embla__prev')
// const nextButtonNode = wrapperNode.querySelector('.embla__next')

// prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false)
// nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false)

// const toggleButtonsDisabled = (emblaApi) => {  const setButtonState = (button, enabled) => {    button.toggleAttribute('disabled', !enabled)  }  
// setButtonState(prevButtonNode, emblaApi.canScrollPrev())  
// setButtonState(nextButtonNode, emblaApi.canScrollNext())}
// toggleButtonsDisabled(emblaApi)
// emblaApi.on('select', toggleButtonsDisabled)
// emblaApi.on('reInit', toggleButtonsDisabled)