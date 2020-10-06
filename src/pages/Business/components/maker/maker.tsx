import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './maker.module.css'
import { useHistory, useLocation } from 'react-router-dom'
import Editor from '../editor/editor'
import Preview from '../preview/preview'
function Maker({ FileInput, authService, cardRepository }: any) {
  const location = useLocation<{ id: string }>()
  const [cards, setCards] = useState<any>({})
  const [userId, setUserId] = useState(location.state.id)

  const history = useHistory()
  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      if (user) {
        setUserId(user.uid)
      } else {
        history.push('/business')
      }
    })
  }, [])

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = cardRepository.syncCards(userId, (cards: any) => {
      setCards(cards)
    })

    return () => {
      stopSync()
    }
  }, [userId])

  const createOrUpdateCard = (card: any) => {
    setCards((cards: any) => {
      const updated = { ...cards }
      updated[card.id] = card
      return updated
    })
    cardRepository.saveCard(userId, card)
  }
  const deleteCard = (card: any) => {
    setCards((cards: any) => {
      const updated = { ...cards }
      delete updated[card.id]
      return updated
    })
    // cardRepository.removeCard(userId, card)
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
