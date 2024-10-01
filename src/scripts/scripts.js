import fade from "../fade/index.js";

import {
  prependToJqCode,
  addJqSlider,
  newJqParagraph,
  cleanUpJq,
  newJqDivWithClass,
  addJqAnimalList,
  modifyJqAnimalListItems,
  addJqListItemEventHandler,
  addCoolAnimalsToJqList,
  removeJqAnimalListItemsAndButton,
  fetchJqDogs,
  cleanUpAfterJqDogs,
} from "./jqScripts.js";

import {
  prependToJsCode,
  addJsSlider,
  newJsParagraph,
  cleanUpJs,
  newJsDivWithClass,
  addJsAnimalList,
  modifyJsAnimalListItems,
  addJsListItemEventHandler,
  addCoolAnimalsToJsList,
  removeJsAnimalListItemsAndButton,
  fetchJsDogs,
  cleanUpAfterJsDogs,
} from "./jsScripts.js";

let funcIndex = 0;
const functions = [
  { js: prependToJsCode, jq: prependToJqCode },
  { js: cleanUpJs, jq: cleanUpJq },
  { js: addJsSlider, jq: addJqSlider },
  { js: newJsParagraph, jq: newJqParagraph },
  { js: newJsDivWithClass, jq: newJqDivWithClass },
  { js: addJsAnimalList, jq: addJqAnimalList },
  { js: modifyJsAnimalListItems, jq: modifyJqAnimalListItems },
  { js: addJsListItemEventHandler, jq: addJqListItemEventHandler },
  { js: addCoolAnimalsToJsList, jq: addCoolAnimalsToJqList },
  {
    js: removeJsAnimalListItemsAndButton,
    jq: removeJqAnimalListItemsAndButton,
  },
  { js: fetchJsDogs, jq: fetchJqDogs },
  { js: cleanUpAfterJsDogs, jq: cleanUpAfterJqDogs },
];

const keypressListener = (e) => {
  console.log("sdfads", funcIndex);
  if (e.key === "0") {
    if (funcIndex === functions.length) {
      handleCleanup();
      document.removeEventListener("keypress", keypressListener);
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
  }
};

document.addEventListener("keypress", keypressListener);

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const codeContainer = document.getElementById("code-container");
const header = document.getElementById("header");

function fadeCodeContainer(duration = 500) {
  fade(codeContainer, duration);
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
    prependToJsCode(fnText);
  } else if (source === "jq") {
    prependToJqCode(fnText);
  } else {
    console.error(`Unknown source: ${source}`);
  }
}

function cleanUpContainer(tag) {
  cleanUpJq(tag);
  cleanUpJs(tag);
}

function handleCleanup() {
  console.log("Running cleanup");
  const endContainer = document.getElementById("end-container");
  const jsBody = document.getElementById("js-body");
  const jqBody = document.getElementById("jq-body");
  fade(codeContainer);
  fade(jsBody, 3500);
  fade(jqBody, 3500);
  fade(endContainer, 7500);
}
