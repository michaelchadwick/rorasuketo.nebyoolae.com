function getWidth () {
  var width = window.innerWidth
  var image = document.querySelector('.split-image')
  var video = document.querySelector('.split-video')

  if (width < 800) {
    video.style.display = 'none'
    image.style.display = 'block'
  } else {
    video.style.display = 'block'
    image.style.display = 'none'
  }
}
window.onload = getWidth
window.onresize = getWidth
