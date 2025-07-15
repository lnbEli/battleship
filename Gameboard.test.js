import Ship from "./Ship";
import Gameboard from "./Gameboard";

describe("Gameboard Class", () => {
  test("check is defined", () => {
    expect(Gameboard).toBeDefined();
  });

  test("check is Class", () => {
    const instance = new Gameboard();
    expect(instance).toBeInstanceOf(Gameboard);
  });

  test("check board created is array of 10 arrays each of length 10", () => {
    const instance = new Gameboard();
    expect(instance.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check board is array of 10 arrays all including 10 zeros", () => {
    const instance = new Gameboard();
    // Check that each row has a length of 10 and contains only zeros
    const allRowsContainTenZeros = instance.playerBoard.every(
      (row) => row.length === 10 && row.every((cell) => cell === 0)
    );
    // Check that the playerBoard has exactly 10 rows
    expect(instance.playerBoard.length).toBe(10);
    // Final check that all rows contain ten zeros
    expect(allRowsContainTenZeros).toBe(true);
  });
});
