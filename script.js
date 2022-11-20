// 1st function
const doubleDigitFormatter = (n) => (n < 10 ? `0${n}` : n);




let numberOfHours;
let numberOfMinutes;
let numberOfSeconds;

let newTime;

let intervalId;

let inputValue;

let pauseState = false; 
//  monitors the state of the counter-down-timer, togglers are always boolean values. by default the state is not pause.



// 2nd function
const calculateNumberOfHoursMinutesSeconds = (time) => {

 
  numberOfHours = 0;
  numberOfMinutes = 0;
  numberOfSeconds = 0;


  if (time < 0) {
    alert("please enter a positive number");
  } else if (time > 60) {
    numberOfMinutes = Math.floor(time / 60);

    if (numberOfMinutes > 60) {
      numberOfHours = Math.floor(numberOfMinutes / 60);
      numberOfMinutes = numberOfMinutes % 60; 
      numberOfSeconds = time % 60; 
    } else {
      numberOfMinutes = numberOfMinutes;
      numberOfSeconds = time % 60;
    }
  } else {
    numberOfSeconds = time;
  }

// i used object data structure cos i wanted to collect three items at a go.
  return {
    numberOfHours,
    numberOfMinutes,
    numberOfSeconds,
  };
};




// 3rd function
const startTimer = () => {
  inputValue = Number(document.querySelector(".input").value);
  if (!inputValue) {
    alert("Enter number of seconds to count down from");
    return;
  }
  document.querySelector(".pause").disabled = false;
  document.querySelector(".pause").style.cursor = "pointer";
  document.querySelector(".start").disabled = true;
  document.querySelector(".start").style.cursor = "not-allowed";
  document.querySelector(".input").value = "";
  let { numberOfHours, numberOfMinutes, numberOfSeconds } =
    calculateNumberOfHoursMinutesSeconds(inputValue);
  


  intervalId = setInterval(() => {
    newTime = calculateNumberOfHoursMinutesSeconds(inputValue);
    inputValue -= 1;
    numberOfHours = newTime.numberOfHours;
    numberOfMinutes = newTime.numberOfMinutes;
    numberOfSeconds = newTime.numberOfSeconds;
    document.querySelector(".num-hours").innerHTML = doubleDigitFormatter(numberOfHours);
    document.querySelector(".num-mins").innerHTML = doubleDigitFormatter(numberOfMinutes);
    document.querySelector(".num-secs").innerHTML = doubleDigitFormatter(numberOfSeconds);
    if (numberOfHours == 0 && numberOfMinutes == 0 && numberOfSeconds == 0) {
      document.querySelector(".start").disabled = false;
      document.querySelector(".start").style.cursor = "pointer";
      document.querySelector(".pause").disabled = true;
      document.querySelector(".pause").style.cursor = "not-allowed";
      clearInterval(intervalId);
    }
  }, 1000);
};





// 4th function 
const pauseTimer = () => {
  if (pauseState) {
    document.querySelector(".pause").innerHTML = "PAUSE";
    let { numberOfHours, numberOfMinutes, numberOfSeconds } =
      calculateNumberOfHoursMinutesSeconds(inputValue);
    if (numberOfHours == 0 && numberOfMinutes == 0 && numberOfSeconds == 0) {
      document.querySelector(".start").disabled = false;
      document.querySelector(".start").style.cursor = "pointer";
      document.querySelector(".pause").disabled = true;
      document.querySelector(".pause").style.cursor = "not-allowed";
      return;
    }

    intervalId = setInterval(() => {
      newTime = calculateNumberOfHoursMinutesSeconds(inputValue);
      inputValue -= 1;
      numberOfHours = newTime.numberOfHours;
      numberOfMinutes = newTime.numberOfMinutes;
      numberOfSeconds = newTime.numberOfSeconds;
      document.querySelector(".num-hours").innerHTML = doubleDigitFormatter(numberOfHours);
      document.querySelector(".num-mins").innerHTML = doubleDigitFormatter(numberOfMinutes);
      document.querySelector(".num-secs").innerHTML = doubleDigitFormatter(numberOfSeconds);
      if (numberOfHours == 0 && numberOfMinutes == 0 && numberOfSeconds == 0) {
      document.querySelector(".start").disabled = false;
      document.querySelector(".start").style.cursor = "pointer";
      document.querySelector(".pause").disabled = true;
      document.querySelector(".pause").style.cursor = "not-allowed";
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    document.querySelector(".pause").innerHTML = "RESUME";
    clearInterval(intervalId);
  }
  pauseState = !pauseState;
};





// 5th function
const resetTimer = () => {
  clearInterval(intervalId);
  document.querySelector(".start").innerHTML = "START";
  document.querySelector(".start").disabled = false;
  document.querySelector(".start").style.cursor = "pointer";
  document.querySelector(".num-hours").innerHTML = "00";
  document.querySelector(".num-mins").innerHTML = "00";
  document.querySelector(".num-secs").innerHTML = "00";
};
















