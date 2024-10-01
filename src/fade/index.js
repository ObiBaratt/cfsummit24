function getComputedOpacity(element) {
  return parseFloat(window.getComputedStyle(element).opacity);
}

function fadeIn(element, duration = 500) {
  if (!element.dataset.originalDisplay) {
    element.dataset.originalDisplay = window.getComputedStyle(element).display;
  }
  const originalDisplay = element.dataset.originalDisplay;

  element.style.transition = `opacity ${duration}ms ease-in-out`;

  element.style.opacity = "0";
  element.style.display =
    originalDisplay !== "none" ? originalDisplay : "block";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.opacity = "1";
    });
  });
}

function fadeOut(element, duration = 500) {
  if (getComputedOpacity(element) <= 0) return;

  element.style.transition = `opacity ${duration}ms ease-in-out`;

  element.style.opacity = "0";
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}

/**
 * Fades an element in or out, depending on its current opacity.
 * @param {Element} element - The element to be faded.
 * @param {number} [duration=500] - The duration of the fade in milliseconds.
 */
export default function fade(element, duration = 500) {
  if (getComputedOpacity(element) === 1) {
    fadeOut(element, duration);
  } else {
    fadeIn(element, duration);
  }
}
