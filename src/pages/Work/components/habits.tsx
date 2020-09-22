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

  handleIncrement = (habit: any) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits })
  }
  handleDecrement = (habit: any) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    if (habits[index].count > 0) {
      habits[index].count--
    }
    this.setState({ habits })
  }

  handleDelete = (habit: any) => {
    const habits = this.state.habits.filter(h => h.id !== habit.id)
    this.setState({ habits })
  }

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}
