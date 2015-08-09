// Necessary Validators
import {ComponentValidator} from 'validators/component_validator';
import {DataValidator}      from 'validators/data_validator';
// Functions
import {isNull}             from 'validators/functions/types/is_null';
import {isArray}            from 'validators/functions/types/is_array';
import {isDictionary}       from 'validators/functions/types/is_dictionary';
import {isDefined}          from 'validators/functions/types/is_defined';
import {validateURL}        from 'validators/functions/validate_url';

export class PrimaryDataValidator extends ComponentValidator {
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

    if (isNull(this.object)) {

    } else {
      // Not Null
      if (isArray(this.object)) {

      } else if (isDictionary(this.object)) {
        var data_validator = new DataValidator(this.object, this.stack);
        this.errors = this.errors.concat(data_validator.validate().errors);
      } else {
        // ERROR
      }
    }


    return super.validate();
  }
}
