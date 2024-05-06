import renderer from 'react-test-renderer';
import TableHead from '../../../../src/components/table/TableHead';
import { mockUniversityData, mockColumns } from '../../../test-helpers/mockData';

describe('TableHead Tests', () => {
  const props = {
    handleSorting: jest.fn(),
    columns: mockColumns,
  }
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<TableHead {...props} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});