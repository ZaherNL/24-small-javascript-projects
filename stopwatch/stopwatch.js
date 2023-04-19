document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('start');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');


    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var t;

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        // format of time 00:00:00
        document.getElementById('timer').innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);


        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);
    }

    /* Start button */
    startBtn.onclick = timer;

    /* Stop button */

    stopBtn.onclick = function() {
        clearTimeout(t);
    }

    /* Reset button */
    resetBtn.onclick = function() {
        document.getElementById('timer').innerHTML = "00:00:00";
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

});
