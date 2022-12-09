"use strict"

let minAndSec;
let min;
let sec;
let minNum;
let secNum;
let totalSec;

function startCountdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    console.log(counter);
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log('Ding!');
    }
  }, 1000);
};

function changeToNumber (mmss){
  
  minAndSec = mmss;
  min = minAndSec.substr(0,2);
  sec = minAndSec.substr(3,2);
  // change to number
  minNum = parseInt(min, 10);
  secNum = parseInt(sec, 10);
  //change minutes and seconds to number of seconds
  totalSec = secNum + (minNum * 60);

  startCountdown(totalSec);


};





