import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements';

afterEach(cleanup);

it('should equal to 0', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('counter')).toHaveTextContent(0);
});

it('활성화 버튼', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('비활성 버튼', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-down')).toBeDisabled();
});
