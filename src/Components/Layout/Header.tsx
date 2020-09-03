import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Conainer>
      <Link to="/">
        <h1>Glog</h1>
      </Link>
    </Conainer>
  )
}

const Conainer = styled.header`
  background-color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 12px -2px rgba(0, 0, 0, 0.75);
  & h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    color: var(--color-light-purple);
  }
`
