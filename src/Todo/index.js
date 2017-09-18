import React, { Component } from 'react';
import styles from './index.css';
import classNames from 'classnames'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.getTodos() }
  }

  getTodos() {
     // fetch saved todos from localStorage
     const todosJSON = localStorage.getItem('todos')
     let todos = []
     if (todosJSON) {
       // parse JSON
       try {
         todos = JSON.parse(todosJSON)
       } finally {}
     }
     return todos
  }

  saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  componentDidUpdate(prevProps, prevState) {
    this.saveTodos(this.state.todos)
  }

  render() {
    return (
      <div className="Todo-App">
        <input onKeyPress={this.handleInputKeyPress} placeholder="新增 Todo" className="Add-Todo" />
        <div className="TodoList">
          {this.state.todos.map((todo, index) => (
            <div key={index} className={classNames({Todo: true, done: todo.done})}>
              <input type="checkbox" checked={todo.done} 
                    onChange={(e) => this.toggleTodoDone(index)}/>
              {todo.name}
              <span onClick={(e) => this.deleteTodo(index)}>x</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      this.addTodo(e.target.value)
      e.target.value = ''
    }
  }

  addTodo(todo) {
    this.setState((prev) => {
      prev.todos.push({
        name: todo,
        done: false
      })
      return {
        todos: prev.todos
      }
    })
  }

  deleteTodo(index) {
    this.setState((prev) => {
      prev.todos.splice(index, 1)
      return {
        todos: prev.todos
      }
    })
  }

  toggleTodoDone = (index) => {
    this.setState((prev) => {
      prev.todos[index].done = !prev.todos[index].done
      return {
        todos: prev.todos
      }
    })
  }
}


export default Todo;
