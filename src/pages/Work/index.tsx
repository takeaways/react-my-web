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
  .flex-container {
    display: flex;
    flex-direction: column;
    height: 300px;
  }
  @media (min-width: 600px) {
    .flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      /* flex-wrap: wrap; */
      /* flex-flow: row wrap; */
      /* flex-direction: column; */
      /* flex-wrap: nowrap; */
    }
    /* .flex-item {
      flex: 1;
    } */
  }
`
