import React, { FormEvent, PropsWithChildren } from 'react';

import { Container } from './styles';

export type ButtonProps = PropsWithChildren<{
  color?: string;
  wide?: boolean;
  disabled?: boolean;
  onClick?(event: MouseEvent | FormEvent): void;
}>;

const Button: React.FC<ButtonProps> = ({
  children,
  wide,
  color = 'black',
  onClick,
}) => {
  return (
    <Container color={color} wide={wide} onClick={onClick}>
      * {children} *
    </Container>
  );
};

export default Button;
