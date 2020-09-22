import React from 'react'
import { v4 as ui4 } from 'uuid'
import Form from './components/form'

import Habits from './components/habits'
import TopBar from './components/topBar'
import './index.css'
import { IHabit } from './types'

interface IState {
  habits: { id: string; name: string; count: number }[] | []
}

export default class Work extends React.Component<{}, IState> {
  state = {
    habits: [{ id: ui4(), name: 'React', count: 0 }],
  }

  handleIncrement = (habit: IHabit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits })
  }
  handleDecrement = (habit: IHabit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    if (habits[index].count > 0) {
      habits[index].count--
    }
    this.setState({ habits })
  }
  handleDelete = (habit: IHabit) => {
    const habits = this.state.habits.filter(h => h.id !== habit.id)
    this.setState({ habits })
  }
  handleSubmit = (text: string) => {
    this.setState({
      ...this.state,
      habits: [{ id: ui4(), name: text, count: 0 }, ...this.state.habits],
    })
  }

  render() {
    const { habits } = this.state
    return (
      <>
        <TopBar count={habits.reduce((a, c) => a + c.count, 0)} />
        <Form handleSubmit={this.handleSubmit} />
        <Habits
          habits={habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </>
    )
  }
}
