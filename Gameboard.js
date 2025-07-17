import initialiseGrid from "./initialiseGrid";
export default class Gameboard {
  constructor() {
    //Create 10x10 gameboard
    this.playerBoard = initialiseGrid(10);
  }

  placeShip(shipObj, location, isHorizontal = true) {
    const row = location[1];
    const column = location[0];
    const shipLength = shipObj.length;
    const shipType = shipObj.typeOfShip;
    //Give each ship type a symbol for use on gameboard grid.
    const shipSymbols = {
      Carrier: "C",
      Battleship: "B",
      Cruiser: "R",
      Submarine: "S",
      Destroyer: "D",
    };
    const shipGridSymbol = shipSymbols[shipType];
    //replaces empty symbol "0" with ship symbol on grid.
    // Updates all cells to the right of the initially placed cell to represent the ship's length.
    // The cells are filled until the specified length of the ship is reached.
    for (let i = 0; i < shipLength; i++) {
      //If cell selected doesn't exist
      if (
        column < 0 ||
        column >= this.playerBoard.length ||
        row < 0 ||
        row >= this.playerBoard.length
      ) {
        throw new Error("Must Choose Available Cells");
      }
      if (isHorizontal) {
        //If there are not sufficient cells to fit total length of ship to right throw error
        //????? Need to check
        if (column + i >= this.playerBoard[row].length) {
          throw new Error("Must Choose Space With Sufficient Empty Cells");
        }
        this.playerBoard[row][column + i] = shipGridSymbol;
      }

      if (!isHorizontal) {
        //If there are not sufficient cells below to fit total length of ship
        //Needs tested
        if (row + i >= this.playerBoard.length) {
          throw new Error("Must Choose Space With Sufficient Empty Cells");
        }
        this.playerBoard[row + i][column] = shipGridSymbol;
      }
    }
  }
}
