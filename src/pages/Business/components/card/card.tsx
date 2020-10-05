import React from 'react'
import styles from './card.module.css'
const DEFAULT_IMG = '/images/mylogo.png'
function Card({ card }: any) {
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

  const url = fileURL || DEFAULT_IMG

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
}

function getStyles(theme: string) {
  switch (theme) {
    case 'dark':
      return styles.dark
    case 'light':
      return styles.light
    case 'colorful':
      return styles.colorful
    default:
      return styles.colorful
    //   throw new Error('unknown ' + theme)
  }
}
export default Card
