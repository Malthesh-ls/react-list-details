import renderer from 'react-test-renderer';
import Header from '../../../src/components/Header';

describe('Header Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<Header title='test app' />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});