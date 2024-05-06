import { getDefaultSorting } from '../../../src/utils/utils';
import { mockUniversityData, mockColumns } from '../../test-helpers/mockData';

describe('Utils Tests', () => {
  it('should map and return the empty details', () => {
    const result = getDefaultSorting([], []);
    expect(result).toStrictEqual([]);
  });
  it('should map and return the details', () => {
    const res = getDefaultSorting(mockUniversityData, mockColumns);
    expect(res).not.toBe([]);
  });
});