import fade from "../fade/index.js";
import slide from "../slide/index.js";

const startButton = document.getElementById("start-button");

const jsButton = document.querySelector("#run-js-button");

const jsBody = document.getElementById("js-body");

function fadeStartButton() {
    fade(startButton);
}
function toggleRunJsButton() {
  fade(startButton);
}

export { toggleRunJsButton, fadeStartButton };
