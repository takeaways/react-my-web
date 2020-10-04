import React from 'react'
import styles from './header.module.css'
export default function Header({ onLogout }: any) {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/myLogo.png" alt="log" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  )
}
