import React from 'react';
import GridImage from './GridImage';
import Mock from './GridImage-mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: Mock,
  argTypes: {
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  console.log(args);
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
