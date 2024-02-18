const obj = {
  rate: 1.2,
  getWage: function (wage) {
    return wage + wage * this.rate;
  },
  // shorthand:
  getDoubleWage() {
    return wage + wage * (this.rate * 2);
  },
};
