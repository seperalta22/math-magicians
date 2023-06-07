import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';

describe('Button', () => {
  test('renders button with given name', () => {
    render(<Button name="Test" onClick={() => {}} />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const onClick = jest.fn();
    render(<Button name="Test" onClick={onClick} />);

    userEvent.click(screen.getByText('Test'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
