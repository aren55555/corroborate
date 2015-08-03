import {ComponentValidator} from 'validators/component_validator';
import {LinkValidator}      from 'validators/link_validator';

export class LinksValidator extends ComponentValidator {
  validate() {
    // Will validate object similar to:
    // {
    //   "self": "http://example.com/posts",
    //   "next": "http://example.com/posts?page[offset]=2",
    //   "last": "http://example.com/posts?page[offset]=10",
    //   "aren": true
    // }

    for (var key in this.object) {
      this.stack.push(key);
      var link_validator = new LinkValidator(this.object[key], this.stack);
      this.errors = this.errors.concat(link_validator.validate().errors);
      this.stack.pop(key);
    }

    // Return
    return super.validate();
  }
}
