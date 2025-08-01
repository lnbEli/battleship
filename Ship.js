export default class Ship {
  constructor(typeOfShip) {
    if (
      typeOfShip !== "carrier" &&
      typeOfShip !== "battleship" &&
      typeOfShip !== "cruiser" &&
      typeOfShip !== "submarine" &&
      typeOfShip !== "destroyer"
    ) {
      throw new Error(
        `${typeOfShip} is not permitted type. Type must be string and one of the following: Carrier, Battleship, Cruiser, Submarine, Destroyer`
      );
    }

    // Define lengths for each type of ship
    const lengths = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };

    this.timesHit = 0;
    this.typeOfShip = typeOfShip;
    // Assign the length based on the type of ship
    this.length = lengths[this.typeOfShip];
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    return this.timesHit >= this.length;
  }
}
