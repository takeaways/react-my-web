import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TopBar() {
  return (
    <Navbar>
      <Logo>로고 입니다.</Logo>
      <LinkList>
        {LINKS.map((item) => (
          <LinkItem key={item.title}>
            <Link to={item.to}>{item.title}</Link>
          </LinkItem>
        ))}
      </LinkList>
    </Navbar>
  );
}

const LINKS = [
  { to: '/home', title: 'Home' },
  { to: '/', title: 'About' },
  { to: '/', title: 'Skills' },
  { to: '/', title: 'My Work' },
  { to: '/', title: 'Contact' },
];

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-dark-pink);
  color: var(--color-white);
  align-items: center;
  padding: 16px;
  transition: all var(--animation-duration) ease-in-out;
  z-index: 1;
  font-size: var(--font-regular);
`;

const Logo = styled.div``;
const LinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
const LinkItem = styled.li`
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: var(--size-border-radius);
  border: 1px solid transparent;
`;

export default React.memo(TopBar);
