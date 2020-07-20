import React, { Component } from 'react';
import {Consumer} from './context'

export default class NewToDoForm extends Component {

  taskInput = React.createRef()

  render() {
    return (
      <Consumer>
        {({todos, actions}) => {
           const handleSubmit = (e) => {
            e.preventDefault()
            actions.addTask(this.taskInput.current.value)
            console.log(e.currentTarget)
            e.currentTarget.reset()
          }
          return (
            <div>
              <form className="ui form" onSubmit={handleSubmit}>
                  <h1>New ToDo</h1>
                  <div className="field">
                      <label>Title</label>
                      <input type="text" name="title" placeholder="Title" ref={this.taskInput}/>
                  </div>
                  <button className="ui button" type="submit">Submit</button>
              </form>
            </div>
          )
        }}
      </Consumer>

    );
  }
}
