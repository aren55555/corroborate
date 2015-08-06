import {ComponentValidator} from 'validators/component_validator';
import {MetaValidator}      from 'validators/meta_validator';
import {ValidationError}    from 'errors/validation_error';

import {validateURL}        from 'validators/functions/validate_url';

export class LinkValidator extends ComponentValidator {
  validate() {
    switch (typeof this.object) {
      case 'string':
        // Validate URL
        if (!validateURL(this.object)) {
          // TODO: this should not be an 'error' as it does not violate the specific
          //        should probably be a 'warning'
          this.errors.push(new ValidationError(this.stack, 'did not appear to be a valid URL.'));
        }
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
