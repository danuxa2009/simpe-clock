const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setSeconds() {
    const seconds = new Date().getSeconds()
    const secondDegrees = ((seconds/60) * 360)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
}

function setMinutes(){
    const minutes = new Date().getMinutes()
    const minutesDegrees = ((minutes/60) * 360) + 90
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
}

function setHours(){
    const hours = new Date().getHours()
    const hoursDegrees = ((hours/60) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setSeconds, 1000)
setInterval(setMinutes, 1000)
setInterval(setHours, 1000)
