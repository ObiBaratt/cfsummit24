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

function modifyJsAnimalListItems() {
  const jsAnimalList = document.getElementById("jsAnimalList");
  jsAnimalList.querySelectorAll("li").forEach((li) => {
    li.style = "font-weight: bold; font-size: 16px; color: blue";
  });
}

function addJsListItemEventHandler() {
  const jsCat = document.getElementById("#catJsListItem");
  const jsDog = document.getElementById("#dogJsListItem");
  function handleMouseOver() {
    catListItem.style.color = "white";
  }

  function handleMouseOut() {
    catListItem.style.color = "green";
  }
  dogListItem.addEventListener("mouseover", handleMouseOver);
  dogListItem.addEventListener("mouseout", handleMouseOut);
}

function addCoolAnimalsToJsList() {
  const jsBody = document.getElementById("js-body");
  const jsAnimalList = document.getElementById("jsAnimalList");
  const coolAnimals = ["Lion", "Elephant", "Giraffe", "Zebra", "Monkey"];
  const button = document.createElement("button");
  button.textContent = "Add an Animal";
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

function fetchJsDogs() {
  const jsBody = document.getElementById("js-body");
  const button = document.createElement("button");
  button.id = "js-fetch-dog-button";
  button.textContent = "Fetch a Dog";
  jsBody.appendChild(button);

  function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Random Dog Image";
        img.style.height = "160px";
        img.style.width = "160px";
        jsBody.insertBefore(img, jsBody.firstChild);
      });
  }
  button.addEventListener("click", fetchDog);
}

function cleanUpAfterJsDogs() {
  const jsBody = document.getElementById("js-body");
  const jsAnimalList = document.getElementById("jsAnimalList");
  const button = document.getElementById("js-fetch-dog-button");
  jsBody.removeChild(button);

  const jsGridContainer = document.createElement("div");
  jsGridContainer.classList.add("image-grid");
  jsGridContainer.id = "js-grid-container";
  jsAnimalList.insertBefore(jsGridContainer);

  const images = Array.from(jsBody.querySelectorAll("img"));
  images.forEach((img) => {
    img.style.height = "45px";
    img.style.width = "45px";
    jsGridContainer.appendChild(img);
  });
}

export {
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
};
