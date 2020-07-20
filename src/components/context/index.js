import React, {Component} from 'react'

const ToDoContext = React.createContext()

export const Consumer = ToDoContext.Consumer

export class Provider extends Component {
  state = {
    todos: []
  }



  componentDidMount() {
    fetch("http://localhost:3000/todos")
    .then(r => r.json())
    .then(todos => {
      this.setState({todos})
    })
  }

  fetchHelper = () => {
    fetch("http://localhost:3000/todos")
    .then(r => r.json())
    .then(todos => {
      this.setState({todos})
    })
  }

  handleAddTask = (task) => {
    const taskId = (this.state.todos.length + 1).toString()
    const obj = {
      "id": taskId,
      "title": task,
      "completed": false
    }
    console.log(obj)
    fetch('http://localhost:3000/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(r => r.json())
    .then(task => {
      this.setState(prevState => {
        return {
          todos: [
            ...prevState.todos,
            task
          ]
        }
      }, console.log(this.state.todos))
    }).then(this.fetchHelper)
  }


  handleChange = (id, bool) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({completed: !bool})
    }).then(r => r.json())
    // you have to click twice?
    .then(this.fetchHelper)
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.fetchHelper)
  }

  render() {
    return (
      <ToDoContext.Provider value={{
        todos: this.state.todos,
        actions: {
          changeTask: this.handleChange,
          deleteTask: this.handleDelete,
          addTask: this.handleAddTask
        }
      }}>
        {this.props.children}
      </ToDoContext.Provider>
    )
  }
}
