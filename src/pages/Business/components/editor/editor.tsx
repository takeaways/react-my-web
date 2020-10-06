import React from 'react'
import CardAddForm from '../card_add_form/card_add_form'
import CardEditForm from '../card_edit_form/card_edit_form'
import styles from './editor.module.css'
export default function Editor({ cards, addCard }: any) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card: any) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onSubmit={addCard} />
    </section>
  )
}
