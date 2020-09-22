import React from 'react'

interface TopBarProps {
  count: number
}
export default class TopBar extends React.Component<TopBarProps> {
  render() {
    const { count } = this.props
    return (
      <nav className="nav">
        <header>
          My Habits <span className="nav-count">{count}</span>
        </header>
      </nav>
    )
  }
}
