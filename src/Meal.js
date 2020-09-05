class Meal {
  constructor(sides, mains, desserts) {
    this.side = sides;
    this.main = mains;
    this.desserts = desserts;
    this.id = Date.now();
  }
}
