import React from 'react';

import { ReactComponent as LogoImg } from '../../assets/img/logo.svg';
import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoImg />
      <span>SINT</span>
    </Container>
  );
};

export default Logo;
