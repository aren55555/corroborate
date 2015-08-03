export class ValidationError {
  constructor(stack, message, link=null) {
    this.stack   = stack.slice(0); // need a copy of the array (by value rather than by ref)
    this.message = message;
    this.link    = link;
  }
  to_s() {
    return this.stack.join('/') + ': ' + this.message;
  }
}
