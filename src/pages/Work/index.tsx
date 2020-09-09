import React from 'react'
import styled from 'styled-components'
import './index.css'
export default function Work(props: any) {
  return (
    <Container>
      <div className="flex-container">
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  height: 100%;
  .flex-container {
    display: flex;
  }
`
