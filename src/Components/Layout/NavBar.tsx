import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

import routes from '../../Routes/routes'
import { filterRoutes } from '../../Utils'

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
`
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`
const Item = styled.li`
  width: 100%;
  text-align: center;
  transition: all 0.4s ease;

  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 3px;
    width: 1px;
    background-color: var(--color-red);
    transform: scaleX(0);
    transition: all 0.4s ease;
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(100);
  }

  &.active {
    color: var(--color-red);
    &::after {
      transform: scaleX(100);
    }
  }
`
const LinkItem = styled(Link)`
  display: block;
  width: 100%;
`

// nav
//   position: relative
//   padding-bottom: 12px
//   .line
//     height: 2px
//     position: absolute
//     bottom: 0
//     margin: 10px 0 0 0
//     background: #FF1847
//   ul
//     padding: 0
//     margin: 0
//     list-style: none
//     display: flex
//     li
//       margin: 0 40px 0 0
//       opacity: .4
//       transition: all 0.4s ease
//       &:hover
//         opacity: .7
//       &.active
//         opacity: 1
//       &:last-child
//         margin-right: 0
//       a
//         text-decoration: none
//         color: #fff
//         text-transform: uppercase
//         display: block
//         font-weight: 600
//         letter-spacing: .2em
//         font-size: 14px
