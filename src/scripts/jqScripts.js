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

export {
  appendToJqCode,
  addJqSlider,
  newJqParagraph,
  cleanUpJq,
  newJqDivWithClass,
  addJqAnimalList,
};
