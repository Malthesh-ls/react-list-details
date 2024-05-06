import { mapUniversityResponse } from '../../../src/utils/mappers';
import { mockRespUniversityData } from '../../test-helpers/mockData';

describe('Map University Response Tests', () => {
  it('should map and return the empty details', () => {
    const res = mapUniversityResponse([]);
    expect(res).toStrictEqual([]);
  });
  it('should map and return the details', () => {
    const res = mapUniversityResponse(mockRespUniversityData);
    expect(res).not.toBe([]);
  });
});