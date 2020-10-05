import React from 'react'
import styles from './button.module.css'
function button({ name, onClick }: any) {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  )
}

export default button
