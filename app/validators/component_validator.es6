export class ComponentValidator {
  constructor(object, stack=[]) {
    this.object = object;
    this.errors = [];
    this.stack  = stack;
  }
  validate() {
    // To be implemeneted by inheriting classes
    return {
      is_valid: this.errors.length === 0,
      errors:   this.errors
    };
  }
}
