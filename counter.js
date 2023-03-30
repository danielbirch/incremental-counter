// SELECTORS
const minus = document.getElementById('decrement');
const plus = document.getElementById('increment');
const doReset = document.getElementById('reset');
const doSave = document.getElementById('save');
const count = document.getElementById('current-count');
const doload = document.getElementById('load-count');

// EVENT LISTENERS
minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);
doReset.addEventListener('click', reset);
doSave.addEventListener('click', save);
doload.addEventListener('click', load);
window.addEventListener('load', setKeys);

// FUNCTIONS
// Set initial value
let currentCount = 0;
let storedCount = 0;
// On page load, store empty values for currentCount and storedCount
function setKeys() {
  if (document.readyState === 'complete') {
    console.log('hey');
    localStorage.setItem('currentCount', currentCount);
    localStorage.setItem('storedCount', storedCount);
  }
}
// Reduce current count by 1 when decrement button is clicked
function decrement() {
  currentCount--;
  count.innerText = currentCount;
  localStorage.setItem('currentCount', currentCount);
}
// Increase current count by 1 when increment button is clicked
function increment() {
  currentCount++;
  count.innerText = currentCount;
  localStorage.setItem('currentCount', currentCount);
}
// Reset the value back to 0 when reset button is clicked
function reset() {
  currentCount = 0;
  storedCount = 0;
  count.innerText = currentCount;
  // Set currentCount to keep up with the increments
  localStorage.setItem('currentCount', currentCount);
}

// Save value to local storage when save button is clicked
function save() {
  // Check if anything is in local storage
  let storedCount = localStorage.getItem('storedCount');
  if (storedCount === null) {
    storedCount = currentCount.toString();
  } else {
    storedCount = (parseInt(currentCount)).toString();
  }
  localStorage.setItem('storedCount', storedCount);
}

// Get value from local storage and display as counter number
function load() {
  // Get stored value and set as a variable
  let loadCount = localStorage.getItem('storedCount');
  // Set stored count as the current count
  localStorage.setItem('currentCount', loadCount);
  currentCount = parseInt(loadCount);
  count.innerText = loadCount;
}