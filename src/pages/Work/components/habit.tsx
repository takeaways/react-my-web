import React from 'react'

export default class Habit extends React.Component<
  { name: string; count: number },
  { count: number }
> {
  state = {
    count: this.props.count,
  }

  handleIncreament = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  handleDecreament = (event: React.MouseEvent<HTMLButtonElement>) => {
    const count = this.state.count - 1

    this.setState({
      count: count < 0 ? 0 : count,
    })
  }

  render() {
    const { count } = this.state
    const { name } = this.props

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button onClick={this.handleIncreament}>
          <i className="habit-button fas fa-plus-square habit-increase"></i>
        </button>
        <button onClick={this.handleDecreament}>
          <i className="habit-button fas fa-minus-square habit-decrease"></i>
        </button>
        <button>
          <i className="habit-button fas fa-trash habit-delete"></i>
        </button>
      </li>
    )
  }
}
