export default class Building {
  constructor(num) {
    this._sqft = num;
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  get sqft() {
    return this._sqft;
  }
  set sqft(num) {
    this._sqft = num;
  }
}
