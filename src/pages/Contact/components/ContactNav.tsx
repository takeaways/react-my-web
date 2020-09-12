import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import Heading from '../../../components/common/Heading'

export default React.memo(function ContactNav() {
  return (
    <Container>
      <Heading heading="연락하기 메뉴" />
      <ul className="menu">
        <li className="menu-item">
          <Link to="/contact">Main</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact/profile">Profile</Link>
        </li>
      </ul>
    </Container>
  )
})

const Container = styled.nav`
  .menu {
    padding: 0;
    height: 2rem;
    background-color: var(--color-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }

  .menu-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    transition: flex 1s ease-in-out;
  }
  .menu-item:hover {
    flex: 1.2;
    background-color: var(--color-red);
    color: white;
  }
  .menu-item > a {
    font-weight: bold;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
`
