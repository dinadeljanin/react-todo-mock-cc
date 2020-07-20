import React, { Component } from 'react';
import {Consumer} from './context'

export default class SearchBarComponent extends Component {
  searchInput = React.createRef()
  render() {
    return (
      <Consumer>
      {({todos, searchWord, actions}) => {
        const filterThis = () => {
          actions.searchTask(this.searchInput.current.value)
        }
        return (
          <div className="ui input fluid">
            <input
              onChange={filterThis}
              autoComplete="off"
              ref={this.searchInput}
              placeholder="Search Term"
              type="text" name="searchTerm"/>
          </div>
        )
      }}
      </Consumer>
    );
  }
}
