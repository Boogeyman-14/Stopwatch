//Store the initial time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Store display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Hold the setInterval() function
let interval = null;

//Hold the stopwatch status
let status = 0;

function stopWatch() {
  seconds++;

  //Determine when to increase next value
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //Add 0 to one digit time values
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  //Display output
  document.querySelector(".display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

//Start the stopwatch
function start() {
  interval = window.setInterval(stopWatch, 1000);
}

//Stop the stopwatch
function stop() {
  window.clearInterval(interval);
}

//Reset the stopwatch
function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".display").innerHTML = "00:00:00";
}
