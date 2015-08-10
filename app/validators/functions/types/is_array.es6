// Functions
import {isObject} from './is_object';

export function isArray(object) {
  return isObject(object) && (object instanceof Array);
}
