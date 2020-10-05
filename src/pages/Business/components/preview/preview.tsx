import React from 'react'
import Card from '../card/card'
import styles from './preview.module.css'
export default function Preview({ cards }: any) {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card: any) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  )
}
