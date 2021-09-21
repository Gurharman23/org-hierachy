export const colors = ["blue", "red", "green", "pink", "yellow"];
export function getColor(parentColorIndex) {
  return (parentColorIndex + 1) % colors.length;
}
