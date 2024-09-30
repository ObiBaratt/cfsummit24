function getElementsWithText(text, caseSensitive = true) {
  const elements = [];
  const allElements = document.querySelectorAll("*");

  for (const element of allElements) {
    const elementText = element.textContent.trim();
    const searchText = caseSensitive ? text : text.toLowerCase();
    const elementTextToCompare = caseSensitive
      ? elementText
      : elementText.toLowerCase();

    if (elementTextToCompare.includes(searchText)) {
      elements.push(element);
    }
  }

  return elements;
}

function getFirstElementByText(text, caseSensitive = true) {
  const elements = getElementsWithText(text, caseSensitive);
  return elements[0];
}

export { getElementsWithText, getFirstElementByText };
