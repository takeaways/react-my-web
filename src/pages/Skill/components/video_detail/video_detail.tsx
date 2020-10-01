import React from 'react'
import styles from './video_detail.module.css'
export default function VideoDetail({ video }: any) {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        // type="text/html"
        width="100%"
        title="youtube player"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  )
}
