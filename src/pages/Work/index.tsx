import React from 'react'
import styled from 'styled-components'
import './index.css'
export default function Work(props: any) {
  return <Container></Container>
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
