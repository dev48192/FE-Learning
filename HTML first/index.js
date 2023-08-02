const mintEle = document.getElementById("mint");
const secEle = document.getElementById("sec");
const decSecEle = document.getElementById("decSec");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")

var isPaused = true;

let mint = 0;
let sec = 0;
let decSec = 0;

const stopWatch = () => {
  if (!isPaused) {
    if (decSec === 100) {
      sec = sec + 1;
      decSec = 0;

      secEle.innerHTML = sec;
    }
    if (sec === 60) {
      mint = mint + 1;
      sec = 0;

      mintEle.innerHTML = mint;
    }
    decSec = decSec + 1;

    decSecEle.innerHTML = decSec;
    setTimeout(stopWatch, 10);
  }
};

const onStart = () => {
    isPaused = false;
    stopWatch();
};

const onPause = () => {
    isPaused = true;
};

const onReset = () => {
  isPaused = true;
  mint = 0;
  sec = 0;
  decSec = 0;

  decSecEle.innerHTML = "00";
  secEle.innerHTML = "00";
  mintEle.innerHTML = "00";
};
