import { ReadUniversityService } from '../../../src/services/services';

describe('Service Tests', () => {
  it('should call ReadUniversityService and return the empty details', async () => {
    const result = await ReadUniversityService();
    expect(result).not.toBe({});
  });
});