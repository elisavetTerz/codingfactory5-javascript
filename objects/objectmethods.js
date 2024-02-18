const point = {
  x: 1.5,
  y: 2.123,
  toString() {
    return `${this.x}, ${this.y}`;
  },
  //Overriding Object's methods
  toLocaleString() {
    return `${this.x.toLocaleString("en-US")}, ${this.y.toLocaleString(
      "en-US"
    )}`;
  },

  valueOf() {
    return Math.hypot(this.x, this.y).toFixed(2);
  },
};

const pointVal = Number(point);
