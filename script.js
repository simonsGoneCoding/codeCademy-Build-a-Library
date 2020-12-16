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

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
