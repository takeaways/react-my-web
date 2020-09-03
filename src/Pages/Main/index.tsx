import React, { useState, useRef, Suspense, lazy, useEffect } from 'react'
import styled from 'styled-components'

const Introduce = lazy(() => import('./Containers/Introduce'))
const About = lazy(() => import('./Containers/About'))
const Skills = lazy(() => import('./Containers/Skills'))
const MyWork = lazy(() => import('./Containers/MyWork'))
const Testimonial = lazy(() => import('./Containers/Testimonial'))
const Contact = lazy(() => import('./Containers/Contact'))

const components = [
  <Introduce />,
  <About />,
  <Skills />,
  <MyWork />,
  <Testimonial />,
  <Contact />,
]

const len = components.length

export default React.memo(function Main() {
  const [current, setCurrent] = useState(0)

  const container = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (current > len - 1) {
      setCurrent(0)
    }
    if (current < 0) {
      setCurrent(len - 1)
    }
    if (container.current) {
      const position = `-${current * window.innerWidth}px`
      container.current.style.transform = `translateX(${position})`
    }
  }, [current])

  return (
    <Container>
      <header className="sr-only">
        <h1>Main 페이지 입니다.</h1>
      </header>
      <Suspense fallback={null}>
        <div className="container">
          <ul
            ref={container}
            id="slider"
            className="slider-container simple-list"
          >
            {components.map((item, i) => (
              <li key={i} className="slide" style={{ left: `${i * 100}%` }}>
                {item}
              </li>
            ))}
          </ul>
          <button
            id="prev"
            onClick={() => {
              setCurrent(prev => prev - 1)
            }}
          >
            &lt;
          </button>
          <button
            id="next"
            onClick={() => {
              setCurrent(prev => prev + 1)
            }}
          >
            &gt;
          </button>
        </div>
      </Suspense>
    </Container>
  )
})

const Container = styled.section`
  height: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .slider-container {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in;
  }
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
  }
  #prev,
  #next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999999;
    display: inline-block;
    height: 2em;
    width: 2em;
    text-align: center;
    font-size: 1rem;
    border-radius: 50%;
    transition: all 0.3s ease-in;
    opacity: 0.2;
  }
  #prev:hover,
  #next:hover {
    opacity: 1;
  }
  #prev {
    left: 5%;
  }
  #next {
    left: calc(95% - 32px);
  }
  #prev.disable,
  #next.disable {
    display: none;
  }
`
