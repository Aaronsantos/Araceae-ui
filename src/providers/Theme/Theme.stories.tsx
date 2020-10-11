import React from 'react';
import { Story } from '@storybook/react';
import ThemeProvider from '.';

export default {
  title: 'Theme and global styles',
  component: ThemeProvider,
};

export const Typography: React.FC = () => (
  <ThemeProvider>
    <h1>H1 Typography</h1>
    <h2>H2 Typography</h2>
    <h3>H3 Typography</h3>
    <h3>H4 Typography</h3>
    <h5>H5 Typography</h5>
    <p>Content text</p>
  </ThemeProvider>
);

export const Enphasis: React.FC = () => (
  <ThemeProvider>
    <h1 className="enphasis">H1 Typography</h1>
    <h2 className="enphasis">H2 Typography</h2>
    <h3 className="enphasis">H3 Typography</h3>
    <h3 className="enphasis">H4 Typography</h3>
    <h5 className="enphasis">H5 Typography</h5>
    <p className="enphasis">Content text</p>
  </ThemeProvider>
);
