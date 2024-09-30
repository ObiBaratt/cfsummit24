import fade from "../fade/index.js";
import slide from "../slide/index.js";

function toggleRunJsButton() {
  const jsButton = document.querySelector("#run-js-button");
  fade(jsButton);
}

function addRunJsSliderListener() {
  const jsButton = document.querySelector("#run-js-button");
  jsButton.addEventListener("click", () => {
    const jsBody = document.getElementById("js-body");
    slide(jsBody, "left", false, false);
    setTimeout(() => {
      fade(jsButton);
      const fnText = addRunJsSliderListener.toString();
      appendToJsCode(fnText);
    }, 100);
  });
}

function appendToJsCode(text) {
  const jsCode = document.getElementById("js-code");
  const pre = document.createElement("pre");
  pre.textContent = text;
  jsCode.appendChild(pre);
}

export { toggleRunJsButton, appendToJsCode, addRunJsSliderListener };
