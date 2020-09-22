import React from 'react'
import Habits from './components/habits'
import './index.css'
export default class Work extends React.Component<{}, { count: number }> {
  render() {
    return <Habits />
  }
}
