import React from 'react'

interface TopBarProps {
  count: number
}
export default class TopBar extends React.PureComponent<TopBarProps> {
  render() {
    return (
      <nav className="nav">
        <header>
          My Habits <span className="nav-count">{this.props.count}</span>
        </header>
      </nav>
    )
  }
}
