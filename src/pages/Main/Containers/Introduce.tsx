import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/common/Heading'
export default function Introduce() {
  const [show, setShow] = React.useState(false)
  return (
    <Container>
      <Heading heading="Introduce." />
      <Content>
        <H2>
          <div
            className="circle"
            onClick={() => {
              setShow(true)
            }}
          ></div>
          <div className="text"> Hello, I'm one of the JS developers</div>
        </H2>
      </Content>

      {show && (
        <div
          className="modal"
          onClick={() => {
            setShow(false)
          }}
        >
          <p className="dialog">만나서 반가워요</p>
        </div>
      )}
    </Container>
  )
}

const Container = styled.article`
  border-radius: 15px;
  background-image: url('images/home_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;

  .modal {
    position: fixed;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog {
    background-color: white;
    width: 50vw;
    padding: 2em;
    border-radius: 1em;
  }
`

const Content = styled.div`
  height: 100%;
  position: relative;
`

const H2 = styled.h2`
  position: absolute;
  bottom: 50%;
  width: 100%;

  @keyframes ani {
    from {
      transform: scale(0) translateY(200%);
    }
    to {
      transform: scale(1) translateY(-50%);
    }
  }

  .circle {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin: auto;
    width: calc(200px);
    height: calc(200px);
    border-radius: 10vw;

    background: url('images/mylogo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ani 3s alternate infinite;
  }
  .text {
    font-size: calc(1rem + 2vw);
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
