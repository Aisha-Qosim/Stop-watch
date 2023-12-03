
var btnStart = document.getElementById('start')
var btnStop = document.getElementById('stop')
var btnReset = document.getElementById('reset')

var hour = 0
var minute = 0
var seconds = 0

function start(){
    timer = true
    stopWatch()
}

function pause(){
    timer = false
}
function reset(){
    timer = false
    hour = 0
    minute = 0
    seconds = 0

    document.getElementById('min').innerHTML = '00'
    document.getElementById('sec').innerHTML = '00'
    document.getElementById('hr').innerHTML = '00'
}

function stopWatch(){
    if (timer) {
        seconds++
        if (seconds == 60) {
            minute++
            seconds = 0
        }
        if (minute == 60) {
            hour++
            minute = 0
            seconds = 0   
        }

        var first = hour
        var second = minute
        var third = seconds

        if (hour < 10) {
            first = '0' + first
        }
        if (second <10) {
            second = '0' + second
        }
        if (third < 10) {
            third = '0' + third
        }

        document.getElementById('min').innerHTML = first
        document.getElementById('sec').innerHTML = second
        document.getElementById('hr').innerHTML = third
        setTimeout(stopWatch, 1000)
    }
}
