import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btnColor: 'white',
      clickNumberOne: 0,
      clickNumberTwo: 0,
      ClickNumberThree: 0,
    }
    this.clickButton1 = this.clickButton1.bind(this);
    this.clickButton2 = this.clickButton2.bind(this);
    this.clickButton3 = this.clickButton3.bind(this);
  }

  clickButton1() {
    this.setState((previousState, _props) => ({
      clickNumberOne: previousState.clickNumberOne + 1,
    }));
    console.log(`Clicou no botao 1`);
  }
  
  clickButton2() {
    this.setState((previousState, _props) => ({
      clickNumberTwo: previousState.clickNumberTwo + 1,
    }));
    console.log(`Clicou no botao 2`);
  }
  
  clickButton3(evt) {
    this.setState((previousState, _props) => ({
      ClickNumberThree: previousState.ClickNumberThree + 1,
    }));
    console.log(`Clicou no botao 3`);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.clickButton1}>{this.state.clickNumberOne} clicks</button>
        <button onClick={this.clickButton2}>{this.state.clickNumberTwo} clicks</button>
        <button onClick={this.clickButton3}>{this.state.ClickNumberThree} clicks</button>
      </div>
    );
  }
}

export default App;
