import React from 'react';
import Base from './Base';
import Mock from './BaseMock';
import GridText from '../../components/GridText/GridText';
import GridMock from '../../components/GridText/mock-GridText';

export default {
  title: 'Template/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridText {...GridMock} background />
        <GridText {...GridMock} />
        <GridText {...GridMock} background />
      </>
    ),
    ...Mock,
  },
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
