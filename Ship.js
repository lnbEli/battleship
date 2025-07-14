export default class Ship {
  constructor(length, timesHit = 0) {
    if (typeof length !== "number" || !Number.isFinite(length) || length <= 0) {
      throw new Error("Length must be positive number");
    }
    if (
      typeof timesHit !== "number" ||
      !Number.isFinite(timesHit) ||
      timesHit < 0
    ) {
      throw new Error("Times hit input must be positive number");
    }
    this.length = length;
    this.timesHit = timesHit;
  }
  hit() {
    this.timesHit++;
  }

  isSunk() {
    return this.timesHit >= this.length;
  }
}
