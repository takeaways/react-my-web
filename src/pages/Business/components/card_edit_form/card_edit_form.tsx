import React from 'react'
import styles from './card_edit_form.module.css'
import Button from '../button/button'

function CardEditForm({ FileInput, card, updateCard, deleteCard }: any) {
  const { name, company, title, email, message, theme, fileName } = card

  const nameRef = React.useRef<HTMLInputElement>(null)
  const companyRef = React.useRef<HTMLInputElement>(null)
  const themeRef = React.useRef<HTMLSelectElement>(null)
  const titleRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const messageRef = React.useRef<HTMLTextAreaElement>(null)

  const onFileChange = (file: any) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const handleChange = (e: any) => {
    if (e.currentTarget == null) {
      return
    }
    e.preventDefault()
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }
  const onSubmit = () => {
    deleteCard(card)
  }
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        value={name}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        value={company}
        onChange={handleChange}
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        value={theme}
        onChange={handleChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        value={title}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        value={email}
        onChange={handleChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        value={message}
        onChange={handleChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm
