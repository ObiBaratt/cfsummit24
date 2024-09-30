import fade from "../fade/index.js";

import {
  appendToJqCode,
  addJqSlider,
  newJqParagraph,
  cleanUpJq,
  newJqDivWithClass,
  addJqAnimalList,
  modifyJqAnimalListItems,
  addJqListItemEventHandler,
  addCoolAnimalsToJqList,
  fetchJqDogs,
  cleanUpAfterJqDogs,
} from "./jqScripts.js";
import {
  appendToJsCode,
  addJsSlider,
  newJsParagraph,
  cleanUpJs,
  newJsDivWithClass,
  addJsAnimalList,
  modifyJsAnimalListItems,
  addJsListItemEventHandler,
  addCoolAnimalsToJsList,
  fetchJsDogs,
  cleanUpAfterJsDogs,
} from "./jsScripts.js";

let funcIndex = 0;
const functions = [
  { js: cleanUpJs, jq: cleanUpJq },
  { js: addJsSlider, jq: addJqSlider },
  { js: newJsParagraph, jq: newJqParagraph },
  { js: newJsDivWithClass, jq: newJqDivWithClass },
  { js: addJsAnimalList, jq: addJqAnimalList },
  { js: modifyJsAnimalListItems, jq: modifyJqAnimalListItems },
  { js: addJsListItemEventHandler, jq: addJqListItemEventHandler },
  { js: addCoolAnimalsToJsList, jq: addCoolAnimalsToJqList },
  { js: fetchJsDogs, jq: fetchJqDogs },
  { js: cleanUpAfterJsDogs, jq: cleanUpAfterJqDogs },
];

document.addEventListener("keyup", (e) => {
  if (e.key === "0") {
    if (funcIndex >= functions.length) {
      console.error("No more functions to run.");
      return;
    }
    const curFuncs = functions[funcIndex];

    if (funcIndex === 0) {
      cleanUpContainer("h3");
    } else {
      cleanUpContainer("pre");
    }

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
  } else if (source === "jq") {
    appendToJqCode(fnText);
  } else {
    console.error(`Unknown source: ${source}`);
  }
}

function cleanUpContainer(tag) {
  console.log("cleaning up", tag);
  cleanUpJq(tag);
  cleanUpJs(tag);
}
