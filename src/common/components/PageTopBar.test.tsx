import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageTopBar from './PageTopBar';

test('TopBar', () => {
  const { container } = render(
    <MemoryRouter>
      <PageTopBar />
    </MemoryRouter>,
  );
  expect(container).toHaveTextContent('Geonil Jang(FE)');
});
