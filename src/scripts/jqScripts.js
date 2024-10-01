const $ = window.jQuery;

function prependToJqCode(text) {
  const $jqCode = $("#jq-code");
  const $pre = $("<pre>").text(text);
  $jqCode.prepend($pre);
}

function cleanUpJq(tag) {
  const $jqCode = $("#jq-code");
  const tags = $jqCode.find(tag);
  tags.length && tags.fadeToggle();
  setTimeout(() => {
    tags.length && tags.remove();
  }, 2500);
}

function addJqSlider() {
  const jqBody = $("#jq-body");
  jqBody.slideToggle();
}

function newJqParagraph() {
  const $jsBody = $("#jq-body");
  $jsBody.append("<p>This is a new paragraph.</p>");
}

function newJqDivWithClass() {
  const $jsBody = $("#jq-body");
  $jsBody.append("<div class='red'>Contents of the div.</div>");
}

function addJqAnimalList() {
  const $jsBody = $("#jq-body");
  const basicAnimals = ["Dog", "Cat", "Mouse"];

  const $jqAnimalList = $("<ol>", { id: "jqAnimalList" });
  $jsBody.append($jqAnimalList);

  basicAnimals.forEach((animal) => {
    const listItem = $("<li>").text(animal);
    listItem.attr("id", animal.toLowerCase() + "JqListItem");
    $jqAnimalList.append(listItem);
  });
}

function modifyJqAnimalListItems() {
  const $jqAnimalList = $("#jqAnimalList");
  $jqAnimalList.find("li").css({
    "font-weight": "bold",
    "font-size": "16px",
    color: "blue",
  });
}

function addJqListItemEventHandler() {
  const $jqCat = $("#catJqListItem");
  const $jqDog = $("#dogJqListItem");

  $jqDog.on("mouseover", function () {
    $jqCat.css("color", "white");
  });

  $jqDog.on("mouseout", function () {
    $jqCat.css("color", "green");
  });
}

function addCoolAnimalsToJqList() {
  const $jqBody = $("#jq-body");
  const jqAnimalList = $("#jqAnimalList");
  const coolAnimals = ["Gorilla", "Platypus", "Orca", "Cheetah"];
  const $button = $("<button>")
    .text("Add an Animal")
    .attr("id", "jqAnimalListButton");
  $jqBody.append($button);

  function addAnimal() {
    const rand = Math.random();
    const randomIndex = Math.floor(rand * coolAnimals.length);
    const randomAnimal = coolAnimals[randomIndex];
    const $li = $("<li>").text(randomAnimal);
    $li.attr("id", `${randomAnimal}JqListItem-${rand}`);
    jqAnimalList.append($li);
  }
  $button.on("click", addAnimal);
}

function removeJqAnimalListItemsAndButton() {
  const $jqAnimalList = $("#jqAnimalList");
  const $jqAnimalListButton = $("#jqAnimalListButton");
  const $animalListItems = $jqAnimalList.find("li");

  $animalListItems.each(function () {
    $(this).fadeToggle();
    setTimeout(() => {
      $(this).remove();
    }, 1000);
  });

  $jqAnimalListButton.fadeToggle();

  setTimeout(() => {
    $jqAnimalListButton.remove();
  }, 1000);
}

function fetchJqDogs() {
  const $jqBody = $("#jq-body");
  const $button = $("<button>")
    .text("Fetch a Dog")
    .attr("id", "jq-fetch-dog-button");
  $jqBody.append($button);

  $button.on("click", () => {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      dataType: "json",
      success: function (data) {
        const $img = $("<img>")
          .attr("src", data.message)
          .attr("alt", "Random Dog Image")
          .css({
            width: "150px",
            height: "150px",
          });
        $jqBody.append($img);
      },
    });
  });
}

function cleanUpAfterJqDogs() {
  const $jqBody = $("#jq-body");
  const $jqAnimalList = $("#jqAnimalList");
  const $button = $jqBody.find("button");
  $button.remove();

  const jqGridContainer = $("<div>")
    .attr("class", "image-grid")
    .attr("id", "jqGridContainer");
  $jqAnimalList.prepend(jqGridContainer);

  const $images = $jqBody.find("img");
  $images.each(function () {
    $(this).css({
      height: "50px",
      width: "50px",
    });
    jqGridContainer.append($(this)); 
  });
}

export {
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
};
