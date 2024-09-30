import fade from "../fade/index.js";

import { addJqSlider, appendToJqCode, newJqParagraph } from "./jqScripts.js";
import { addJsSlider, appendToJsCode, newJsParagraph } from "./jsScripts.js";

let funcIndex = 0;
const functions = [
  { js: addJsSlider, jq: addJqSlider },
  { js: newJsParagraph, jq: newJqParagraph },
];

document.addEventListener("keyup", (e) => {
  if (e.key === "0") {
    if (funcIndex >= functions.length) {
      console.error("No more functions to run.");
      return;
    }
    const curFuncs = functions[funcIndex];
    runJq(curFuncs.jq);
    runJs(curFuncs.js);

    funcIndex = funcIndex + 1;
    console.log({ funcIndex });
  }
});

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
});

function runJq(fn) {
  runCode(fn, "jq");
}

function runJs(fn) {
  runCode(fn, "js");
}

function runCode(fn, source) {
  fn();
  const fnText = fn.toString();
  if (source === "js") {
    appendToJsCode(fnText);
    appendToJsCode("=========");
  } else if (source === "jq") {
    appendToJqCode(fnText);
    appendToJqCode("=========");
  } else {
    console.error(`Unknown source: ${source}`);
  }
}

function cleanupCodeContainer() {
    
}
