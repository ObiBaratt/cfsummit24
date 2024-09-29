import fade from "../fade/index.js";
import slide from "../slide/index.js";

const startButton = document.getElementById("start-button");

const jsButton = document.querySelector("#run-js-button");

const jsBody = document.getElementById("js-body");
const codeContainer = document.getElementById("code-container");

function fadeCodeContainer() {
    fade(codeContainer);
}

function fadeStartButton() {
    fade(startButton);
}
function toggleRunJsButton() {
  fade(jsButton);
}

export { toggleRunJsButton, fadeStartButton, fadeCodeContainer };
