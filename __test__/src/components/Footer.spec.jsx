import renderer from 'react-test-renderer';
import Footer from '../../../src/components/Footer';

describe('Footer Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<Footer title='test app' />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});