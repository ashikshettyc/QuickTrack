import { escaped } from './Stopwatch';
import { values } from './Stopwatch';
import { startTimes } from './Stopwatch';

let lists = document.querySelector('#lists');
const currentDate = new Date();
let stopTimeHour = new Date().getHours();
let stopTimeMinute = new Date().getMinutes();
let stopTimes = `${stopTimeHour}:${stopTimeMinute}`;
export function addItems() {
  if (values.value === '') {
    return;
  } else {
    let innerDiv = document.createElement('p');
    innerDiv.classList.add('newLists');
    innerDiv.innerHTML = values.value;
    lists.appendChild(innerDiv);
    let times = document.createElement('span');
    times.classList.add('times');
    times.innerHTML = `${escaped}`;
    innerDiv.appendChild(times);
    let date = document.createElement('span');
    date.classList.add('date');
    date.innerHTML = `${startTimes} - ${stopTimes} | ${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    innerDiv.appendChild(date);
    let delteElm = document.createElement('span');
    delteElm.classList.add('times');
    delteElm.innerHTML = '\u00d7';
    innerDiv.appendChild(delteElm);
    saveData();
  }
}

lists.addEventListener('click', function (e) {
  e.target.parentElement.remove();
  saveData();
});

export function saveData() {
  localStorage.setItem('data', lists.innerHTML);
}

export function showTask() {
  lists.innerHTML = localStorage.getItem('data');
}
