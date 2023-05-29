function Calculator() {
  return (
    <div className="calculator">
      <input type="text" className="calculator-display" readOnly />
      <div className="calculator-buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">
          ÷
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange">
          x
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange">
          -
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange">
          +
        </button>
        <button type="button" className="btn0">
          0
        </button>
        <button type="button">.</button>
        <button type="button" className="orange">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
