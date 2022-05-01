// https://jsfiddle.net/chriscoyier/t5Kts/

export const calculateDistance = (ref, mouseX, mouseY) => {
  if (ref === undefined) {
    return { x: 1, y: 1 };
  }

  const y = Math.floor(
    Math.sqrt(Math.pow(mouseY - (ref.offsetHeight + ref.clientHeight) - 700, 2))
  );
  const x = Math.floor(
    Math.sqrt(Math.pow(mouseX - (ref.offsetLeft + ref.clientWidth), 2))
  );
  return { x, y };
};

// offset top - scroll position
