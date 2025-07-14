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
});
