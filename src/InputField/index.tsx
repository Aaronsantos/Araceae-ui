import React, { ChangeEvent } from 'react';

import { Container } from './styles';

export type InputFieldProps = {
  type?: string;
  value?: string | number;
  placeholder?: string;
  defaultValue?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  return <Container {...props} />;
};

export default InputField;
