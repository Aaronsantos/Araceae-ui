import React, { PropsWithChildren } from 'react';

import { Container } from './styles';

export type ButtonProps = PropsWithChildren<{
  color?: string;
  wide?: boolean;
  disabled?: boolean;
}>;

const Button: React.FC<ButtonProps> = ({ children, wide, color = 'black' }) => {
  return (
    <Container color={color} wide={wide}>
      {children}
    </Container>
  );
};

export default Button;
