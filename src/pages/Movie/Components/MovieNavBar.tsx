import React from 'react'
import Heading from '../../../components/common/Heading'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

export default withRouter(function MovieNavBar(props: any) {
  return (
    <Container>
      <Heading heading="영화메뉴" />
      <ul>
        <Item current={props.location.pathname === '/movie/tv'}>
          <Link to="/movie/tv">TV</Link>
        </Item>
        <Item current={props.location.pathname === '/movie'}>
          <Link to="/movie"> Home </Link>
        </Item>
        <Item current={props.location.pathname === '/movie/search'}>
          <Link to="/movie/search"> Search </Link>
        </Item>
      </ul>
    </Container>
  )
})

const Container = styled.nav`
  ul {
    padding: 0;
    height: 3rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 255, 0.3);
  }
`
const Item = styled.li<{ current: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  transition: flex 1s ease-in-out;
  border-bottom: 5px solid
    ${props => (props.current ? 'var(--color-blue)' : 'transparent')};

  &:hover {
    flex: 1.2;
    background-color: var(--color-blue);
    color: white;
  }
  & > a {
    font-weight: bold;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
`
