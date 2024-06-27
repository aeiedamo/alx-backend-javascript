export default class HolbertonCourse {
  constructor(name, length, students) {
    this.__name = name;
    this.__length = length;
    this.__students = students;
  }

  get name() {
    return this.__name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.__name = value;
  }

  get length() {
    return this.__length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.__length = value;
  }

  get students() {
    return this.__students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    this.__students = value;
  }
}
