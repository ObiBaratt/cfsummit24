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
    jqBody.slideToggle();

    setTimeout(() => {
      jqButton.toggle();
      const fnText = addRunJqSliderListener.toString();
      appendToJqCode(fnText);
    }, 100);
  });
}

function appendToJqCode(text) {
  const $jsBody = $("#jq-code");
  const $pre = $("<pre>").text(text);
  $jsBody.append($pre);
}

export { toggleRunJqButton, appendToJqCode, addRunJqSliderListener };
