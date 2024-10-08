import fade from "../fade/index.js";
import slide from "../slide/index.js";

function prependToJsCode(text) {
  const jsCode = document.getElementById("js-code");
  const pre = document.createElement("pre");
  pre.textContent = text;
  jsCode.insertBefore(pre, jsCode.firstChild);
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
  // slide(element, direction, overlay, outsideClicksClose)
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

function modifyJsAnimalListItems() {
  const jsAnimalList = document.getElementById("jsAnimalList");
  jsAnimalList.querySelectorAll("li").forEach((li) => {
    li.style = "font-weight: bold; font-size: 16px; color: blue";
  });
}

function addJsListItemEventHandler() {
  const jsCat = document.getElementById("catJsListItem");
  const jsDog = document.getElementById("dogJsListItem");

  jsDog.addEventListener("mouseover", () => (jsCat.style.color = "white"));
  jsDog.addEventListener("mouseout", () => (jsCat.style.color = "green"));
}

function addCoolAnimalsToJsList() {
  const jsBody = document.getElementById("js-body");
  const jsAnimalList = document.getElementById("jsAnimalList");
  const coolAnimals = ["Lion", "Elephant", "Giraffe", "Zebra"];
  const button = document.createElement("button");
  button.textContent = "Add an Animal";
  button.id = "jsAnimalListButton";
  jsBody.appendChild(button);

  function addAnimal() {
    const rand = Math.random();
    const randomIndex = Math.floor(rand * coolAnimals.length);
    const randomAnimal = coolAnimals[randomIndex];
    const li = document.createElement("li");
    li.id = `${randomAnimal}JsListItem-${rand}`;
    li.textContent = randomAnimal;
    jsAnimalList.appendChild(li);
  }
  button.addEventListener("click", addAnimal);
}

function removeJsAnimalListItemsAndButton() {
  const jsAnimalList = document.getElementById("jsAnimalList");
  const jsAnimalListButton = document.getElementById("jsAnimalListButton");
  const animalListItems = jsAnimalList.querySelectorAll("li");

  animalListItems.forEach((li) => {
    fade(li);
    setTimeout(() => {
      li.remove();
    }, 2500);
  });

  fade(jsAnimalListButton);

  setTimeout(() => {
    jsAnimalListButton.remove();
  }, 1000);
}

function fetchJsDogs() {
  const jsBody = document.getElementById("js-body");
  const button = document.createElement("button");
  button.id = "js-fetch-dog-button";
  button.textContent = "Fetch a Dog";
  jsBody.appendChild(button);

  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Random Dog Image";
        img.style.height = "150px";
        img.style.width = "150px";
        jsBody.appendChild(img);
      });
  });
}

function cleanUpAfterJsDogs() {
  const jsBody = document.getElementById("js-body");
  const jsAnimalList = document.getElementById("jsAnimalList");
  const button = document.getElementById("js-fetch-dog-button");
  jsBody.removeChild(button);

  const jsGridContainer = document.createElement("div");
  jsGridContainer.classList.add("image-grid");
  jsGridContainer.id = "js-grid-container";
  jsAnimalList.insertBefore(jsGridContainer, jsAnimalList.firstChild);

  const images = Array.from(jsBody.querySelectorAll("img"));
  images.forEach((img) => {
    img.style.height = "50px";
    img.style.width = "50px";
    jsGridContainer.appendChild(img);
  });
}

export {
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
};
