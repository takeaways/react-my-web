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
  return (
    <Container>
      <header className="sr-only">
        <h1>Glog Main Page.</h1>
      </header>
      <Suspense fallback={null}>
        <ul ref={container} className="card__list">
          {components.map((item, i) => (
            <li key={i} className="card__list-item">
              {item}
            </li>
          ))}
        </ul>
      </Suspense>
    </Container>
  )
})

const Container = styled.section`
  .card__list-item:first-child {
    height: 70vh;
  }
  .card__list-item {
    padding: 1rem;
  }
`
