import React from 'react';
import { Story } from '@storybook/react';
import InputField from '.';
import ThemeProvider from '../Theme';

const Template: Story = ({ ...args }) => (
  <ThemeProvider>
    <InputField {...args} onChange={() => undefined} />
  </ThemeProvider>
);

export default {
  title: 'InputField',
  component: InputField,
};

export const Default = Template.bind({});
Default.args = { placeholder: 'Default' };
