import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  & > h1 {
    display: block;
    width: 400px;
    height: 38px;
    text-align: center;
    margin-bottom: 15px;
    background-color: violet;
    border-radius: 15px;
    color: white;
    line-height: 38px;
    font-weight: var(--weight-bold);
    text-transform: uppercase;
  }
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <Section>{children}</Section>;
}
