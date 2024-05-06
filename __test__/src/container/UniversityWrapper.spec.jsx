import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import UniversityWrapper from '../../../src/container/UniversityWrapper';

describe('UniversityWrapper Tests', () => {
  it('should match snapshot', () => {
    const snapshot = renderer
      .create(<UniversityWrapper />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('should display the Loading text', async () => {
    const { getByText } = render(
      <UniversityWrapper />
    );
    const text = await getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});
