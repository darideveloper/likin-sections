/**
 * Load css styles
 * 
 * @param {string} href - Remote or local path to the css file
 */
function loadStyles(href) {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = href
  document.head.appendChild(link)
}

// Load aos css only if its not editing
const currentUrl = window.location.href
if (!currentUrl.includes('elementor')) {
  loadStyles('https://unpkg.com/aos@2.3.1/dist/aos.css')
  console.log('AOS CSS loaded')
}
