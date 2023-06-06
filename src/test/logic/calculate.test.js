import operate from '../../logic/operate';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('operate', () => {
	test('should perform addition correctly', () => {
		expect(operate('2', '3', '+')).toBe('5');
	});

	test('should perform subtraction correctly', () => {
		expect(operate('5', '3', '-')).toBe('2');
	});

	test('should perform multiplication correctly', () => {
		expect(operate('2', '4', 'x')).toBe('8');
	});

	test('should perform division correctly', () => {
		expect(operate('10', '2', '÷')).toBe('5');
	});

	test('should return an error message when dividing by 0', () => {
		expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
	});

	test('should perform modulo calculation correctly', () => {
		expect(operate('7', '4', '%')).toBe('3');
	});

	test('should return an error message when finding modulo by 0', () => {
		expect(operate('5', '0', '%')).toBe(
			"Can't find modulo as can't divide by 0."
		);
	});

	test('should throw an error for unknown operations', () => {
		expect(() => operate('2', '3', '#')).toThrow("Unknown operation '#'");
	});
});
