import '../../auto_mock_off';
import {isArray} from '../../app/validators/functions/types/is_array';

describe('isArray', () => {
  it('returns true when Array', () => {
    expect(isArray([])).toBe(true);
  });
});
