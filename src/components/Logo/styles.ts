import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  flex-direction: column;
  height: 96px;
  align-items: center;
  width: fit-content;

  svg {
    width: 70px;
  }

  span {
    margin: none;
    line-height: 1em;
    font-size: 32px;
    letter-spacing: 0.5em;
    font-weight: 400;
    font-family: 'Crimson text';
  }
`;
