// Necessary Validators
import {ComponentValidator} from 'validators/component_validator';
import {MetaValidator}      from 'validators/meta_validator';
// Functions
import {isDictionary}       from 'validators/functions/types/is_dictionary';
import {isDefined}          from 'validators/functions/types/is_defined';

export class JSONAPIValidator extends ComponentValidator {
  validate() {
    // Will validate object similar to:
    // {
    //  "version": "1.0"
    // }

    // The value of the jsonapi member MUST be an object
    if (!isDictionary(this.object)) {
      this.errors.push(new ValidationError(this.stack, 'MUST be an Object.'));
    } else {
      // The jsonapi object MAY contain a version member whose value is a string
      //  indicating the highest JSON API version supported.
      if (
        isDefined(this.object.version) &&
        !isString(this.object.version)
      ) {
        this.stack.push('version');
        this.errors.push(new ValidationError(this.stack, 'MUST be a String.'));
        this.stack.pop();
      }

      // MAY also contain a meta member, whose value is a meta object that
      //  contains non-standard meta-information.
      if (isDefined(this.oject.meta)) {
        this.stack.push('meta');
        var meta_validator = new MetaValidator(this.object.meta, this.stack);
        this.errors = this.errors.concat(meta_validator.validate().errors);
        this.stack.pop();
      }
    }

    // Return
    return super.validate();
  }
}
