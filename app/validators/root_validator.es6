// Necessary Validators
import {ComponentValidator}   from 'validators/component_validator';
import {PrimaryDataValidator} from 'validators/primary_data_validator';
import {JSONAPIValidator}     from 'validators/jsonapi_validator';
import {LinksValidator}       from 'validators/links_validator';
import {IncludedValidator}    from 'validators/included_validator';
// Functions
import {isDefined}            from 'validators/functions/types/is_defined';
// Error Class
import {ValidationError}      from 'errors/validation_error';

export class RootValidator extends ComponentValidator {
  constructor(object) {
    super(object);
  }
  validate() {
    // Top Level http://jsonapi.org/format/#document-top-level

    // A document MUST contain at least one of the following top-level members:
    if (
      !isDefined(this.object.data) &&
      !isDefined(this.object.errors) &&
      !isDefined(this.object.meta)
    ) {
      this.errors.push(new ValidationError(this.stack, 'A document MUST contain at least one of the following top-level members: data, errors or meta.'));
    }

    if (isDefined(this.object.data)) {
      this.stack.push('data');
      var primary_data_validator = new PrimaryDataValidator(this.object.data, this.stack);
      this.errors = this.errors.concat(primary_data_validator.validate().errors);
      this.stack.pop();
    }

    // If a document does not contain a top-level data key, the included member
    //  MUST NOT be present either.
    if (
      !isDefined(this.object.data) &&
      isDefined(this.object.included)
    ) {
      this.stack.push('included');
      this.errors.push(new ValidationError(this.stack, 'The documenet did not contain a top-level data key, the included member MUST NOT be present either.'));
      this.stack.pop();
    }

    // A document MAY contain a jsonapi top-level member
    if (isDefined(this.object.jsonapi)) {
      // This document had a jsonapi top-level member; validate jsonapi
      this.stack.push('jsonapi');
      var jsonapi_validator = new JSONAPIValidator(this.object.jsonapi, this.stack);
      this.errors = this.errors.concat(jsonapi_validator.validate().errors);
      this.stack.pop();
    }
    // A document MAY contain a links top-level member
    if (isDefined(this.object.links)) {
      // This document had a links top-level member; validate links
      this.stack.push('links');
      var links_validator = new LinksValidator(this.object.links, this.stack);
      this.errors = this.errors.concat(links_validator.validate().errors);
      this.stack.pop();
    }
    // A document MAY contain a included top-level member
    if (isDefined(this.object.included)) {
      // This document had a included top-level member; validate included
      this.stack.push('included');
      var included_validator = new IncludedValidator(this.object.included, this.stack);
      this.errors = this.errors.concat(included_validator.validate().errors);
      this.stack.pop();
    }

    return super.validate();
  }
}
