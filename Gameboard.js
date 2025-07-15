import initialiseGrid from "./initialiseGrid";
export default class Gameboard {
  constructor() {
    //Create 10x10 gameboard
    this.playerBoard = initialiseGrid(10);
  }

  placeShip(ship, location, orientation) {}
}
