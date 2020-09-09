import React from 'react'
import styled from 'styled-components'
import './index.css'
export default function Work(props: any) {
  return (
    <Container>
      <header>
        <div>1</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
        </div>
        <div>3</div>
      </header>
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

  header {
    display: flex;
    background-color: skyblue;

    div:nth-child(1) {
      flex: 0 0 auto;
      width: 150px;
      background-color: tomato;
    }
    div:nth-child(2) {
      flex: 1 1 auto;
    }
    div:nth-child(3) {
      flex: 0 0 auto;
      width: 150px;
      background-color: tomato;
    }
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .flex-item {
    flex: 1 auto;
  }

  .flex-item:nth-child(1) {
    align-self: center;
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
