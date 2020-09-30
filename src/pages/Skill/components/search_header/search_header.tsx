import React from 'react'
import styles from './search_header.module.css'
export default function SearchHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>VideoBe</h1>
      </div>
      <input className={styles.input} type="search" placeholder="Search...." />
      <button className={styles.button} type="submit">
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  )
}
