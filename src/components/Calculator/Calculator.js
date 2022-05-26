import React, { useState } from 'react';
import calculatorKeys from '../../utils/CalculatorKeys';
import calculate from '../../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const initialState = {
    total: 0,
    next: null,
    operation: null,
  };
  const [state, setState] = useState(initialState);
  const { total, next, operation } = state;

  const handleOperation = (e) => {
    const { name } = e.target;
    const UPDATED_STATE = calculate(state, name);
    setState(UPDATED_STATE);
  };
  return (
    <div className="calculator-container">
      <div className="gray-bg">
        {total}
        {operation}
        {next}
      </div>
      {calculatorKeys.map((button) => (
        <button
          type="button"
          name={button.key}
          key={button.key.toString()}
          className={button.className}
          onClick={handleOperation}
        >
          {button.key}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
