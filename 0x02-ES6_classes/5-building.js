export default class Building {
    constructor(num) {
        this._sqft = num;
        if (this.constructor !== 'Building' && this.evacuationWarningMessage === 'undefined') {
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
