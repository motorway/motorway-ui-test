import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
  it('renders correctly', () => {
    const result = render(<App />);
    expect(result.container).toMatchSnapshot();
  });
});
