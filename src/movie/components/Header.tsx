import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Menu>
        {SUB_LINKS.map((link) => (
          <Item key={link.id}>
            <Link to={`/movie${link.to}`}>{link.id}</Link>
          </Item>
        ))}
      </Menu>
    </Container>
  );
}

const SUB_LINKS = [{ id: 1, to: '/list' }];

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
    width: 120px;
    height: 38px;
    margin: 0 4px;
    padding: 8px;
    border-radius: 15px;
  }
`;

export default Header;
