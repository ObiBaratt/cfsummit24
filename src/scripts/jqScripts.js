const $ = window.jQuery;

function addJqSlider() {
  const jqBody = $("#jq-body");
  jqBody.slideToggle();
}

function appendToJqCode(text) {
  const $jqBody = $("#jq-code");
  const $pre = $("<pre>").text(text);
  $jqBody.append($pre);
}

function newJqParagraph() {
  const $jsBody = $("#jq-body");
  $jsBody.append("<p>This is a new paragraph.</p>");
}

function cleanUpJqCode() {}

export { appendToJqCode, addJqSlider, newJqParagraph };
