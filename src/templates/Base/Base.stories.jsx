import React from 'react';
import Base from './Base';
import Mock from './BaseMock';

export default {
  title: 'Template/Base',
  component: Base,
  args: Mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
