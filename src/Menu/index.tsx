import React, { useEffect, useRef, useState } from 'react';

import MenuIcon from '../assets/static/icons/Menu.svg';
import Logo from '../Logo';

import { Container, MenuContainer } from './styles';

export type MenuProps = {
  itens: {
    href: string;
    name: string;
    selected: boolean;
  }[];
};

const Menu: React.FC<MenuProps> = ({ itens = [] }) => {
  const node = useRef<HTMLHeadingElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (event) => {
      if (!node.current || node.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [node, setOpen]);
  return (
    <Container>
      <img
        src={MenuIcon}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        onKeyPress={() => setOpen(true)}
        tabIndex={0}
      />
      <MenuContainer ref={node} open={open}>
        <h1>
          <Logo />
        </h1>
        <span />
        <ul>
          {itens.map((el) => (
            <li className={el.selected ? 'enphasis' : ''}>
              <a href={el.href}>{el.name}</a>
            </li>
          ))}
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
