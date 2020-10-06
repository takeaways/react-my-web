import React, { useCallback, useEffect, useState } from 'react'
import { authService, dbService } from '../../../myFirebase'
import {
  useUserDispatch,
  LOG_OUT,
  useUserState,
  LOG_IN,
} from '../contexts/UserContext'
import { filterUser } from '../../../utils'
import Post from '../components/Post'

function Profile() {
  const { user } = useUserState()
  const dispatch = useUserDispatch()
  const [myPosts, setMyPosts] = useState<any>([])

  const onLogOutClick = () => {
    if (dispatch) dispatch(LOG_OUT())
    authService.signOut()
  }

  const getMyPosts = useCallback(async () => {
    dbService
      .collection('posts')
      .where('creatorId', '==', user.uid)
      .onSnapshot(snapshot => {
        const postList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setMyPosts(postList)
      })
  }, [user.uid])

  useEffect(() => {
    getMyPosts()
  }, [user.uid, getMyPosts])

  useEffect(() => {
    if (!user.uid) {
      authService.onAuthStateChanged(user => {
        if (dispatch) {
          dispatch(LOG_IN(filterUser({ user })))
        }
      })
    }
  }, [user.uid, dispatch])

  return (
    <div>
      {user.email} Profile
      <button onClick={onLogOutClick}>log out</button>
      <div>
        <ul>
          {myPosts.map((item: any) =>
            item.creatorId ? (
              <Post
                key={item.id}
                post={item}
                isOwner={item.creatorId === user.uid}
              />
            ) : null,
          )}
        </ul>
      </div>
    </div>
  )
}

export default Profile
