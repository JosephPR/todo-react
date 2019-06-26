import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer/TodoContainer'
import TodoForm from  './components/TodoForm/TodoForm'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, title: 'Brush Teeth', content: 'Please brush!!'},
        {id: 2, title: 'comb Teeth', content: 'Please comb!!'}
      ]
    }
  }

  addTodo = (todoObj) => {
    const newItem = {...todoObj, id: Date.now()}
    const newTodos = [...this.state.todos, newItem]
    this.setState({
      todos: newTodos
    })
  }

  render () {
    return (
      <div>
        <h1> Hello Peeps!! App</h1>
      {/*always name functions the same as your prop*/}
        <TodoForm addTodo={this.addTodo} />
        <TodoContainer todos={this.state.todos} />
      </div>
    )
  }
}



export default App;
