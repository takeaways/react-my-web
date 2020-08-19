import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as Query from '../apollo/query';

function Home() {
  const { loading } = useQuery(Query.GET_MOVIEE);
  console.log(loading);
  return <div>Home Home</div>;
}

export default Home;
