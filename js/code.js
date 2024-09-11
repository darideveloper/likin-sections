// tools
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Index hero

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

// Index text

// Text
function handleScroll() {
  const element = document.querySelector('.color-anim')

  if (isElementInViewport(element)) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
}

window.addEventListener('scroll', handleScroll)