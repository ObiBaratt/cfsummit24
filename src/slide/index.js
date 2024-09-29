  /**
   * Slides an element from a given direction with an optional overlay.
   * @param {Element} element The element to slide.
   * @param {string} [direction="right"] The direction to slide from. Can be "left", "right", "top", or "bottom".
   * @param {boolean} [dim=true] Whether to create an overlay that dims the background. If true also only allows scrolling in the element.
   */
  export default function slide(element, direction = "right", dim = true) {
    const validDirections = ["left", "right", "top", "bottom"];
    if (!validDirections.includes(direction)) {
      console.error("Invalid direction. Choose from: left, right, top, bottom");
      return;
    }
  
    element.style.transform = getHiddenTransform(direction);
    element.classList.remove("panelHidden");
    element.classList.add(
      `slideFrom${direction.charAt(0).toUpperCase() + direction.slice(1)}`
    );
  
    element.offsetHeight;
  
    element.style.transition = "transform 0.3s ease-in-out";
    element.style.transform = "translate(0, 0)";
  
    let overlay;
    if (dim) {
      overlay = document.createElement("div");
      overlay.className = "dimOverlay";
      document.body.appendChild(overlay);
      document.body.classList.add("overlayed");
    }
  
    const reverseSlide = () => {
      element.style.transform = getHiddenTransform(direction);
  
      element.addEventListener(
        "transitionend",
        () => {
          element.classList.add("panelHidden");
          element.classList.remove(
            `slideFrom${direction.charAt(0).toUpperCase() + direction.slice(1)}`
          );
          element.style.transform = "";
          element.style.transition = "";
          if (overlay) {
            overlay.remove();
            document.body.classList.remove("overlayed");
          }
        },
        { once: true }
      );
    };
  
    const handleClickOutside = (event) => {
      if (!element.contains(event.target)) {
        reverseSlide();
        document.removeEventListener("click", handleClickOutside);
      }
    };
  
    // Need to delay or the initial click triggers
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 50);
  }
  
  function getHiddenTransform(direction) {
    switch (direction) {
      case "left":
        return "translateX(-100%)";
      case "right":
        return "translateX(100%)";
      case "top":
        return "translateY(-100%)";
      case "bottom":
        return "translateY(100%)";
    }
  }