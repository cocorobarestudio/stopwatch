'use strict';
{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutID;
    let elapsedTime = 0;

    function countUp(){


        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(2, '0');
        timer.textContent = `${m}:${s}.${ms}`;

        timeoutID = setTimeout( 
            ()=>{
                countUp();
            }, 10
        );

    }

    function setButtonStateInitial(){
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = true;
    }
    function setButtonStateRunning(){
        start.disabled = true;
        stop.disabled = false;
        reset.disabled = true;
    }
    function setButtonStateStop(){
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = false;
    }


    setButtonStateInitial();
    start.addEventListener('click', () => {
        startTime = Date.now();
        countUp();
        setButtonStateRunning(); 
    });

    stop.addEventListener('click', () => {
        elapsedTime += Date.now() - startTime;
        clearTimeout(timeoutID);
        setButtonStateStop();
    });

    reset.addEventListener('click', () => {
        timer.textContent = '00:00.000';
        setButtonStateInitial();
    });

    


}

{
const d = new Date();
console.log(d); //Thu Dec 31 2020 14:52:06 GMT+0900 (日本標準時)

const dd = Date.now();
console.log(dd); //1609393926449

const ddd = new Date(Date.now());
console.log(ddd); //Thu Dec 31 2020 14:52:06 GMT+0900 (日本標準時)
}

