import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  routes: { to: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ routes }) => {
  return (
    <Container>
      <Menu>
        {routes.map((link) => (
          <Item key={link.label}>
            <Link to={`${link.to}`}>{link.label}</Link>
          </Item>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.header`
  height: 48px;
  -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.09);
`;
const Menu = styled.ul`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  & > a {
    display: block;
    text-align: center;
    line-height: 22px;
    width: 120px;
    height: 38px;
    margin: 0 4px;
    padding: 8px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(199, 199, 199, 0.66);
    -moz-box-shadow: 0px 0px 0px 2px rgba(199, 199, 199, 0.66);
    box-shadow: 0px 0px 0px 2px rgba(199, 199, 199, 0.66);
  }
  & > a:hover {
    color: var(--color-white);
    background-color: rgba(199, 199, 199, 0.5);
  }
`;

export default React.memo(Header);
