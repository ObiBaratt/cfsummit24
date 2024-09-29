import { toggleRunJqButton } from "./jqScripts.js";
import { toggleRunJsButton, fadeStartButton } from "./jsScripts.js";

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");

console.log("adding listener");
startButton.addEventListener("click", () => {
  fadeStartButton();

  setTimeout(() => {
    toggleRunJsButton();
    toggleRunJqButton();
  }, 500);

  setTimeout(() => {
    startContainer.remove();
  }, 1000);
});
