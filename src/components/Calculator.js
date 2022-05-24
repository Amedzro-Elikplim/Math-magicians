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
      calculatorKeys.map((item) => (
        <div key={item.toString()}>
          {item}
        </div>
      ))

    );
  }
}

export default Calculator;
