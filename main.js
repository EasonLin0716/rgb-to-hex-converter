// red part
const redSlider = document.querySelector('#red-silder')
let redValue = document.querySelector('.red-value')
let redOutCome = document.querySelector('.red-outcome')
// green part
const greenSlider = document.querySelector('#green-slider')
let greenValue = document.querySelector('.green-value')
let greenOutCome = document.querySelector('.green-outcome')
// blue part
const blueSlider = document.querySelector('#blue-slider')
let blueValue = document.querySelector('.blue-value')
let blueOutCome = document.querySelector('.blue-outcome')
// color output
let colorValue = document.querySelector('.color-value')
// background changing
let container = document.querySelector('.container')

redSlider.addEventListener('mousemove', function (event) {
  changeValue(redValue, redSlider, redOutCome)
  changeBackground()
})

greenSlider.addEventListener('mousemove', function (event) {
  changeValue(greenValue, greenSlider, greenOutCome)
  changeBackground()
})

blueSlider.addEventListener('mousemove', function (event) {
  changeValue(blueValue, blueSlider, blueOutCome)
  changeBackground()
})


// 此函式改變顏色數字的值
function changeValue(value, slider, outcome) {
  value.textContent = slider.value
  if (+value.textContent < 10) {
    // 如果小於0會再補上一個0
    outcome.innerHTML = `0${value.textContent}`
  } else {
    // 轉為16進位
    outcome.innerHTML = (+value.textContent).toString(16)
  }
}

// 此函式改變背景顏色
function changeBackground() {
  let color = `#${redOutCome.textContent}${greenOutCome.textContent}${blueOutCome.textContent}`

  container.style.background = color
}