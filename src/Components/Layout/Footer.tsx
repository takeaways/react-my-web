import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Container>
      <header className="sr-only">
        <h1>최하단 메뉴 입니다.</h1>
      </header>
      <p>© 2020 GeonilJang | About | Contact</p>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 0px -1px 12px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 12px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 12px -2px rgba(0, 0, 0, 0.75);
`
