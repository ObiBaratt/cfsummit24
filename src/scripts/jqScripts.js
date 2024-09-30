const $ = window.jQuery;

function appendToJqCode(text) {
  const $jqBody = $("#jq-code");
  const $pre = $("<pre>").text(text);
  $jqBody.append($pre);
}

function cleanUpJq(tag) {
  const $jqCode = $("#jq-code");
  const tags = $jqCode.find(tag);
  tags.length && tags.fadeToggle();
  setTimeout(() => {
    tags.length && tags.remove();
  }, 1000);
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

  let $jqAnimalList = $("<ol>", { id: "jqAnimalList" });
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
    $jqDog.css("color", "green");
  });
}

function addCoolAnimalsToJqList() {
  const $jqBody = $("#jq-body");
  const jqAnimalList = $("#jqAnimalList");
  const coolAnimals = ["Turtle", "Gorilla", "Platypus", "Orca", "Cheetah"];
  const $button = $("<button>").text("Add an Animal");
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

function fetchJqDogs() {
  const $jqBody = $("#jq-body");
  const $button = $("<button>").text("Fetch a Dog");
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
            width: "160px",
            height: "160px",
          });
        $jqBody.prepend($img);
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
      height: "45px",
      width: "45px",
    });
  });
}

export {
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
};
