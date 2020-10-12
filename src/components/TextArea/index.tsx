import React, { ChangeEvent } from 'react';

import { Container } from './styles';

export type TextAreaProps = {
  type?: string;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string;
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;
};

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  return <Container {...props} />;
};

export default TextArea;
