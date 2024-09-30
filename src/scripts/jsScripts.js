import fade from "../fade/index.js";
import slide from "../slide/index.js";

function appendToJsCode(text) {
  const jsCode = document.getElementById("js-code");
  const pre = document.createElement("pre");
  pre.textContent = text;
  jsCode.appendChild(pre);
}

function cleanUpJs(tag) {
  const jsCode = document.getElementById("js-code");
  const tags = Array.from(jsCode.getElementsByTagName(tag));
  tags.length && tags.forEach((tag) => fade(tag));
  setTimeout(() => {
    tags.length && tags.forEach((tag) => tag.remove());
  }, 1000);
}

function addJsSlider() {
  const jsBody = document.getElementById("js-body");
  slide(jsBody, "left", false, false);
}

function newJsParagraph() {
  const jsBody = document.getElementById("js-body");
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is a new paragraph.";
  jsBody.appendChild(paragraph);
}

function newJsDivWithClass() {
  const jsBody = document.getElementById("js-body");
  const div = document.createElement("div");
  div.classList.add("red");
  div.textContent = "Contents of the div.";
  jsBody.appendChild(div);
}

function addJsAnimalList() {
  const jsBody = document.getElementById("js-body");
  const basicAnimals = ["Dog", "Cat", "Mouse"];

  const jsAnimalList = document.createElement("ol");
  jsAnimalList.id = "jsAnimalList";
  jsBody.appendChild(jsAnimalList);

  basicAnimals.forEach((animal) => {
    const listItem = document.createElement("li");
    listItem.id = animal.toLowerCase() + "JsListItem";
    listItem.textContent = animal;
    jsAnimalList.appendChild(listItem);
  });
}

export {
  appendToJsCode,
  addJsSlider,
  newJsParagraph,
  cleanUpJs,
  newJsDivWithClass,
  addJsAnimalList,
};
