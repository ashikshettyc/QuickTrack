import { saveData } from './Entries';
const values = document.querySelector('.saver');

let editStartTime = document.querySelector('.editStartTime');
let editStopTime = document.querySelector('.editStopTime');
let editDates = document.querySelector('.editDates');
let formattedDifference;

function calculateTimeDifference() {
  const time1 = editStartTime.value;
  const time2 = editStopTime.value;

  // Convert time strings to seconds
  const seconds1 = getSeconds(time1);
  const seconds2 = getSeconds(time2);

  // Calculate the difference
  const differenceInSeconds = Math.abs(seconds2 - seconds1);

  // Convert back to HH:MM format
  const hours = Math.floor(differenceInSeconds / 3600);
  const minutes = Math.floor((differenceInSeconds % 3600) / 60);

  formattedDifference = `${hours}:${minutes.toString().padStart(2, '0')}`;
}

let mindiff = editStopTime;
export function saveEntry() {
  addEditItems();
  values.value = '';
}

export function addEditItems() {
  if (values.value === '') {
    return;
  } else {
    let innerDiv = document.createElement('p');
    innerDiv.classList.add('newLists');
    innerDiv.innerHTML = values.value;
    lists.appendChild(innerDiv);
    let times = document.createElement('span');
    times.classList.add('times');
    // times.innerHTML = `${escaped}`;
    innerDiv.appendChild(times);
    let date = document.createElement('span');
    date.classList.add('date');
    date.innerHTML = `${editStartTime.value} - ${editStopTime.value} | ${editDates.value}`;
    innerDiv.appendChild(date);
    let delteElm = document.createElement('span');
    delteElm.classList.add('times');
    delteElm.innerHTML = '\u00d7';
    innerDiv.appendChild(delteElm);
    saveData();

    let timeDiff = editStopTime.value - editStartTime.value;
    console.log(formattedDifference);
  }
}

lists.addEventListener('click', function (e) {
  e.target.parentElement.remove();
  saveData();
});

export { editStartTime };
