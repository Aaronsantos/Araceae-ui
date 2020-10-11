import React from 'react';

import { Container } from './styles';

export type TButton = {
  color?: string;
  wide?: boolean;
  disabled?: boolean;
};

const Button: React.FC<TButton> = ({ children, wide, color = 'black' }) => {
  return (
    <Container color={color} wide={wide}>
      {children}
    </Container>
  );
};

export default Button;
