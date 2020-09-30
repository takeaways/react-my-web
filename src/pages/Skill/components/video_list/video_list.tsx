import React from 'react'
import VideoItem from '../video_item/video_item'

function VideoList(props: any) {
  return (
    <ul>
      {props.videos.map((item: any) => (
        <VideoItem key={item.id} video={item} />
      ))}
    </ul>
  )
}

export default VideoList
