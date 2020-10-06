import React, { useEffect, useState, useRef } from 'react'
import { v4 as uuid4 } from 'uuid'
import { dbService, storageService } from '../../../myFirebase'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { FcAddImage } from 'react-icons/fc'

import { useUserState } from '../contexts/UserContext'

import styled from 'styled-components'
import Post from '../components/Post'
import Heading from '../../../components/common/Heading'

export default function Home() {
  const { user } = useUserState()
  const fileInputRef = useRef<HTMLInputElement>(null)
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
      setItems(postList.sort((a: any, b: any) => b.createdAt - a.createdAt))
    })
  }, [])

  return (
    <Container>
      <Heading heading="게시글 리스트." />
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item form-item-a">
          <p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
            />
          </p>
          <p>
            <input
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="오늘의 한 줄을 남겨보세요."
            />
            <input type="submit" value="전송" />
          </p>
        </div>
        <div className="form-item form-item-b">
          {attachment ? (
            <p
              style={{
                height: '100%',
                backgroundImage: `url(${attachment})`,
                backgroundSize: 'cover',
              }}
            >
              <button
                onClick={() => {
                  setAttachment('')
                }}
              >
                cancel upload
              </button>
            </p>
          ) : (
            <span
              onClick={e => {
                fileInputRef.current?.click()
              }}
            >
              <FcAddImage />
            </span>
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
      <div className="controls">
        <span
          onClick={() => {
            setItems((prev: any) => {
              return [
                ...prev.sort((a: any, b: any) => a.createdAt - b.createdAt),
              ]
            })
          }}
        >
          <AiFillCaretUp />
        </span>
        <span
          onClick={() => {
            setItems((prev: any) => {
              return [
                ...prev.sort((a: any, b: any) => b.createdAt - a.createdAt),
              ]
            })
          }}
        >
          <AiFillCaretDown />
        </span>
      </div>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .form {
    width: 100%;
    display: flex;

    height: 10rem;

    button {
      text-transform: uppercase;
      outline: none;
      border: none;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--color-red);
      color: var(--color-light-purple);
    }
    button:hover {
      color: var(--color-white);
    }

    input[type='file'] {
      display: none;
    }

    .form-item {
      height: 10rem;
    }
    .form-item-a {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      input[type='text'],
      input[type='submit'] {
        margin-top: 4px;
        width: 100%;
        outline: none;
        border: 0.5px solid var(--color-yellow);
      }
      input[type='submit'] {
        cursor: pointer;
        background-color: var(--color-red);
        border: 1px solid var(--color-yellow);
      }
      input[type='submit']:hover {
        color: var(--color-white);
      }
      input[type='text'] {
        padding-left: 1rem;
      }
    }

    .form-item-b {
      flex: 1;
      z-index: -1;
      position: relative;

      span {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10vw;
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 709px) {
      flex-direction: column-reverse;
      p {
        width: 100%;
        padding: 0 1rem;
      }
    }
  }

  .list {
    padding: 1rem 0;
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

  .controls {
    position: fixed;
    height: 2.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    top: 25rem;
    left: 10px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      background-color: var(--color-red);
      color: var(--color-white);
      cursor: pointer;
    }

    span:hover {
      opacity: 0.3;
    }
    span:active {
      opacity: 0.8;
    }
  }
`
