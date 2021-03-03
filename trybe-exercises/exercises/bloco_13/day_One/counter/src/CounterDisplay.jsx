import React, { Component } from 'react';

class CounterDisplay extends Component {
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.value >= 13 && nextProps.value <= 15) return false;
      return true;
  }

  render(){
    return(
     <div>{ this.props.value }</div> 
    );
  }
}
export default CounterDisplay;