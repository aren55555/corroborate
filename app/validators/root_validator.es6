import {ComponentValidator} from 'validators/component_validator';
import {LinksValidator}     from 'validators/links_validator';

export class RootValidator extends ComponentValidator {
  constructor(object) {
    super(object);
  }
  validate() {
    if (this.object.links !== undefined) {
      // Validate Links
      this.stack.push('links');
      var links_validator = new LinksValidator(this.object.links, this.stack);
      this.errors = this.errors.concat(links_validator.validate().errors);
      this.stack.pop();
    }

    return super.validate();
  }
}
