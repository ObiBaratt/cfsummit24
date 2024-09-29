const jqButton = $("#run-jq-button");

const jqBody = $("#jq-body");
const jqStartButton = $("#start-button");


function toggleRunJqButton() {
  jqButton.fadeToggle();
}

export { toggleRunJqButton };
