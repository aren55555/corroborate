// Necessary Validators
import {ComponentValidator} from 'validators/component_validator';
// Functions
import {isString}           from 'validators/functions/types/is_string';
import {isDictionary}       from 'validators/functions/types/is_dictionary';
import {isDefined}          from 'validators/functions/types/is_defined';
import {validateURL}        from 'validators/functions/validate_url';

export class DataValidator extends ComponentValidator {
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


    return super.validate();
  }
}
