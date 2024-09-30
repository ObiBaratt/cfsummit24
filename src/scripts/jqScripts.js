const $ = window.jQuery;

const jqBody = $("#jq-body");
const jqStartButton = $("#start-button");

function toggleRunJqButton() {
  const jqButton = $("#run-jq-button");
  jqButton.toggle();
}

function addRunJqSliderListener() {
  const jqButton = $("#run-jq-button");
  jqButton.on("click", () => {
    const jqBody = $("#jq-body");
    console.log("sliding", jqBody);
    jqBody.slideToggle();

    setTimeout(() => {
      jqButton.toggle();
    }, 100);
  });
}

function appendToJqBody(text) {
  const $jsBody = $("#js-body");
  const $p = $("<p>").text(text);
  $jsBody.append($p);
}

function runJq() {}

export { toggleRunJqButton, appendToJqBody, addRunJqSliderListener };
