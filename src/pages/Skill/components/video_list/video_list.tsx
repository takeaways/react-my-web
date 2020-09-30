import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

function VideoList(props: any) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((item: any) => (
        <VideoItem key={item.id} video={item} />
      ))}
    </ul>
  )
}

export default VideoList
