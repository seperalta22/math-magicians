import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from '../App';

describe('Home Page', () => {
  it('renders without crashing', () => {
    const home = renderer.create(<App />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('renders welcome message', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/welcome to our page/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders two paragraphs of lorem ipsum', () => {
    const { getAllByText } = render(<App />);
    const paragraphs = getAllByText(/lorem ipsum/i);
    expect(paragraphs.length).toBe(2);
  });

  it('applies app class to the container div', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('app');
  });
});
