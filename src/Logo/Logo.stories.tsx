import React from 'react';
import { Story } from '@storybook/react';
import Logo from '.';
import ThemeProvider from '../Theme';

const Template: Story = ({ ...args }) => (
  <ThemeProvider>
    <Logo {...args} />
  </ThemeProvider>
);

export default {
  title: 'Logo',
  component: Logo,
};

export const Default = Template.bind({});
Default.args = {};
