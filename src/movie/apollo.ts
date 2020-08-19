import ApolloClient from 'apollo-boost';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'https://movieql.now.sh',
});

export default client;
