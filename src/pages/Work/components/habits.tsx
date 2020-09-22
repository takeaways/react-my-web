import React from 'react'
import { IHabit } from '../types'
import Habit from './habit'

interface IHabits {
  habits: { id: string; name: string; count: number }[]
  handleIncrement: (habit: IHabit) => void
  handleDecrement: (habit: IHabit) => void
  handleDelete: (habit: IHabit) => void
}

export default class Habits extends React.PureComponent<IHabits> {
  render() {
    const {
      habits,
      handleIncrement,
      handleDecrement,
      handleDelete,
    } = this.props

    return (
      <ul className="list">
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    )
  }
}
