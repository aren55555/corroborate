// Necessary Validators
import {ComponentValidator} from 'validators/component_validator';
// Functions
import {isArray}            from 'validators/functions/types/is_array';

export class IncludedValidator extends ComponentValidator {
  validate() {
    // Will validate object similar to:
    // [{
    //   "type": "people",
    //   "id": "9",
    //   "attributes": {
    //     "first-name": "Dan",
    //     "last-name": "Gebhardt",
    //     "twitter": "dgeb"
    //   },
    //   "links": {
    //     "self": "http://example.com/people/9"
    //   }
    // }, {
    //   "type": "comments",
    //   "id": "5",
    //   "attributes": {
    //     "body": "First!"
    //   },
    //   "links": {
    //     "self": "http://example.com/comments/5"
    //   }
    // }, {
    //   "type": "comments",
    //   "id": "12",
    //   "attributes": {
    //     "body": "I like XML better"
    //   },
    //   "links": {
    //     "self": "http://example.com/comments/12"
    //   }
    // }]

    if (isArray(this.object)) {

    } else {
      this.errors.push(new ValidationError(this.stack, 'MUST be an Array.'));
    }

    // Return
    return super.validate();
  }
}
