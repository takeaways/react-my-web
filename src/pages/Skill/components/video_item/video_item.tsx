import React from 'react'

export default function VideoItem({ video }: any) {
  console.log(video)
  return <div>{video.snippet.title}</div>
}
