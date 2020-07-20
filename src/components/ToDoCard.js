import React from 'react'
import {Consumer} from './context'

const ToDoCard = ({tasks, index}) => {
    return (
    <Consumer>
      {({actions}) =>
          <div className="ui card">
              <div className="content">
                <div className="header">{tasks[index].title}</div>
                <button
                  onClick={() => actions.changeTask(tasks[index].id, tasks[index].completed)}
                  className={tasks[index].completed ? "ui button orange" : "ui button blue"}>
                  {tasks[index].completed ? "Incomplete" : "Change"}
                </button>
                <button
                  onClick={() => actions.deleteTask(tasks[index].id)}
                  className="ui button red">Delete</button>
              </div>

          </div>
      }

    </Consumer>

    )
}

export default ToDoCard
