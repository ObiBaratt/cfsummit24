export default function fade(element, duration = 500) {
    const isVisible =
      element.style.opacity === "1" || element.style.opacity === "";
  
    // Store original display if not already stored
    if (!element.dataset.originalDisplay) {
      element.dataset.originalDisplay = window.getComputedStyle(element).display;
    }
    const originalDisplay = element.dataset.originalDisplay;
  
    element.style.transition = `opacity ${duration}ms ease`;
  
    if (isVisible) {
      // Fade out
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.display = "none";
      }, duration);
    } else {
      // Fade in
      element.style.opacity = 0;
      element.style.display = originalDisplay;
      element.style.visibility = "visible"; // Ensure visibility
      element.offsetWidth; // Trigger reflow
      element.style.opacity = 1;
    }
  }
  