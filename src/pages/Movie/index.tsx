import React from 'react'
import MovieRouter from './Components/MovieRouter'
import MovieNavBar from './Components/MovieNavBar'
import styled from 'styled-components'
import Heading from '../../components/common/Heading'

import service from './service'
export default function Movie() {
  console.log(service.get('tv/popular'))
  return (
    <Container>
      <Heading heading="영화 페이지" />
      <MovieNavBar />
      <MovieRouter />
    </Container>
  )
}

const Container = styled.article`
  background-color: black;
  height: 100%;
  color: white;
`
