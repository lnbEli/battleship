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

  test("check placeShip function/method exists", () => {
    const instance = new Gameboard();
    expect(instance.placeShip).toBeInstanceOf(Function);
  });

  test("check placeShip function adds ship to gameboard (Horizontal) (1)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [3, 5]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", "R", "R", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check placeShip function adds ship to gameboard (Horizontal)(2)", () => {
    const playerGameboard = new Gameboard();
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(battleship, [2, 3]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "B", "B", "B", "B", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check placeShip function adds ship to gameboard (Horizontal)(3)", () => {
    const playerGameboard = new Gameboard();
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(battleship, [6, 3]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, "B", "B", "B", "B"],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check placeShip function adds ship to gameboard (Horizontal)(4)", () => {
    const playerGameboard = new Gameboard();
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(battleship, [0, 3]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ["B", "B", "B", "B", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check placeShip function adds ship to gameboard (Horizontal)(5)", () => {
    const playerGameboard = new Gameboard();
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(battleship, [4, 0]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, "B", "B", "B", "B", 0, 0],
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

  test("check placeShip function adds ship to gameboard (Horizontal)(6)", () => {
    const playerGameboard = new Gameboard();
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(battleship, [4, 9]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "B", "B", "B", "B", 0, 0],
    ]);
  });
  test("check placeShip function adds multiple ships to gameboard (Horizontal)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    const battleship = playerGameboard.fleet.battleship;
    playerGameboard.placeShip(cruiser, [3, 5]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", "R", "R", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    playerGameboard.placeShip(battleship, [2, 3]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "B", "B", "B", "B", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", "R", "R", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("Ship cannot be added to gameboard if there isn't sufficient space available to fit it's entire length (1)", () => {
    const playerGameboard = new Gameboard();
    const submarine = playerGameboard.fleet.submarine;
    expect(() => {
      playerGameboard.placeShip(submarine, [8, 7]);
    }).toThrow("Must Choose Space With Sufficient Empty Cells");
  });

  test("Ship cannot be added to gameboard if there isn't sufficient space available to fit it's entire length(2)", () => {
    const playerGameboard = new Gameboard();
    const destroyer = playerGameboard.fleet.destroyer;
    expect(() => {
      playerGameboard.placeShip(destroyer, [9, 1]);
    }).toThrow("Must Choose Space With Sufficient Empty Cells");
  });

  test("Ship cannot be added to gameboard if cell doesn't exist (1)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [-2, 7]);
    }).toThrow("Must Choose Available Cells");
  });

  test("Ship cannot be added to gameboard if cell doesn't exist (2)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [12, 2]);
    }).toThrow("Must Choose Available Cells");
  });
  test("Ship cannot be added to gameboard if cell doesn't exist (3)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [10, 2]);
    }).toThrow("Must Choose Available Cells");
  });

  test("Ship cannot be added to gameboard if cell doesn't exist (4)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [-1, 2]);
    }).toThrow("Must Choose Available Cells");
  });
  test("Ship cannot be added to gameboard if cell doesn't exist (5)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [4, -1]);
    }).toThrow("Must Choose Available Cells");
  });

  test("Ship cannot be added to gameboard if cell doesn't exist (6)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    expect(() => {
      playerGameboard.placeShip(cruiser, [3, 10]);
    }).toThrow("Must Choose Available Cells");
  });

  test("check placeShip function adds ship to gameboard (Vertical) (1)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [3, 5], false);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "R", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check placeShip function adds ship to gameboard (Vertical) (2)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [9, 7], false);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, "R"],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, "R"],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, "R"],
    ]);
  });
});
