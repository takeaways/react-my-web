import React from 'react'
import CardEditForm from '../card_edit_form/card_edit_form'
import styles from './editor.module.css'
export default function Editor({ cards }: any) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card: any) => (
        <CardEditForm card={card} />
      ))}
    </section>
  )
}
