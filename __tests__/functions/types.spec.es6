import '../../auto_mock_off';
import {isArray} from '../../app/validators/functions/types/is_array';
import {isDefined} from '../../app/validators/functions/types/is_defined';
import {isDictionary} from '../../app/validators/functions/types/is_dictionary';
import {isNull} from '../../app/validators/functions/types/is_null';
import {isObject} from '../../app/validators/functions/types/is_object';
import {isString} from '../../app/validators/functions/types/is_string';

describe('isArray', () => {
  it('returns true when Array', () => {
    expect(isArray([])).toBe(true);
  });
  it('returns false when not an Array', () => {
    expect(isArray({})).toBe(false);
  });
});

describe('isDefined', () => {
  it('returns true when an obj is passed', () => {
    expect(isDefined("")).toBe(true);
    expect(isDefined({})).toBe(true);
    expect(isDefined([])).toBe(true);
  });
  it('returns false when passed an undefined', () => {
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('isDictionary', () => {
  it('returns true when a dict is passed', () => {
    expect(isDictionary({})).toBe(true);
    expect(isDefined({
      "key": "value"
    })).toBe(true);
  });
  it('returns false when not a dict', () => {
    expect(isDictionary("Hello World")).toBe(false);
    expect(isDictionary(undefined)).toBe(false);
  });
});

describe('isNull', () => {
  it('returns true when an obj is passed', () => {
    expect(isNull(null)).toBe(true);
  });
  it('returns false when not a dict', () => {
    expect(isNull("Hello World")).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });
});

describe('isObject', () => {
  it('returns true when an obj is passed', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
  });
  it('returns false when not a dict', () => {
    expect(isObject("Hello World")).toBe(false);
    console.log(isObject(undefined));
    expect(isObject(undefined)).toBe(false);
  });
});

describe('isString', () => {
  it('returns true when a string is passed', () => {
    expect(isString("Hello World")).toBe(true);
  });
  it('returns false when not a string', () => {
    expect(isString({})).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
