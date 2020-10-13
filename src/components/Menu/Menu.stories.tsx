import React from 'react';
import { Story } from '@storybook/react';
import Menu from '.';
import ThemeProvider from '../../providers/Theme';

const Template: Story = ({ ...args }) => (
  <ThemeProvider>
    <Menu itens={[]} {...args} />
  </ThemeProvider>
);

export default {
  title: 'Menu',
  component: Menu,
};

export const Default = Template.bind({});
Default.args = {
  itens: [
    {
      href: '/',
      name: 'Option 1',
      selected: true,
    },
    {
      href: '/',
      name: 'Option 2',
      selected: false,
    },
  ],
};
