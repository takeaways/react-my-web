import { gql } from '@apollo/client';
export const GET_MOVIEE = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
