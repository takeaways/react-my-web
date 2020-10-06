import myFirebase from 'myFirebase'
class CardRepository {
  saveCard(userId: any, card: any) {
    myFirebase.database().ref(`${userId}/cards/${card.id}`).set(card)
  }
  //   removeCard(userId: any, card: any) {}
  syncCards(userId: any, onUpdate: Function) {
    const ref = myFirebase.database().ref(`${userId}/cards`)
    ref.on('value', snapshot => {
      const value = snapshot.val()
      value && onUpdate(value)
    })
    return () => ref.off()
  }
}

export default CardRepository
