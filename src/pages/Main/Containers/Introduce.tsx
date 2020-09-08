import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/common/Heading'
export default function Introduce() {
  return (
    <Container>
      <Heading heading="Introduce." />
      <Content>
        <H2>
          <div className="circle"></div>
          <div className="text"> Hello, I'm one of the JS developers</div>
        </H2>
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

const Content = styled.div`
  color: var(--color-white);
  display: relative;
`

const H2 = styled.h2`
  position: absolute;
  width: 80%;
  border-radius: 10px;
  font-size: 1.2em;
  bottom: 20%;
  left: calc(10%);

  @keyframes ani {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .circle {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin: auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: var(--color-purple);
    animation: ani 3s alternate infinite;
  }
  .text {
    mix-blend-mode: difference;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    margin: auto;

    font-weight: bold;
    text-align: center;
    color: var(--color-purple);
  }
`
