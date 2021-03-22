import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './Item.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      disabled: true,
      selectedTasks: 0,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    let { selectedTasks, disabled } = this.state;
    if (!document.querySelector('.selected').innerText){
      return;
    }
    selectedTasks = selectedTasks - 1;
    if (selectedTasks === 0) { disabled = true  }
    const selectedTask = document.querySelector('.selected').innerText;
    document.querySelector('.selected').className = 'Item';
    const { listTodo } = this.state;
    const taskIndex = listTodo.indexOf(selectedTask);
    listTodo.splice(taskIndex, 1);
    this.setState({ listTodo, selectedTasks, disabled });
  }

  selectTodo({ target }) {
    let { selectedTasks } = this.state;
    target.className  = target.className === 'Item' ? 'Item selected' : 'Item';
    selectedTasks = target.className === 'Item' ? selectedTasks - 1 : selectedTasks + 1;
    if (target.className === 'Item selected') {
      this.setState({ disabled: false, });
    } else if (selectedTasks <= 0) {
      this.setState({
        disabled: true });
    }
    this.setState({ selectedTasks: selectedTasks });
  }

  render() {
    const { listTodo, disabled } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          removeTodo={ () => this.removeTodo() }
          selectTodo={ () => this.selectTodo() }
          disabled={ disabled }
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} onClick={ this.selectTodo } />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
