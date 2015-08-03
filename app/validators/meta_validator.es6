import {ComponentValidator} from 'validators/component_validator';
import {ValidationError}    from 'errors/validation_error';

export class MetaValidator extends ComponentValidator {
  validate() {
    if (typeof this.object !== 'object') {
      this.errors.push(ValidationError.new(['meta'], 'was not an Object'));
    }

    // Return
    return super.validate();
  }
}
