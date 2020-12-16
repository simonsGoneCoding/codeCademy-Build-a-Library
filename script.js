class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // ----- getters -----
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  //----- setters -----
  set isCheckedOut(value) {
    if (typeof value === "boolean") {
      this._isCheckedOut = value;
    } else {
      console.log("Wrong type!");
    }
  }

  //----- methods -----
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const averageRate =
      this._ratings.reduce((a, b) => a + b) / this._ratings.length;
    return averageRate;
  }

  addRating(rate) {
    this._ratings.push(rate);
  }
}

// const book = new Media("Tomek i jego ziomek");

// console.log(book)
