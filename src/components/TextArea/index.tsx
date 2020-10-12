import React from 'react';

import { Container } from './styles';

export type TextAreaProps = {
  type?: string;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string;
  onChange(event: InputEvent): void;
};

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  return <Container {...props} />;
};

export default TextArea;
