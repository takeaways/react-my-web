import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as Query from '../apollo/query';
import styled from 'styled-components';

const Container = styled.div``;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  align-items: center;
  justify-content: space-around;
  padding: 45px 0;
  font-size: var(--font-medium);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    126deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(99, 9, 121, 0.29735644257703087) 54%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const Title = styled.h1`
  margin-bottom: 15px;
`;
const Subtitle = styled.h2``;

function Home() {
  const { loading, data } = useQuery(Query.GET_MOVIEE);
  return (
    <Container>
      <Header>
        <Title>그래프 큐엘!!</Title>
        <Subtitle>Movie List</Subtitle>
      </Header>
      {!loading ? (
        data.movies.map((item: { id: number }) => <p>{item.id}</p>)
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}

export default Home;
