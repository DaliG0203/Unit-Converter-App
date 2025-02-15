const convertButton = document.getElementById("button")
const inputTxt = document.getElementById("inputBox")
const lengthOutput = document.getElementById("lengthOutputTxt")
const volumeOutput = document.getElementById("VolumeOutputTxt")
const massOutput = document.getElementById("MassOutputTxt")

function metersToFeet(num){
    return num * 3.28
}

convertButton.addEventListener("click", function (){
    let numberToConvert = Number(inputTxt.value)

    lengthOutput.textContent = `${numberToConvert} meters = ${(metersToFeet(numberToConvert)).toFixed(3)} feet | 
    ${numberToConvert} feet = ${(numberToConvert / 3.28).toFixed(3)} meters`

    volumeOutput.textContent = `${numberToConvert} litres = ${(numberToConvert * 0.264172).toFixed(3)} gallons | 
    ${numberToConvert} gallons = ${(numberToConvert / 0.264172).toFixed(3)} litres`

    massOutput.textContent = `${numberToConvert} kilos = ${(numberToConvert * 2.2).toFixed(3)} pounds | 
    ${numberToConvert} pounds = ${(numberToConvert / 2.2).toFixed(3)} kilos`
})