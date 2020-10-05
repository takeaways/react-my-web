import React, { useEffect } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './login.module.css'
import { useHistory } from 'react-router-dom'
export default function Login({ authService }: any) {
  const history = useHistory()
  const goToMaker = (uid: string) => {
    history.push({
      pathname: '/business/maker',
      state: { id: uid },
    })
  }
  const onLogin = (e: any) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((res: any) => {
        goToMaker(res.user.uid)
      })
  }
  useEffect(() => {
    authService //
      .onAuthChange((user: any) => {
        user && goToMaker(user.uid)
      })
  }, [])
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
