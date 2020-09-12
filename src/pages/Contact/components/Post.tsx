import React, { useState } from 'react'
import styled from 'styled-components'
import { dbService, storageService } from '../../../myFirebase'
import Heading from '../../../components/common/Heading'

export default function Post({ post, isOwner }: any) {
  const [editing, setEditing] = useState(false)
  const [newPost, setNewPost] = useState(post.text)

  //TODO: DELETE___________________________________
  function handleDelete() {
    const ok = window.confirm('삭제 하시겠습니까?')
    if (ok) {
      console.log(post)
      dbService.doc(`posts/${post.id}`).delete()
      if (post.attachmentUrl) {
        storageService.refFromURL(post.attachmentUrl).delete()
      }
    }
  }

  //TODO: EDIT___________________________________
  function handleEdit() {
    setEditing(prev => !prev)
    setNewPost(post.text)
  }

  //TODO: SUBMIT___________________________________
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dbService.doc(`posts/${post.id}`).update({
      text: newPost,
    })
    // setNewPost('')
    setEditing(prev => !prev)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className={'content'}>
          <header>
            <h2>
              <span>{post.email}</span>
              님의 게시글 입니다.
            </h2>
          </header>
          <p>
            {post.attachmentUrl && (
              <img
                src={post.attachmentUrl}
                style={{
                  width: '100%',
                  height: '200px',
                  margin: '0 auto',
                }}
              />
            )}
            {editing ? (
              <input
                className="edit-input"
                type="text"
                value={newPost}
                onChange={e => setNewPost(e.target.value)}
                required
              />
            ) : (
              <span>{post.text}</span>
            )}
          </p>
          <footer>
            <button type="button" onClick={handleEdit}>
              {editing ? '취소' : '수정'}
            </button>
            <button
              type={editing ? 'submit' : 'button'}
              onClick={e => {
                if (!editing) {
                  handleDelete()
                }
              }}
            >
              {editing ? '수정' : '삭제'}
            </button>
          </footer>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.article`
  .edit-input {
    width: 100%;
  }
  .content {
    margin: 0 auto;
    position: relative;
    min-width: 350px;
    border-radius: 15px;
    width: 80%;
    height: 350px;
    background-color: var(--color-yellow);
    display: grid;
    grid-template-rows: 2rem 1fr 2rem;

    h2 {
      padding-left: 1rem;
      height: 2rem;
      line-height: 2rem;
      background-color: var(--color-light-purple);
      font-size: 1rem;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    p {
      overflow: auto;
      span {
        padding-left: 1rem;
      }
    }

    footer {
      flex: 1;
      position: absolute;
      display: flex;
      justify-content: space-evenly;
      bottom: 0.5rem;
      width: 22vw;
      left: calc(100% - 22vw);

      button {
        display: block;
        outline: none;
        cursor: pointer;
        border: 0;

        height: 2rem;
        font-size: 0.8rem;
        width: 10vw;
        background-color: var(--color-purple);
        border-radius: 15px;
        transition: all 0.3s ease-in;
      }

      button:hover {
        color: var(--color-white);
      }
    }
  }
`
