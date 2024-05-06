import renderer from 'react-test-renderer';
import SearchBar from '../../../src/components/SearchBar';
import { mockUniversityData } from '../../test-helpers/mockData';

describe('SearchBar Tests', () => {
  const props = {
    data: mockUniversityData,
    setData: jest.fn(),
  }
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<SearchBar {...props} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});