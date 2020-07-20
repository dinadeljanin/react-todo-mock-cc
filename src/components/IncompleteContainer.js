import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import {Consumer} from './context'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {
  render() {
    return (
      <div>
        <h1>Incomplete Todos</h1>
        <Consumer>
          {({todos, searchWord}) => {
            let incompleteTasks = todos.filter(task => !task.completed)
            incompleteTasks = incompleteTasks.filter(task => task.title.toLowerCase().includes(searchWord))
            return (
              <div>
                <SearchBarComponent />
                {incompleteTasks.map((task, index) =>
                  <ToDoCard
                    tasks={incompleteTasks}
                    key={task.id.toString()}
                    index={index}
                  />
                )}
              </div>
            )
          }}
        </Consumer>

        </div>
    )
  }
}
