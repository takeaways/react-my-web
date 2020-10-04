import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './login.module.css'
export default function Login({ authService }: any) {
  const onLogin = (e: any) => {
    authService //
      .login(e.currentTarget.textContent)
      .then(console.log)
  }
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}
