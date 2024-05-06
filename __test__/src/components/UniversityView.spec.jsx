import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import UniversityView from '../../../src/components/UniversityView';

describe('UniversityView Tests', () => {
  const props = {
    data: [],
    setData: jest.fn(),
    error: false,
  }
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<UniversityView {...props} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should display the error when error is true', async () => {
    props.error = true;
    const { getByText } = render(
      <UniversityView {...props} />
    );
    const errMsg = await getByText("Whoops! Something went wrong, please try after sometime");
    expect(errMsg).toBeInTheDocument();
  });
});
