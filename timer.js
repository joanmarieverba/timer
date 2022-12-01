"use strict"

let minAndSec;
let min;
let sec;

function changeToNumber (mmss){
  
  minAndSec = mmss;
  min = minAndSec.substr(0,2);
  sec = minAndSec.substr(3,2);


};



function startCountdown(seconds) {
  let counter = seconds;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
      
    if (counter < 0 ) {
      clearInterval(interval);
      console.log('Ding!');
    }
  }, 1000);
};

