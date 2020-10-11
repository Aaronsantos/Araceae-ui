import styled from 'styled-components';

import { InputFieldProps } from '.';

export const Container = styled.input<InputFieldProps>`
  background: none;
  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  outline: none;
  line-height: 1.5em;
  padding-bottom: 0.8em;
  font-size: ${({ theme }) => theme.typography.body}px;
`;
