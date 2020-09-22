import React from 'react'

export default class Habit extends React.Component<
  {
    habit: {
      id: string
      name: string
      count: number
    }
    handleIncrement: (hibit: any) => void
    handleDecrement: (hibit: any) => void
    handleDelete: (hibit: any) => void
  },
  { count: number }
> {
  render() {
    const {
      handleIncrement,
      handleDecrement,
      handleDelete,
      habit: { name, count },
    } = this.props

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          onClick={() => {
            handleIncrement(this.props.habit)
          }}
        >
          <i className="habit-button fas fa-plus-square habit-increase"></i>
        </button>
        <button
          onClick={() => {
            handleDecrement(this.props.habit)
          }}
        >
          <i className="habit-button fas fa-minus-square habit-decrease"></i>
        </button>
        <button
          onClick={() => {
            handleDelete(this.props.habit)
          }}
        >
          <i className="habit-button fas fa-trash habit-delete"></i>
        </button>
      </li>
    )
  }
}
