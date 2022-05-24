import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const calculatorKeys = [
      { key: 0, className: 'grey-bg' },
      { key: 'AC', className: 'white-bg' },
      { key: '+/-', className: 'white-bg' },
      { key: '%', className: 'white-bg' },
      { key: '+', className: 'orange-bg' },
      { key: '7', className: 'white-bg' },
      { key: '8', className: 'white-bg' },
      { key: '9', className: 'white-bg' },
      { key: 'x', className: 'orange-bg' },
      { key: '4', className: 'white-bg' },
      { key: '5', className: 'white-bg' },
      { key: '6', className: 'white-bg' },
      { key: '-', className: 'orange-bg' },
      { key: '1', className: 'white-bg' },
      { key: '2', className: 'white-bg' },
      { key: '3', className: 'white-bg' },
      { key: '+', className: 'orange-bg' },
      { key: '0', className: 'white-bg' },
      { key: '.', className: 'white-bg span-2' },
      { key: '=', className: 'orange-bg' },
    ];

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
