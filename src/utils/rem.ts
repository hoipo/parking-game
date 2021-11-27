const baseSize = 100
function setRem () {
  const scale = document.documentElement.clientWidth / 1440
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 1)) + 'px'
}

window.onresize = function () {
  setRem()
}

export default setRem