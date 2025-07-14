import Ship from "./Ship";

describe("Ship Class", () => {
  test("check is defined", () => {
    expect(Ship).toBeDefined();
  });

  //Don't need to test Class but do test instances???
  //Class constructor is not accessed by user....
  test("check is Class", () => {
    const instance = new Ship(3);
    expect(instance).toBeInstanceOf(Ship);
  });

  test("check error thrown if string value inputted (1)", () => {
    expect(() => new Ship("2")).toThrow("Length must be positive number");
  });

  test("check error thrown if string value inputted (2)", () => {
    expect(() => new Ship(2, "4")).toThrow(
      "Times hit input must be positive number"
    );
  });

  test("check error thrown if string value inputted (3)", () => {
    expect(() => new Ship(-2)).toThrow("Length must be positive number");
  });

  test("check error thrown if string value inputted (4)", () => {
    expect(() => new Ship(2, -4)).toThrow(
      "Times hit input must be positive number"
    );
  });
  test("check Hit function/method exists", () => {
    const instance = new Ship(5);
    expect(instance.hit).toBeInstanceOf(Function);
  });
  test("check Hit function increases number of hits on ship (1)", () => {
    const instance = new Ship(4);
    instance.hit();
    expect(instance.timesHit).toBe(1);
  });

  test("check Hit function increases number of hits on ship (2)", () => {
    const instance = new Ship(4, 3);
    instance.hit();
    expect(instance.timesHit).toBe(4);
  });

  test("isSunk function/method exists", () => {
    const instance = new Ship(5);
    expect(instance.isSunk).toBeInstanceOf(Function);
  });

  test("check isSunk function (1)", () => {
    const instance = new Ship(4, 4);
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(true);
  });

  test("check isSunk function (2)", () => {
    const instance = new Ship(5, 4);
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(false);
  });

  test("check isSunk function (3)", () => {
    const instance = new Ship(2);
    const isSunk = instance.isSunk();
    expect(isSunk).toBe(false);
  });
});
