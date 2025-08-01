import Ship from "./Ship";
import Gameboard from "./Gameboard";

describe("Gameboard Class", () => {
  test("check is defined", () => {
    expect(Gameboard).toBeDefined();
  });

  test("check is Class", () => {
    const playerGameboard = new Gameboard();
    expect(playerGameboard).toBeInstanceOf(Gameboard);
  });

  test("check board created is array of 10 arrays each of length 10", () => {
    const playerGameboard = new Gameboard();
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("check board is array of 10 arrays all including 10 zeros", () => {
    const playerGameboard = new Gameboard();
    // Check that each row has a length of 10 and contains only zeros
    const allRowsContainTenZeros = playerGameboard.playerBoard.every(
      (row) => row.length === 10 && row.every((cell) => cell === 0)
    );
    // Check that the playerBoard has exactly 10 rows
    expect(playerGameboard.playerBoard.length).toBe(10);
    // Final check that all rows contain ten zeros
    expect(allRowsContainTenZeros).toBe(true);
  });

  test("check placeShip function/method exists", () => {
    const playerGameboard = new Gameboard();
    expect(playerGameboard.placeShip).toBeInstanceOf(Function);
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

  test("check receiveAttack function/method exists", () => {
    const playerGameboard = new Gameboard();
    expect(playerGameboard.receiveAttack).toBeInstanceOf(Function);
  });

  test("receiveAttack function determines if coords hit placed ship (1)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [9, 7], false);
    expect(playerGameboard.receiveAttack([9, 7])).toBe(true);
  });

  test("receiveAttack function determines if coords hit placed ship (2)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [9, 7], false);
    expect(playerGameboard.receiveAttack([1, 2])).toBe(false);
  });

  test("receiveAttack function determines if coords hit placed ship (3)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [9, 7], false);
    expect(playerGameboard.receiveAttack([-5, 7])).toBe(false);
  });

  test("receiveAttack function determines if coords hit placed ship (4)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [9, 7], false);
    expect(playerGameboard.receiveAttack([5, -7])).toBe(false);
  });

  test("receiveAttack function determines if coords hit placed ship (5)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [1, 4], false);
    expect(playerGameboard.receiveAttack([1, 3])).toBe(false);
    expect(playerGameboard.receiveAttack([1, 4])).toBe(true);
    expect(playerGameboard.receiveAttack([1, 5])).toBe(true);
    expect(playerGameboard.receiveAttack([1, 6])).toBe(true);
    expect(playerGameboard.receiveAttack([1, 7])).toBe(false);
  });

  test("receiveAttack function determines if coords hit placed ship and send hit function to correct ship (1)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [1, 4], false);
    expect(playerGameboard.receiveAttack([1, 5])).toBe(true);
    expect(playerGameboard.fleet["cruiser"].timesHit).toBe(1);
  });

  test("receiveAttack function determines if coords hit placed ship and send hit function to correct ship (2)", () => {
    const playerGameboard = new Gameboard();
    const cruiser = playerGameboard.fleet.cruiser;
    playerGameboard.placeShip(cruiser, [1, 4], false);
    expect(playerGameboard.receiveAttack([1, 5])).toBe(true);
    expect(playerGameboard.receiveAttack([1, 6])).toBe(true);
    expect(playerGameboard.fleet["cruiser"].timesHit).toBe(2);
  });

  test("receiveAttack function determines if coords hit placed ship and send hit function to correct ship (3)", () => {
    const playerGameboard = new Gameboard();
    const destroyer = playerGameboard.fleet.destroyer;
    playerGameboard.placeShip(destroyer, [2, 2], true);
    expect(playerGameboard.receiveAttack([3, 2])).toBe(true);
    expect(playerGameboard.receiveAttack([2, 1])).toBe(false);
    expect(playerGameboard.fleet["destroyer"].timesHit).toBe(1);
    expect(playerGameboard.receiveAttack([2, 2])).toBe(true);
    expect(playerGameboard.fleet["destroyer"].timesHit).toBe(2);
    expect(playerGameboard.receiveAttack([4, 2])).toBe(false);
    expect(playerGameboard.fleet["destroyer"].timesHit).toBe(2);
  });

  test("Gameboards should keep track of missed attacks so they can display them properly (1)", () => {
    const playerGameboard = new Gameboard();
    playerGameboard.receiveAttack([1, 5]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "M", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("Gameboards should keep track of missed attacks so they can display them properly (2)", () => {
    const playerGameboard = new Gameboard();
    playerGameboard.receiveAttack([4, 3]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "M", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  test("Gameboards should keep track of missed attacks so they can display them properly (3)", () => {
    const playerGameboard = new Gameboard();
    playerGameboard.receiveAttack([-1, -5]);
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  test("Gameboards should keep track of missed attacks so they can display them properly (4)", () => {
    const playerGameboard = new Gameboard();
    const destroyer = playerGameboard.fleet.destroyer;
    playerGameboard.placeShip(destroyer, [2, 2], true);
    playerGameboard.receiveAttack([5, 5]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "D", "D", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, "M", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
  test("Gameboards should keep track of missed attacks so they can display them properly with full board of ships", () => {
    const playerGameboard = new Gameboard();
    const carrier = playerGameboard.fleet.carrier;
    const battleship = playerGameboard.fleet.battleship;
    const cruiser = playerGameboard.fleet.cruiser;
    const submarine = playerGameboard.fleet.submarine;
    const destroyer = playerGameboard.fleet.destroyer;
    playerGameboard.placeShip(carrier, [2, 2], true);
    playerGameboard.placeShip(battleship, [4, 5], false);
    playerGameboard.placeShip(cruiser, [6, 6], true);
    playerGameboard.placeShip(submarine, [1, 5], false);
    playerGameboard.placeShip(destroyer, [9, 2], false);
    playerGameboard.receiveAttack([1, 4]);
    playerGameboard.receiveAttack([5, 5]);
    playerGameboard.receiveAttack([5, 9]);
    expect(playerGameboard.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "C", "C", "C", "C", "C", 0, 0, "D"],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, "D"],
      [0, "M", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "S", 0, 0, "B", "M", 0, 0, 0, 0],
      [0, "S", 0, 0, "B", 0, "R", "R", "R", 0],
      [0, "S", 0, 0, "B", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "B", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, "M", 0, 0, 0, 0],
    ]);
  });
});
