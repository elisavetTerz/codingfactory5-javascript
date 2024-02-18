let bgColor = undefined;

window.addEventListener("DOMContentLoaded", function () {
  this.document.querySelector("#btn").addEventListener("click", function () {
    onClickMeClicked();
  });
});

function onClickMeClicked() {
  updateBg();
}

//Model

/**
 * Gets a color and updates the background
 */
function updateBg() {
  bgColor = getRandomBg();
  showBgColor();
}

/**
 * Selects a random color and returns a standard list.
 * @returns the color.
 */
function getRandomBgBg() {
  const colors = ["red", "white", "black", "green", "blue", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showBgColor() {
  document.querySelector();
  document.querySelector("#clr-hex").innerHTML = bgColor;
  document.body.style.backgroundColor = bgColor;
}
