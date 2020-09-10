import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import Heading from '../common/Heading'
import routes from '../../routes/routes'
import { filterRoutes } from '../../utils'

const Links = filterRoutes(routes)

export default function NavBar() {
  const {
    location: { pathname },
  } = useHistory()
  const [path, setPath] = useState(pathname)
  return (
    <Container
      onClick={(
        e: React.MouseEvent<HTMLElement, MouseEvent> & {
          target: { dataset: { link: string } }
        },
      ) => {
        setPath(e.target.dataset.link)
      }}
    >
      <Heading heading="네비게이션 메뉴." />

      <List>
        {Links.map(link => (
          <Item
            key={link.path}
            className={`${link.path === path ? 'active' : null}`}
          >
            <LinkItem to={link.path} data-link={link.path}>
              {link.label}
            </LinkItem>
          </Item>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.nav`
  -webkit-box-shadow: inset 0px 0px 4px 1px rgba(212, 205, 246, 1);
  -moz-box-shadow: inset 0px 0px 4px 1px rgba(212, 205, 246, 1);
  box-shadow: inset 0px 0px 4px 1px rgba(212, 205, 246, 1);

  form {
    input {
    }
    button {
    }
  }
`
const List = styled.ul`
  /*  */
  background-color: var(--color-light-purple);
  /*  */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`
const Item = styled.li`
  /*  */
  flex-grow: 1;
  /*  */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0px;
    background-color: var(--color-yellow);
    transition: all 1s ease;
  }

  &:hover {
    /*  */
    background-color: var(--color-red);
    flex-grow: 2;

    /*  */
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: var(--color-red);
    &::after {
      width: 100%;
      background-color: var(--color-red);
    }
  }
`
const LinkItem = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  padding: 1em;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`
