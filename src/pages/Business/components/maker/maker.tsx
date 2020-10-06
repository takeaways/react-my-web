import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './maker.module.css'
import { useHistory } from 'react-router-dom'
import Editor from '../editor/editor'
import Preview from '../preview/preview'
function Maker({ FileInput, authService }: any) {
  const [cards, setCards] = useState<any>({
    1: {
      id: 1,
      name: 'GI',
      company: 'Naver',
      theme: 'light',
      title: 'FE Engineer',
      email: 'jgi92@naver.com',
      message: 'go to it',
      fileName: 'Geonil',
      fileURL: '/images/my.png',
    },
    2: {
      id: 2,
      name: 'GI',
      company: 'Naver',
      theme: 'dark',
      title: 'FE Engineer',
      email: 'jgi92@naver.com',
      message: 'go to it',
      fileName: 'Geonil',
      fileURL: null,
    },
  })

  const history = useHistory()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      !user && history.push('/business')
    })
  }, [])

  const createOrUpdateCard = (card: any) => {
    setCards((cards: any) => {
      // console.log(cards)
      console.log(card)
      const updated = { ...cards }
      updated[card.id] = card

      return updated
    })
  }
  const deleteCard = (card: any) => {
    setCards((cards: any) => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
