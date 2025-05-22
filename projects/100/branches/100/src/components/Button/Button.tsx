import React, { ButtonHTMLAttributes } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

/**
 * A reusable button component built with Material UI (MUI v5).
 * This component accepts all the props available in the HTML button element and additional MUI ButtonProps.
 *
 * @param {ButtonProps} props - The props to pass down to the underlying MUI Button component.
 * @returns {JSX.Element} A Material UI styled button.
 *
 * @example
 * <Button variant="contained" color="primary">
 *   Click Me
 * </Button>
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & MuiButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;