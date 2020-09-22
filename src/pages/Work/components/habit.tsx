import React from 'react'
import { IHabit } from '../types'

interface IHabitProps {
  habit: { id: string; name: string; count: number }
  handleIncrement: (hibit: IHabit) => void
  handleDecrement: (hibit: IHabit) => void
  handleDelete: (hibit: IHabit) => void
}
export default class Habit extends React.Component<IHabitProps> {
  onIncrement = () => {
    this.props.handleIncrement(this.props.habit)
  }
  onDecremnet = () => {
    this.props.handleDecrement(this.props.habit)
  }
  onDelete = () => {
    this.props.handleDelete(this.props.habit)
  }

  render() {
    const {
      habit: { name, count },
    } = this.props

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button onClick={this.onIncrement}>
          <i className="habit-button fas fa-plus-square habit-increase"></i>
        </button>
        <button onClick={this.onDecremnet}>
          <i className="habit-button fas fa-minus-square habit-decrease"></i>
        </button>
        <button onClick={this.onDelete}>
          <i className="habit-button fas fa-trash habit-delete"></i>
        </button>
      </li>
    )
  }
}
