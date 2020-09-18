import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import HelloWorld from '.';

storiesOf('HelloWord', module)
  .addDecorator(withKnobs)
  .add('with label', () => <HelloWorld />)
  .add('custom style', () => (
    <div
      style={object('style', {
        "backgroundColor": 'pink',
        "border": '5px dotted limegreen',
      })}
    > Hello World</ div>)
  );