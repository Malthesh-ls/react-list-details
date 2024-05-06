import renderer from 'react-test-renderer';
import PageNotFound from '../../../src/container/PageNotFound';

describe('PageNotFound Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<PageNotFound />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});