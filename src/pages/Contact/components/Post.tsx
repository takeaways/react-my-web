import React, { useState } from 'react'
import { dbService, storageService } from '../../../myFirebase'

export default function Post({ post, isOwner }: any) {
  console.log(post)

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
  }

  //TODO: SUBMIT___________________________________
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dbService.doc(`posts/${post.id}`).update({
      text: newPost,
    })
    setNewPost('')
    setEditing(prev => !prev)
  }

  return (
    <div
      style={{
        backgroundColor: 'skyblue',
        marginBottom: '4px',
      }}
    >
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            required
          />
          <button type="button" onClick={handleEdit}>
            취소
          </button>
          <button type="submit">수정</button>
        </form>
      ) : (
        <>
          {post.attachmentUrl && (
            <img src={post.attachmentUrl} style={{ width: '100px' }} />
          )}
          <h2>{post.email}</h2>
          <h4>{post.text}</h4>
          {isOwner && (
            <>
              <button onClick={handleDelete}>삭제</button>
              <button onClick={handleEdit}>수정</button>
            </>
          )}
        </>
      )}
    </div>
  )
}
