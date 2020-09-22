import React from 'react'

interface IFormProps {
  handleSubmit: (text: string) => void
}

export default class Form extends React.Component<IFormProps> {
  state = {
    inputValue: '',
  }

  onHandle = (event: React.FormEvent) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.inputValue)
    this.setState({
      inputValue: '',
    })
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <form onSubmit={this.onHandle} className="habit-from">
        <input type="text" onChange={this.onInputChange} value={inputValue} />
        <button type="submit">추가</button>
      </form>
    )
  }
}
