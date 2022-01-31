var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var sec = 0;
var millisec = 0;
var timeInterval;
 

const timer = () => {
    millisec++;

    if(millisec < 9){
        milliseconds.innerHTML = "0"+ millisec;

    }
    if (millisec > 9){
        milliseconds.innerHTML = millisec;
    }
    if (millisec > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millisec = 0;
        milliseconds.innerHTML = "0" + 0;
    }
    if (sec > 9){
        seconds.innerHTML = sec;
    }
} 

// start button 
startBtn.addEventListener('click', () => {
    timeInterval = setInterval(timer, 10);
});

// stop button
stopBtn.addEventListener('click', () => {
    clearInterval(timeInterval);
});

// reset button
resetBtn.addEventListener('click', () => {
    clearInterval(timeInterval);
    sec = '00';
    millisec = '00';
    seconds.innerHTML = sec;
    milliseconds.innerHTML = millisec;
});



