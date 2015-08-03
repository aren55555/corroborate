import {ComponentValidator} from 'validators/component_validator';
import {MetaValidator}      from 'validators/meta_validator';
import {ValidationError}    from 'errors/validation_error';

export class LinkValidator extends ComponentValidator {
  validate() {
    switch (typeof this.object) {
      case 'string':
        // Validate URL
        break;
      case 'object':
        // Validate contents
        if (this.object.href !== undefined) {
          // Validate URL
        }
        if (this.object.meta !== undefined) {
          // Validate Meta Object
          this.stack.push('meta');
          var meta_validator = new MetaValidator(this.object.meta, this.stack);
          this.errors = this.errors.concat(meta_validator.validate().errors);
          this.stack.pop();
        }
        break;
      default:
        this.errors.push(new ValidationError(this.stack, 'was not a String or Object.'));
    }
    return super.validate();
  }
}
