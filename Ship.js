export default class Ship {
  constructor(typeOfShip) {
    if (
      typeOfShip !== "Carrier" &&
      typeOfShip !== "Battleship" &&
      typeOfShip !== "Cruiser" &&
      typeOfShip !== "Submarine" &&
      typeOfShip !== "Destroyer"
    ) {
      throw new Error(
        `${typeOfShip} is not permitted type. Type must be string and one of the following: Carrier, Battleship, Cruiser, Submarine, Destroyer`
      );
    }

    // Define lengths for each type of ship
    const lengths = {
      Carrier: 5,
      Battleship: 4,
      Cruiser: 3,
      Submarine: 3,
      Destroyer: 2,
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
