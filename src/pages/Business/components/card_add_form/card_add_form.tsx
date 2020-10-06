import React from 'react'
import styles from './card_add_form.module.css'
import Button from '../button/button'
import { v4 as uuidv4 } from 'uuid'
import ImageFileInput from '../image_file_input/image_file_input'

function CardAddForm({ onSubmit }: any) {
  const formRef = React.useRef<HTMLFormElement>(null)
  const textRef = React.useRef<HTMLInputElement>(null)
  const companyRef = React.useRef<HTMLInputElement>(null)
  const titleRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const messageRef = React.useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const card = {
      id: uuidv4(),
      text: textRef.current!.value || '',
      company: companyRef.current!.value || '',
      title: titleRef.current!.value || '',
      email: emailRef.current!.value || '',
      message: messageRef.current!.value || '',
    }
    formRef.current!.reset()
    onSubmit(card)
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        ref={textRef}
        name="name"
        placeholder={'name'}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        placeholder={'company'}
      />
      <select className={styles.select} name="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        placeholder={'title'}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        placeholder={'email'}
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        placeholder={'message'}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={'Add'} onClick={onSubmit} />
    </form>
  )
}

export default CardAddForm
