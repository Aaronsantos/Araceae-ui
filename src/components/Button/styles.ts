import styled from 'styled-components';

import { ButtonProps } from '.';

const themeColorKeys: object = {
  black: {
    bgColor: 'black',
    color: 'white',
    bgColorHover: 'white',
    colorHover: 'black',
    border: 'black',
    borderHover: 'black',
  },
  brand: {
    bgColor: 'brand',
    color: 'white',
    bgColorHover: 'black',
    colorHover: 'white',
    border: 'brand',
    borderHover: 'black',
  },
  white: {
    bgColor: 'white',
    color: 'black',
    bgColorHover: 'black',
    colorHover: 'white',
    border: 'black',
    borderHover: 'black',
  },
};

export const Container = styled.button<ButtonProps>`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  outline: currentcolor none medium;
  user-select: none;
  border-radius: 0px;
  text-transform: lowercase;
  cursor: pointer;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  font-size: 20px;
  padding: 9px 23px 11px;
  border: solid;
  border-width: 1px;
  color: ${({ color, theme }) => theme.colors[themeColorKeys[color!].color]};
  background: ${({ color, theme }) =>
    theme.colors[themeColorKeys[color!].bgColor]};
  border-color: ${({ color, theme }) =>
    theme.colors[themeColorKeys[color!].border]};

  &:hover {
    background-color: white;
    color: rgb(25, 25, 25);
    transition: all 0.1s cubic-bezier(0.77, 0, 0.175, 1);
    color: ${({ color, theme }) =>
      theme.colors[themeColorKeys[color!].colorHover]};
    background: ${({ color, theme }) =>
      theme.colors[themeColorKeys[color!].bgColorHover]};
    border-color: ${({ color, theme }) =>
      theme.colors[themeColorKeys[color!].borderHover]};
  }
`;
