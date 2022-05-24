import React, { PureComponent } from 'react';
import calculatorKeys from '../utils/CalculatorKeys';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      calculatorKeys.map((button) => (
        <div key={button.key.toString()}>
          {button.key}
        </div>
      ))

    );
  }
}

export default Calculator;
