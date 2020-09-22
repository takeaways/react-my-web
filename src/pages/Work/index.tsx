import React from 'react'
import './index.css'
export default class Work extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
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
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
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
