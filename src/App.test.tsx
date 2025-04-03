import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the heading correctly', () => {
    render(<App />);

    const headingElement = screen.getByText(/Image Gallery/i);
    expect(headingElement).toBeInTheDocument();
  });
});