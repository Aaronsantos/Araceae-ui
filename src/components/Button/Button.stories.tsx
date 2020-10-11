import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';
import ThemeProvider from '../../providers/Theme';

storiesOf('Button', module)
  .add('Default button', () => (
    <ThemeProvider>
      <Button>Default</Button>
    </ThemeProvider>
  ))
  .add('White button', () => (
    <ThemeProvider>
      <Button color="white">White</Button>
    </ThemeProvider>
  ))
  .add('Brand button', () => (
    <ThemeProvider>
      <Button color="brand">Brand primary</Button>
    </ThemeProvider>
  ))
  .add('Wide button', () => (
    <ThemeProvider>
      <Button wide>wide</Button>
    </ThemeProvider>
  ));
