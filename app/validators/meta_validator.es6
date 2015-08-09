import {ComponentValidator} from 'validators/component_validator';
import {ValidationError}    from 'errors/validation_error';
// Functions
import {isDictionary}       from 'validators/functions/types/is_dictionary';

export class MetaValidator extends ComponentValidator {
  validate() {
    if (!isDictionary(this.object)) {
      this.errors.push(ValidationError.new(['meta'], 'was not an Object'));
    }

    // Return
    return super.validate();
  }
}
