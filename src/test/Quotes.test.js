import React from 'react';
import { render, waitFor } from '@testing-library/react';
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

  test('Renders error message if there is an error fetching quote', async () => {
    // Mock the fetch function to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Error fetching quote')));

    const { getByText } = render(<Quotes />);
    await waitFor(() => expect(getByText(/Error fetching quote/)).toBeInTheDocument());
  });

  test('Renders fetched quote when available', async () => {
    // Mock the fetch function to return a fake quote
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          quote: 'Test Quote',
          author: 'Test Author',
        },
      ]),
    }));

    const { getByText } = render(<Quotes />);
    await waitFor(() => expect(getByText(/Test Quote/)).toBeInTheDocument());
    expect(getByText(/Test Author/)).toBeInTheDocument();
  });
});
