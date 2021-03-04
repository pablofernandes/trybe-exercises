import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    console.log('Constructor');
  }

  componentDidMount() {
      console.log('componentDidMount');
      this.setState({ counter: 10 });
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate', this.state, nextState);
      return true;
  }

  componentDidUpdate(previousProps, previousState){
    console.log('componentDidUpdate', this.state, previousState);
  }

  render(){
    console.log('Render');
    return(
      <div>
        <p>Counter</p>
        <button
          onClick={ () => this.setState((state) => ({ counter: state.counter + 1 })) }
        >Soma + 1</button>
        <CounterDisplay value={ this.state.counter } />
      </div>

    );
  }
}

export default App;
