import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

function TopBar() {
  const menuList = useRef<HTMLUListElement>(null);
  return (
    <Navbar>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo src={'images/mylogo.png'} alt="logo image" />
        <Title>Geonil Jang(FE)</Title>
      </Link>

      <LinkList className={'navbar__links'} ref={menuList}>
        {LINKS.map((item) => (
          <LinkItem
            key={item.title}
            onClick={() => {
              menuList.current!.classList.remove('active');
            }}
          >
            <Link to={item.to}>{item.title}</Link>
          </LinkItem>
        ))}
      </LinkList>

      <span
        className="navbar__toggleBtn"
        onClick={() => {
          menuList.current!.classList.toggle('active');
        }}
      >
        <MdMenu />
      </span>
    </Navbar>
  );
}

const LINKS = [
  { to: '/', title: 'Main' },
  { to: '/movie', title: 'Movie' },
  { to: '/skill', title: 'Skills' },
  { to: '/work', title: 'My Work' },
  { to: '/contact', title: 'Contact' },
];

const Navbar = styled.nav`
  position: fixed;
  z-index: 20;
  font-size: var(--font-regular);
  width: 100%;
  height: 68px;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-white);
  background-color: var(--color-dark-pink);

  & > .navbar__toggleBtn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 6px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    & > .navbar__toggleBtn {
      display: block;
      position: absolute;
      left: calc(100% - 30px);
    }

    & > .navbar__links {
      visibility: hidden;
    }
    & > .navbar__links.active {
      animation-duration: 3s;
      animation-name: slidein;
      animation-fill-mode: forwards;
    }
  }

  @keyframes slidein {
    from {
      visibility: hidden;
      opacity: 0;
    }

    to {
      visibility: visible;
      opacity: 1;
    }
  }
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
  transition: opacity 1s linear, transform 1s linear, visibility 0s linear;
  @media screen and (max-width: 768px) {
    width: 100vw;

    position: absolute;
    z-index: 0;
    top: 68px;
    left: 0;

    background-color: var(--color-dark-pink);
    align-items: center;
    flex-direction: column;
    text-align: center;

    & > li {
      width: 100%;
    }
    & a {
      display: block;
    }
  }
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
