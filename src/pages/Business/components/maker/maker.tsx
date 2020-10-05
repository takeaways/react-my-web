import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './maker.module.css'
import { useHistory } from 'react-router-dom'
import Editor from '../editor/editor'
import Preview from '../preview/preview'
function Maker({ authService }: any) {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'GI',
      company: 'Naver',
      theme: 'light',
      title: 'FE Engineer',
      email: 'jgi92@naver.com',
      message: 'go to it',
      fileName: 'Geonil',
      fileURL: '/images/my.png',
    },
    {
      id: '2',
      name: 'GI',
      company: 'Naver',
      theme: 'dark',
      title: 'FE Engineer',
      email: 'jgi92@naver.com',
      message: 'go to it',
      fileName: 'Geonil',
      fileURL: null,
    },
    {
      id: '3',
      name: 'GI',
      company: 'Naver',
      theme: 'colorful',
      title: 'FE Engineer',
      email: 'jgi92@naver.com',
      message: 'go to it',
      fileName: 'Geonil',
      fileURL: null,
    },
  ])

  const history = useHistory()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      !user && history.push('/business')
    })
  }, [])
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
