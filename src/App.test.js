import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
