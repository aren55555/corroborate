import {RootValidator} from 'validators/root_validator';
import {ComponentValidator} from 'validators/component_validator';

export class JSONApiVaidator {
  constructor(json_api_object) {
    if (typeof json_api_object === 'string') {
      // Attempt to Parse the JSON string
      this.json_api_object = JSON.parse(json_api_object);
    } else {
      this.json_api_object = json_api_object;
    }
  }
  validate() {
    // Validates againstJSONApi.org
    var rv = new RootValidator(this.json_api_object);
    return rv.validate();
  }
}
