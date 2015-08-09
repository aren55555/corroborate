// Functions
import {isObject} from 'validators/functions/types/is_object';
import {isArray}  from 'validators/functions/types/is_array';

export function isDictionary(object) {
  return isObject(object) && !isArray(object);
}
