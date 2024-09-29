import { toggleRunJqButton } from "./jqScripts.js";
import { toggleRunJsButton, fadeStartButton, fadeCodeContainer } from "./jsScripts.js";

const startContainer = document.getElementById("start-container");
const jsStartButton = document.getElementById("start-button");

console.log("adding listener");
jsStartButton.addEventListener("click", () => {
  fadeStartButton();

  toggleRunJsButton();
  toggleRunJqButton();

  setTimeout(() => {
    fadeCodeContainer()
    startContainer.remove();
  }, 1000);
});
