import initialiseGrid from "./initialiseGrid";
export default class Gameboard {
  constructor() {
    //Create 10x10 gameboard
    this.playerBoard = initialiseGrid(10);
  }

  placeShip(shipObj, location, orientation = "horizontal") {
    //Coords flipped to allow to be read in x/y order
    const xCoord = location[1];
    const yCoord = location[0];
    const shipLength = shipObj.length;
    const shipType = shipObj.typeOfShip;
    const shipSymbols = {
      Carrier: "C",
      Battleship: "B",
      Cruiser: "R",
      Submarine: "S",
      Destroyer: "D",
    };
    const shipGridSymbol = shipSymbols[shipType];
    for (let i = 0; i < shipLength; i++) {
      this.playerBoard[xCoord][yCoord + i] = shipGridSymbol;
    }
  }
}
