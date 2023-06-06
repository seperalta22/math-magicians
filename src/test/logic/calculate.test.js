import calculate from '../../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

describe('calculate', () => {
  test('should clear calculator data when AC button is pressed', () => {
    const result = calculate(
      {
        total: '10',
        next: '5',
        operation: '+',
      },
      'AC',
    );

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should update next number when a number button is pressed', () => {
    const result = calculate(
      {
        total: '10',
        next: '5',
        operation: '+',
      },
      '7',
    );

    expect(result).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });
});
