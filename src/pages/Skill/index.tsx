import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { YoutubeServiceContext } from '../../App'
import Heading from '../../components/common/Heading'
import SearchHeader from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
export default function Skill() {
  const youtube = useContext(YoutubeServiceContext)
  const [videos, setVideos] = useState([])
  const search = (query: any) => {
    youtube
      ?.search(query) //
      .then((videos: any) => setVideos(videos))
  }
  useEffect(() => {
    youtube
      ?.mostPopular() //
      .then((videos: any) => setVideos(videos))
  }, [])

  return (
    <Container>
      <Heading heading="YouTube" />
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </Container>
  )
}

const Container = styled.article`
  padding: 20px;
`
