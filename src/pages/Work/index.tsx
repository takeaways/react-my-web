import React from 'react'
import styled from 'styled-components'
import './index.css'
export default function Work(props: any) {
  return (
    <Container>
      <div className="flex-container">
        <div className="flex-item">1111111</div>
        <div className="flex-item">22222</div>
        <div className="flex-item">3</div>
        <div className="flex-item">444444</div>
        <div className="flex-item">22222</div>
        <div className="flex-item">3</div>
        <div className="flex-item">444444</div>
        <div className="flex-item">22222</div>
        <div className="flex-item">3</div>
        <div className="flex-item">444444</div>
        <div className="flex-item">22222</div>
        <div className="flex-item">3</div>
        <div className="flex-item">444444</div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  background-color: red;
  height: 100%;
  .flex-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .flex-item {
    flex: 1 auto;
  }

  @media (min-width: 600px) {
    .flex-container {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .flex-item {
      flex-basis: 50%;
    }
  }

  @media (min-width: 800px) {
    .flex-item {
      flex-basis: 33%;
    }
  }
`
