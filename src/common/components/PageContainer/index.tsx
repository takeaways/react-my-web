import React from 'react';
import styled from 'styled-components';

const PageContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding-top: 68px;
`;

export default PageContainer;
