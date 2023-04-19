const unitInput = document.getElementById('unit-input')
const convertBtn = document.getElementById('convert-btn')
const lengthValueEl = document.getElementById('length-value')
const volumeValueEl = document.getElementById('volume-value')
const massValueEl = document.getElementById('mass-value')

const meterToFootRatio = 3.281
const literToGallonRatio = 0.264
const kiloToPoundRatio = 2.204

let value = 0

//prevent forms from submitting
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
})

// set initial unit values
unitInput.value = value
setContent(value)

convertBtn.addEventListener('click', function () {
  // reset input & value to zero if input is empty
  value = Number(unitInput.value)

  // warn user if they enter text
  // and reset values
  if (isNaN(value)) {
    alert('Please enter a number')
    value = 0
    unitInput.value = 0
    unitInput.focus()
  }

  setContent(value)
})

function setContent(value) {
  lengthValueEl.textContent = getLengthContent(value)
  volumeValueEl.textContent = getVolumeContent(value)
  massValueEl.textContent = getMassContent(value)
}

// functions to convert units
function getLengthContent(length) {
  const feet = (length * meterToFootRatio).toFixed(3)
  const meters = (length / meterToFootRatio).toFixed(3)

  return `${length} meters = ${feet} feet | ${length} feet = ${meters} meters`
}

function getVolumeContent(volume) {
  const gallons = (volume * literToGallonRatio).toFixed(3)
  const liters = (volume / literToGallonRatio).toFixed(3)

  return `${volume} liters = ${gallons} gallons | ${volume} gallons = ${liters} liters`
}

function getMassContent(mass) {
  const pounds = (mass * kiloToPoundRatio).toFixed(3)
  const kilos = (mass / kiloToPoundRatio).toFixed(3)

  return `${mass} kilos = ${pounds} pounds | ${mass} pounds = ${kilos} kilos`
}
