export default class ErrorRepository {
  constructor(errorKey, errorValue) {
    this.error = new Map();
    this.key = errorKey;
    this.value = errorValue;
    this.error.set(this, { errorKey, errorValue });
  }

  translate(code) {
    if (!this.error.has(code)) {
      throw new Error('Unknown error!');
    }
    return this.error.get(code);
  }
}
