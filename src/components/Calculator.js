import { useState } from 'react';
import buttons from '../logic/buttons';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setCalculation(calculate(calculation, e.target.textContent));
  };

  const { total, next } = calculation;
  const display = next || total || '0';

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-display"
        value={display}
        readOnly
      />
      <div className="calculator-buttons">
        {buttons.map((button) => (
          <Button
            key={button.name}
            className={button.className}
            onClick={handleClick}
            name={button.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
