import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { YoutubeServiceContext } from '../../App'
import Heading from '../../components/common/Heading'

import SearchHeader from './components/search_header/search_header'
import VideoDetail from './components/video_detail/video_detail'
import VideoList from './components/video_list/video_list'
export default function Skill() {
  const youtube = useContext(YoutubeServiceContext)
  const [selectedVideo, setSelectedVideo] = useState()
  const [videos, setVideos] = useState([])

  const selectVideo = (video: any) => {
    setSelectedVideo(video)
  }

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
      <section className="content">
        {selectedVideo && (
          <div className="detail">
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className="list">
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </Container>
  )
}

const Container = styled.article`
  padding: 20px;

  .content {
    display: flex;
  }

  .detail {
    flex: 1 1 70%;
  }

  .list {
    flex: 1 1 30%;
  }
`
