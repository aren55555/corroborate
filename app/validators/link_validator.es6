// Necessary Validators
import {ComponentValidator} from 'validators/component_validator';
import {MetaValidator}      from 'validators/meta_validator';
import {ValidationError}    from 'errors/validation_error';
// Functions
import {isString}           from 'validators/functions/types/is_string';
import {isDictionary}       from 'validators/functions/types/is_dictionary';
import {isDefined}          from 'validators/functions/types/is_defined';
import {validateURL}        from 'validators/functions/validate_url';

export class LinkValidator extends ComponentValidator {
  validate() {
    // Will validate object similar to:
    // "http://example.com/posts"
    // or:
    // {
    //     "href": "http://example.com/articles/1/comments",
    //     "meta": {
    //         "count": 10
    //     }
    // }

    if (isString(this.object)) {
      // Validate URL
      if (!validateURL(this.object)) {
        // TODO: this should not be an 'error' as it does not violate the specific
        //        should probably be a 'warning'
        this.errors.push(new ValidationError(this.stack, 'did not appear to be a valid URL.'));
      }
    } else if (isDictionary(this.object)) {
      // Validate contents
      if (isDefined(this.object.href)) {
        // TODO: Validate URL
      }
      if (isDefined(this.object.meta)) {
        // Validate Meta Object
        this.stack.push('meta');
        var meta_validator = new MetaValidator(this.object.meta, this.stack);
        this.errors = this.errors.concat(meta_validator.validate().errors);
        this.stack.pop();
      }
    } else {
      this.errors.push(new ValidationError(this.stack, 'was not a String or Object.'));
    }

    return super.validate();
  }
}
