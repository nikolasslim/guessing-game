class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessing = Math.round((this.max + this.min) / 2);
    return this.guessing;
  }

  lower() {
    this.max = this.guessing;
  }

  greater() {
    this.min = this.guessing;
  }
}

module.exports = GuessingGame;
