import Ship from "./Ship";

describe("Ship Class", () => {
  test("check is defined", () => {
    expect(Ship).toBeDefined();
  });

  test("check is Class", () => {
    const instance = new Ship("Carrier");
    expect(instance).toBeInstanceOf(Ship);
  });

  test("check error thrown if incorrect type of ship entered", () => {
    expect(() => new Ship("Carr")).toThrow(Error);
  });

  test("check error thrown if no ship typ entered", () => {
    expect(() => new Ship()).toThrow(Error);
  });

  test("check Hit function/method exists", () => {
    const instance = new Ship("Battleship");
    expect(instance.hit).toBeInstanceOf(Function);
  });

  test("check Hit function increases number of hits on ship (1)", () => {
    const instance = new Ship("Battleship");
    instance.hit();
    expect(instance.timesHit).toBe(1);
    instance.hit();
    expect(instance.timesHit).toBe(2);
  });

  test("check Hit function increases number of hits on ship (2)", () => {
    const instance = new Ship("Submarine");
    instance.hit();
    instance.hit();
    instance.hit();
    expect(instance.timesHit).toBe(3);
  });

  test("isSunk function/method exists", () => {
    const instance = new Ship("Submarine");
    expect(instance.isSunk).toBeInstanceOf(Function);
  });

  test("check isSunk function (1)", () => {
    const instance = new Ship("Submarine");
    instance.timesHit = instance.length;
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(true);
  });

  test("check isSunk function (2)", () => {
    const instance = new Ship("Submarine");
    instance.timesHit = instance.length - 1;
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(false);
  });

  test("check isSunk function (3)", () => {
    const instance = new Ship("Destroyer");
    instance.timesHit = instance.length + 1;
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(true);
  });

  test("check isSunk function (4)", () => {
    const instance = new Ship("Destroyer");
    instance.timesHit = 1;
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(false);
  });
});
