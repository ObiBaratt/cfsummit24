import fade from "../fade/index.js";
import slide from "../slide/index.js";

function addJsSlider() {
  const jsBody = document.getElementById("js-body");
  slide(jsBody, "left", false, false);
}

function appendToJsCode(text) {
  const jsCode = document.getElementById("js-code");
  const pre = document.createElement("pre");
  pre.textContent = text;
  jsCode.appendChild(pre);
}

function newJsParagraph() {
  const jsBody = document.getElementById("js-body");
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is a new paragraph.";
  jsBody.appendChild(paragraph);
}

export { appendToJsCode, addJsSlider, newJsParagraph };
