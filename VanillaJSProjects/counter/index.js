// Initial State
const DEFAULT = 0;
let counter = DEFAULT;

window.addEventListener("DOMContentLoaded", function () {
  const btnDecr = this.document.querySelector("#btnDecr");
  const btnReset = this.document.querySelector("#btnReset");
  const btnIncr = this.document.querySelector("#btnIncr");

  btnDecr.addEventListener("click", () => onDecreaseClicked());
  btnReset.addEventListener("click", () => onResetClicked());
  btnIncr.addEventListener("click", () => onIncreaseClicked());
});

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include decreasing the counter
 */
function onDecreaseClicked() {
  decreaseCounter();
}

/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter
 */

function onResetClicked() {
  resetCounter();
}

/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
  increaseCounter();
}

//Model

function decreaseCounter() {
  counter--;
  showCounter();
}

function resetCounter() {
  counter = DEFAULT;
  showCounter();
}

function increaseCounter() {
  counter++;
  showCounter();
}

function showCounter() {
  const counterDOM = document.querySelector("#counter");
  counterDOM.innerHTML = counter;
  styleCounter(counterDOM);
}

function styleCounter(counterDOM) {
  counterDOM.classList.toggle("color-green", counter > 0);
  counterDOM.classList.toggle("color-black", counter === 0);
  counterDOM.classList.toggle("color-red", counter < 0);

  //   if (counter > 0) {
  //     counterDOM.style.color = "green";
  //   } else if (counter < 0) {
  //     counterDOM.style.color = "red";
  //   } else {
  //     counterDOM.style.color = "black";
  //   }
}
