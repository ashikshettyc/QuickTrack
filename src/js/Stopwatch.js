import { addItems } from './Entries';

let startTime;
let updatedTime;
let difference;
let tInterval;
let escaped;
let stopTimeHour = new Date().getHours();
let stopTimeMinute = new Date().getMinutes();
let startTimes;
let stopTimes;
const times = document.getElementById('time');
const values = document.querySelector('#tracker');

function startTimer() {
  if (values.value === '') {
    return;
  } else {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    startTimes = `${stopTimeHour}:${stopTimeMinute}`;

    document.querySelector('.start').disabled = true;
  }
}

function stopTimer() {
  clearInterval(tInterval);
  addItems();
  stopTimes = `${stopTimeHour}:${stopTimeMinute}`;
  document.querySelector('.start').disabled = false;
  values.value = '';
  times.textContent = '00:00:00';
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  escaped = document.getElementById('time').textContent =
    hours + ':' + minutes + ':' + seconds;
}

export { startTimer, stopTimer, values, escaped, startTimes };
