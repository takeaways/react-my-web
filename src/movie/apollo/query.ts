import { gql } from '@apollo/client';
export const GET_MOVIE = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
