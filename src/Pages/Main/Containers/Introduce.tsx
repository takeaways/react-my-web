import React from 'react'
import styled from 'styled-components'
import Heading from '../../../Components/common/Heading'
export default function Introduce() {
  return (
    <Container>
      <Heading heading="소개 첫 번째 페이지." />
      <Content>
        <H2>Hello, I'm one of the JS developers in Kr.</H2>
      </Content>
    </Container>
  )
}

const Container = styled.article`
  height: 100%;
  background: url('images/my.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Content = styled.p`
  color: var(--color-white);
  display: relative;
`

const H2 = styled.h2`
  position: absolute;
  width: 80%;
  height: 1.4em;
  line-height: 1.4em;
  background: var(--color-purple);

  border-radius: 10px;
  font-size: 1.2em;
  bottom: 10%;
  left: calc(10%);
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 90%;
    background-color: var(--color-red);
    top: 1.1em;
    left: 5%;
  }
`
