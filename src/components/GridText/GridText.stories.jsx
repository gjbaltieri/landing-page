import React from 'react';
import GridText from './GridText';
import Mock from './mock-GridText';

export default {
  title: 'GridText',
  component: GridText,
  args: Mock,
};

export const Template = (args) => (
  <div>
    <GridText {...args} />
  </div>
);
