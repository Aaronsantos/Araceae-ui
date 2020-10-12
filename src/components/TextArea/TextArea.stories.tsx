import React from 'react';
import { Story } from '@storybook/react';
import TextArea from '.';
import ThemeProvider from '../../providers/Theme';

const Template: Story = ({ ...args }) => (
  <ThemeProvider>
    <TextArea {...args} />
  </ThemeProvider>
);

export default {
  title: 'TextArea',
  component: TextArea,
};

export const Default = Template.bind({});
Default.args = { placeholder: 'Default' };
