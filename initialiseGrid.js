export default function initialiseGrid(gridSize) {
  const arrayY = [];
  for (let i = 0; i < gridSize; i++) {
    const arrayX = [];
    for (let j = 0; j < gridSize; j++) {
      arrayX.push(0);
    }
    arrayY.push(arrayX);
  }
  return arrayY;
}
