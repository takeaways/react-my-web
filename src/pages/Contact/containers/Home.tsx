import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { dbService, storageService } from '../../../myFirebase'

import { useUserDispatch, useUserState, TEST } from '../contexts/UserContext'

import styled from 'styled-components'
import Post from '../components/Post'
import Heading from '../../../components/common/Heading'

export default function Home() {
  const { user, todo } = useUserState()
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

  function test() {
    console.log('s')
    if (dispatch) dispatch(TEST('Hello world'))
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

  return (
    <Container>
      <Heading heading="게시글 리스트." />
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item-a">
          <p>
            <input type="file" accept="image/*" onChange={handleFile} />
          </p>
          <p>
            <input
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="what's on yout mind"
            />
            <input type="submit" value="전송" />
          </p>
        </div>
        <div className="form-item-b">
          2
          {attachment && (
            <>
              <img src={attachment} width="50px" style={{ width: '50px' }} />
              <button
                onClick={() => {
                  setAttachment('')
                }}
              >
                cancel upload
              </button>
            </>
          )}
        </div>
      </form>

      <ul className="list">
        {items.map((item: any) => (
          <li key={item.id} className="list-item">
            <Post post={item} isOwner={item.creatorId === user.uid} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    width: 100%;
    display: flex;

    .form-item-a {
    }
  }

  .list {
    width: 100%;
    height: 100%;

    display: grid;
    grid-row-gap: 1rem;
    @media (min-width: 709px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 710px) and (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1201px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
