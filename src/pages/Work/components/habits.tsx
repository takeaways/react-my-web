import React from 'react'
import { v4 as ui4 } from 'uuid'
import Habit from './habit'

export default class Habits extends React.Component {
  state = {
    habits: [
      { id: ui4(), name: 'React', count: 0 },
      { id: ui4(), name: 'Running', count: 0 },
      { id: ui4(), name: 'Coding', count: 0 },
    ],
  }
  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit {...habit} />
        ))}
      </ul>
    )
  }
}
