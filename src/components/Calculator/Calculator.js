import React, { PureComponent } from 'react';
import calculatorKeys from '../../utils/CalculatorKeys';
import './Calculator.css';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      calculatorKeys.map((button) => (
        <button type="button" key={button.key.toString()} className={button.className}>
          {button.key}
        </button>
      ))
    );
  }
}

export default Calculator;
