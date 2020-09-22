import React from 'react'

interface IFormProps {
  handleSubmit: (text: string) => void
}

export default React.memo(function FormHabit({ handleSubmit }: IFormProps) {
  const inputRef = React.createRef<HTMLInputElement>()
  const onHandle = (event: React.FormEvent) => {
    event.preventDefault()
    handleSubmit(inputRef.current!.value)
    inputRef.current!.value = ''
  }

  return (
    <form onSubmit={onHandle} className="habit-from">
      <input ref={inputRef} type="text" />
      <button type="submit">추가</button>
    </form>
  )
})
