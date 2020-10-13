import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from '.';
import ThemeProvider from '../Theme';

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <ThemeProvider>
    <Button {...args}>{children}</Button>
  </ThemeProvider>
);

export default {
  title: 'Button',
  component: Button,
};

export const Default = Template.bind({});
Default.args = { children: 'Default' };

export const Outlined = Template.bind({});
Outlined.args = { children: 'Outlines!', color: 'white' };

export const BrandColor = Template.bind({});
BrandColor.args = { children: 'Brand', color: 'brand' };
