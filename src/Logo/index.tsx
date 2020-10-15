import React from 'react';

import LogoImg from '../assets/static/img/logo.svg';
import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={LogoImg} aria-hidden alt="SINT LOGO" />
      <span>SINT</span>
    </Container>
  );
};

export default Logo;
