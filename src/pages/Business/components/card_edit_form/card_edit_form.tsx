import React from 'react'
import Button from '../button/button'
function CardEditForm({ card }: any) {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card

  const onSubmit = () => {}
  return (
    <form>
      <input type="text" name="name" value={name} />
      <input type="text" name="company" value={company} />
      <input type="text" name="title" value={title} />
      <input type="text" name="email" value={email} />
      <select name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <textarea name="message" value={message}></textarea>
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
