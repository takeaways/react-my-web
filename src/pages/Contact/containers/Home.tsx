import React, { useEffect, useState } from 'react'
import { authService, dbService } from '../../../myFirebase'

import { Link, useHistory } from 'react-router-dom'
import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

import ContactNav from '../components/ContactNav'
import { filterUser } from '../../../utils'
function Home() {
  const { user } = useUserState()
  const dispatch = useUserDispatch()
  const [text, setText] = useState('')
  const [items, setItems] = useState<any>([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!text.trim()) {
      setText('')
      return
    }
    dbService.collection('posts').add({
      text,
      createdAt: Date.now(),
      creatorId: user.uid,
      email: user.email,
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  useEffect(() => {
    dbService.collection('posts').onSnapshot(snapshot => {
      const postList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setItems(postList)
    })
  }, [])

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (dispatch) dispatch(LOG_IN(filterUser({ user })))
    })
  }, [])

  return (
    <div>
      Home Home
      <ContactNav />
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="what's on yout mind"
        />
        <input type="submit" value="전송" />
      </form>
      <div>
        {items.map((item: any) => (
          <div
            key={item.id}
            style={{
              height: '50px',
              backgroundColor: 'skyblue',
              marginBottom: '4px',
            }}
          >
            <h2>{item.email}</h2>
            <h4>{item.text}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
