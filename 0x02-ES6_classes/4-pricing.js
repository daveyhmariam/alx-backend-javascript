import Curreny from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount
    this._currency = currency
  }
  get amount() {
    return this._amount
  }
  get currency() {
    return this._currency
  }
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be Number')
    }
    this._amount = newAmount
  }
  set currency(newCurrency) {
    if (!newCurrency instanceof Curreny) {
      throw new TypeError('Currency must be Currency')
    }
    this._currency = newCurrency
  }
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }
  convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be Number')
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be Number')
    }
    return amount * conversionRate
  }
}
