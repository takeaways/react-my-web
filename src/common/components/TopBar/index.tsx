import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TopBar() {
  return (
    <Navbar>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <Logo src={'images/mylogo.png'} alt='logo image' />
        <Title>Geonil Jang(FE)</Title>
      </Link>
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

const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin: 0;
`;

const Title = styled.span`
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
`;
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
  &:hover {
    border: 1px solid var(--color-white);
    background-color: var(--color-pink);
  }
`;

export default React.memo(TopBar);
