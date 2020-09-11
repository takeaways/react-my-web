import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { authService, dbService, storageService } from '../../../myFirebase'

import { useUserDispatch, LOG_IN, useUserState } from '../contexts/UserContext'

import ContactNav from '../components/ContactNav'
import Post from '../components/Post'
import { filterUser } from '../../../utils'

function Home() {
  const { user } = useUserState()
  const dispatch = useUserDispatch()

  const [text, setText] = useState('')
  const [items, setItems] = useState<any>([])
  const [attachment, setAttachment] = useState('')

  //TODO: SUBMIT_____________________________________________
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) {
      setText('')
      return
    }

    let attachmentUrl = ''
    if (attachment !== '') {
      const fileRef = storageService.ref().child(`${user.uid}/${uuid4()}`)
      const response = await fileRef.putString(attachment, 'data_url')
      attachmentUrl = await response.ref.getDownloadURL()
    }
    const nPost = {
      text,
      createdAt: Date.now(),
      creatorId: user.uid,
      email: user.email,
      attachmentUrl,
    }
    await dbService.collection('posts').add(nPost)

    setText('')
    setAttachment('')
  }

  //TODO: INPUT CHANGE_____________________________________________
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  //TODO: INPUT FILE_______________________________________________
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files!
    const file = files[0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent: any) => {
      setAttachment(finishedEvent.currentTarget.result)
    }
    reader.readAsDataURL(file)
  }
  //TODO: USE EFFECTS_______________________________________________
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
        <input type="file" accept="image/*" onChange={handleFile} />
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="what's on yout mind"
        />
        {attachment && (
          <div>
            <img src={attachment} width="50px" style={{ width: '50px' }} />
            <button
              onClick={() => {
                setAttachment('')
              }}
            >
              cancel upload
            </button>
          </div>
        )}
        <input type="submit" value="전송" />
      </form>
      <div>
        {items.map((item: any) => (
          <Post
            key={item.id}
            post={item}
            isOwner={item.creatorId === user.uid}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
