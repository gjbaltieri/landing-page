import React from 'react';
import Grid from './Grid';
import Mock from './grid-mock';

export default {
  title: 'Grid',
  component: Grid,
  args: Mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Grid {...args} />
  </div>
);
