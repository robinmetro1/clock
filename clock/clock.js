

setInterval(setClock, 1000)
const HourHand = document.querySelector('[data-hour-hand]')
const MinuteHand = document.querySelector('[data-minute-hand]')
const SecondHand = document.querySelector('[data-second-hand]')

    function setClock() {

        const currentDate = new Date()
        const secondRatio = currentDate.getSeconds() /60 
        const minuteRatio = (secondRatio + currentDate.getMinutes()) /60 
        const hourRatio =(minuteRatio + currentDate.getHours()) /12 
        setRotation(HourHand, hourRatio)
        setRotation(MinuteHand, minuteRatio)
        setRotation(SecondHand, secondRatio)
    }
        

    function setRotation(element,rotationRatio)
    {
        element.style.setProperty('--rotation', rotationRatio * 360)

    }
    setClock()

