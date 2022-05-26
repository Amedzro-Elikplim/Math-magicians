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
    return (
      calculatorKeys.map((button) => (
        <button type="button" name={button.key} key={button.key.toString()} className={button.className} onClick={this.handleOperation}>
          {button.key}
        </button>
      ))
    );
  }
}

export default Calculator;
