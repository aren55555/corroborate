import {isObject} from './is_object';
import {isArray}  from './is_array';

export function isDictionary(object) {
  return isObject(object) && !isArray(object);
}
