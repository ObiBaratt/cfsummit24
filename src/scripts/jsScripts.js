import fade from "../fade/index.js";
import slide from "../slide/index.js";

function toggleRunJsButton() {
  const jsButton = document.querySelector("#run-js-button");
  fade(jsButton);
}


function addRunJsSliderListener() {
  const jsButton = document.querySelector("#run-js-button");
  jsButton.addEventListener("click", () => {
    const jsBody = document.getElementById("js-body");
    slide(jsBody, "left", false, false);
    setTimeout(() => {
      fade(jsButton);
    }, 100);
  });
}
function appendToJsBody(text) {
  const jsBody = document.getElementById("js-body");
  const p = document.createElement("p");
  p.textContent = text;
  jsBody.appendChild(p);
}

export { toggleRunJsButton, appendToJsBody, addRunJsSliderListener };
