import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes component', () => {
  test('Renders correctly', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  test('Renders loading text', () => {
    const { getByText } = render(<Quotes />);
    const loading = getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
});
