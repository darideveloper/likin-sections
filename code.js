// Index hero

// h1 animation
var animationH1Hero = anime({
  targets: '.index-hero h1 span',
  opacity: 1,
  delay: function(el, i) { return i * 200; },
  easing: 'easeInOutSine',
  autoplay: true,
  translateX: {
    value: [50, 0],
  },
  opacity: {
    value: [0, 1],
  }
});

// text animation
var animationTextHero = anime({
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
});

// lines animation
let baseHeight = 100
if (window.matchMedia('(max-width: 768px)').matches) {
  baseHeight = 50
}
var animationTextHero = anime({
  targets: '.index-hero .line-inner',
  opacity: 1,
  delay: [1800, function(el, i) { return 1800 + i * 100; }],
  easing: 'easeInOutSine',
  autoplay: true,
  height: {
    value: [0, function(el, i) { return (i + 1) * baseHeight; }],
  },
});
