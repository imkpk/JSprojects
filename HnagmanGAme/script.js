const wordEl = document.getElementById("word");
const worngLetterEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const popup = document.getElementById("popup-container");
const finalMessage = document.getElementById("final-message");

// figure parts
const figureParts = document.querySelectorAll("figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWrod = words[Math.floor(Math.random() * words.length)];
// console.log(selectedWrod);
const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

// show hidden word
function displayWord() {
  wordEl.innerHTML = `
 ${selectedWrod
   .split("")
   .map(
     (letter) =>
       ` <span class="letter">
   ${correctLetters.includes(letter) ? letter : ""}
  </span>`
   )
   .join("")}
 `;
  const innerWord = wordEl.innerText.replace(/\n/g, "");
  // console.log(innerWord);
  if (innerWord === selectedWrod) {
    finalMessage.innerText = "congratualations! you won ";
    // popup.style.display = "flex";
  }
}
//keydown letter press
window.addEventListener("keydown", (e) => {
  // console.log(e.keyCode5);
  if(e.key>=65 && e.keycode<=98){
 
  }
});

displayWord();
