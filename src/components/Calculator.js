import { useState } from 'react';
import buttons from '../logic/buttons';
import calculate from '../logic/calculate';

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
          <button
            type="button"
            key={button.name}
            className={`${button.className} ${button.color}`}
            onClick={handleClick}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
