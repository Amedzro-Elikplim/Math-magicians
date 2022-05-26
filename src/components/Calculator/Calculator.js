import React, { PureComponent } from 'react';
import calculatorKeys from '../../utils/CalculatorKeys';
import calculate from '../../logic/calculate';
import './Calculator.css';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleOperation = (e) => {
    const state = calculate(this.state, e.target.name);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="gray-bg">
          {operation}
          {next}
          {total}
        </div>
        {calculatorKeys.map((button) => (
          <button
            type="button"
            name={button.key}
            key={button.key.toString()}
            className={button.className}
            onClick={this.handleOperation}
          >
            {button.key}
          </button>
        ))}
      </div>
    );
  }
}

export default Calculator;
