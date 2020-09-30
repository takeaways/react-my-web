import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Heading from '../../components/common/Heading'
import VideoList from './components/video_list/video_list'
export default function Skill() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error))
  }, [])

  return (
    <Container>
      <Heading heading="YouTube" />
      <VideoList videos={videos} />
    </Container>
  )
}

const Container = styled.article``
