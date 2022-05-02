// https://jsfiddle.net/chriscoyier/t5Kts/

export const calculateDistance = (ref, mouseX, mouseY) => {
  if (ref === undefined) {
    return { x: 1, y: 1 };
  }

  const { width, height, top, left } = ref.getBoundingClientRect();
  const intersectX = Math.min(mouseX, left + width) >= Math.max(mouseX, left);
  const intersectY = Math.min(mouseY, top + height) >= Math.max(mouseY, top);

  const element = {
    x: intersectX ? mouseX : left + width < mouseX ? left + width : left,
    y: intersectY ? mouseY : top + height < mouseY ? top + height : top,
  };

  const x = Math.sqrt(Math.pow(mouseX - element.x, 2));
  const y = Math.sqrt(Math.pow(mouseY - element.y, 2));

  return { x, y };
};
