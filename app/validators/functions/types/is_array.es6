// Functions
import {isObject} from 'validators/functions/types/is_object';

export function isArray(object) {
  return isObject(object) && (object instanceof Array);
}
