// tools
/**
 * Returns true if the element is in the viewport
 * 
 * @param {HTMLElement} element - Element to check if it's in the viewport
 * @returns boolean 
 */
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Hero

// h1 animation
anime({
  targets: '.index-hero h1 span',
  opacity: 1,
  delay: function (el, i) { return i * 200 },
  easing: 'easeInOutSine',
  autoplay: true,
  translateX: {
    value: [50, 0],
  },
  opacity: {
    value: [0, 1],
  }
})

// text animation
anime({
  targets: '.index-hero p',
  opacity: 1,
  delay: 1600,
  easing: 'easeInOutSine',
  autoplay: true,
  translateX: {
    value: [50, 0],
  },
  opacity: {
    value: [0, 1],
  }
})

// lines animation
let baseHeight = 100
if (window.matchMedia('(max-width: 768px)').matches) {
  baseHeight = 50
}
anime({
  targets: '.index-hero .line-inner',
  opacity: 1,
  delay: [1800, function (el, i) { return 1800 + i * 100 }],
  easing: 'easeInOutSine',
  autoplay: true,
  height: {
    value: [0, function (el, i) { return (i + 1) * baseHeight }],
  },
})

// Text separator (h2)

// Text
/**
 * Show text when it's in the viewport
 * 
 */
function handleScrollText() {
  const elemText = document.querySelector('.index-text .color-anim .text')
  const elemLogo = document.querySelector('.index-text .color-anim .logo')

  if (!elemText) {
    return
  }

  if (isElementInViewport(elemText)) {
    elemText.classList.add('visible')
    elemLogo.classList.add('visible')
  } else {
    elemText.classList.remove('visible')
    elemLogo.classList.remove('visible')
  }
}

// Slide

// activate titles
function handleScrollSlider(index) {
  const elemSlide = document.querySelector(`#fase${index} h2`)
  const elemTitle = document.querySelector(`#titulo${index}`)
  if (!elemSlide) {
    return
  }

  if (isElementInViewport(elemSlide)) {
    elemTitle.classList.add("active")
    console.log(`#titulo${index} active`)
  } else {
    elemTitle.classList.remove("active")
    console.log(`#titulo${index} remove`)
  }
}


// Setup scroll events
window.addEventListener('scroll', () => {
  handleScrollText()
  for (let i = 1; i <= 6; i++) {
    handleScrollSlider(i)
  }
})

// Init aos
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: false
})