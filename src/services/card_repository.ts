import { realService } from 'myFirebase'
class CardRepository {
  saveCard(userId: any, card: any) {
    realService.ref(`${userId}/cards/${card.id}`).set(card)
  }
  removeCard(userId: any, card: any) {
    realService.ref(`${userId}/cards/${card.id}`).remove()
  }
  syncCards(userId: any, onUpdate: Function) {
    const ref = realService.ref(`${userId}/cards`)
    ref.on('value', snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }
}

export default CardRepository
