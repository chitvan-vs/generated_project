import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button with the provided text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('applies the correct variant and color', () => {
    render(<Button variant="contained" color="primary">Primary Button</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('MuiButton-contained');
    expect(buttonElement).toHaveClass('MuiButton-colorPrimary');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});