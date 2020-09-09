import React from 'react'
import styled from 'styled-components'
import Heading from '../../../components/common/Heading'
export default function Introduce() {
  const [show, setShow] = React.useState(true)
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
  height: 100%;
  background: url('images/home_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

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
    cursor: pointer;
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
