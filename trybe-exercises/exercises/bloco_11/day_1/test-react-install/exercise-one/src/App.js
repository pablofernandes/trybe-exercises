import logo from './logo.svg';
import './App.css';
import React from 'react';

const commitments = ['estudar', 'trabalhar', 'ser marido', 'treinar jiu-jitsu'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return commitments.map(commitment => task(commitment));
}

export default App;
