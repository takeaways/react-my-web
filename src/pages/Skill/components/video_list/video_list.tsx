import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

function VideoList({ videos, onVideoClick, display }: any) {
  return (
    <ul className={styles.videos}>
      {videos.map((item: any) => (
        <VideoItem
          key={item.id}
          video={item}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  )
}

export default VideoList
