import { startTimer, stopTimer } from './Stopwatch';
import { barChart } from './chart';
import { showTask } from './Entries';
import { saveEntry } from './Save';
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.save').addEventListener('click', saveEntry);
document.querySelector('.clock').addEventListener('click', switchToSave);
document.querySelector('.editClock').addEventListener('click', switchToSearch);
barChart;

let Timer = document.querySelector('.timer');
let Chart = document.querySelector('.graph');
let main = document.querySelector('.main');
let barGraph = document.querySelector('.barChart');
let inputBox = document.querySelector('.inputBox');
let inputBox1 = document.querySelector('.inputBox1');
Timer.addEventListener('click', () => {
  barGraph.style.display = 'none';
  main.style.display = 'flex';
});

Chart.addEventListener('click', () => {
  main.style.display = 'none';
  barGraph.style.display = 'flex';
});

function switchToSave() {
  inputBox1.style.display = 'none';
  inputBox.style.display = 'flex';
}

function switchToSearch() {
  inputBox.style.display = 'none';
  inputBox1.style.display = 'flex';
}

showTask();
