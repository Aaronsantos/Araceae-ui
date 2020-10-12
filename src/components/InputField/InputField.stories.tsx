import React from 'react';
import { Story } from '@storybook/react';
import InputField from '.';
import ThemeProvider from '../../providers/Theme';

const Template: Story = ({ ...args }) => (
  <ThemeProvider>
    <InputField {...args} />
  </ThemeProvider>
);

export default {
  title: 'InputField',
  component: InputField,
};

export const Default = Template.bind({});
Default.args = { placeholder: 'Default' };
