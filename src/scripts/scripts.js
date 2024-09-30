import fade from "../fade/index.js";

import { addRunJqSliderListener, toggleRunJqButton } from "./jqScripts.js";
import { toggleRunJsButton, addRunJsSliderListener } from "./jsScripts.js";

// Setup code only in JS

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const codeContainer = document.getElementById("code-container");
const header = document.getElementById("header");


function fadeCodeContainer() {
  fade(codeContainer);
}

function fadeStartButton() {
  fade(startButton);
}

startButton.addEventListener("click", () => {
  fadeStartButton();

  setTimeout(() => {
    fadeCodeContainer();
    startContainer.remove();
    fade(header, 1000);
  }, 1000);

  setTimeout(() => {
    getButtons();
  }, 1500); // TODO: set to 5000-7500 for the talk
});

// End of setup code

function getButtons() {
  toggleRunJsButton();
  toggleRunJqButton();

  setTimeout(() => {
    const jsButton = document.querySelector("#run-js-button");
    jsButton.addEventListener("click", () => {
      addRunJsSliderListener();
    });
    const jqButton = $("#run-jq-button");
    jqButton.on("click", () => {
      addRunJqSliderListener();
    });
  }, 100)
}
