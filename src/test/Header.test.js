import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header', () => {
  test('renders header with navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });

  test('clicking on navigation links changes URL to expected path', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText('Home');
    const calculatorLink = screen.getByText('Calculator');
    const quoteLink = screen.getByText('Quote');

    act(() => {
      userEvent.click(homeLink);
    });
    expect(container.innerHTML).toContain('href="/"');

    act(() => {
      userEvent.click(calculatorLink);
    });
    expect(container.innerHTML).toContain('href="/calculator"');

    act(() => {
      userEvent.click(quoteLink);
    });
    expect(container.innerHTML).toContain('href="/quote"');
  });
});
