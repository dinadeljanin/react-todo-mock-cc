import React from 'react'
import {Consumer} from './context'
import ToDoCard from './ToDoCard'

const CompletedContainer = () => {
    return (
      <div>
        <h1>Completed Todos</h1>
        <Consumer>
          {({todos}) => {
            const completedTasks = todos.filter(task => task.completed)
            return (
              completedTasks.map((task, index)  =>
              <ToDoCard
                tasks={completedTasks}
                key={task.id.toString()}
                index={index}
              />
              )
            )
          }}
        </Consumer>
      </div>
    )
}

export default CompletedContainer
