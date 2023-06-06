import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('test snapshop', () => {
  it('should render Calculator', () => {
    const renderCalculator = renderer.create(<Calculator />).toJSON();
    expect(renderCalculator).toMatchSnapshot();
  });
});

describe('test with testing library', () => {
  test('should work for addition', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveValue('16');
  });
});
