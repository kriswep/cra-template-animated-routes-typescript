import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  await wait(() => {
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
