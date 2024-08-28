export default class HolbertonSchool {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string')
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number')
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings')
    }
    this._name = name;
    this._length = length;
    this._students = students
  }
  get name() {
    return this._name
  }
  get length() {
    return this._length
  }
  get students() {
    return this._students
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be string')
    }
    this._name = newName
  }
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number')
    }
    this._length = newLength
  }
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings')
    }
    this._students = newStudents
  }
}
