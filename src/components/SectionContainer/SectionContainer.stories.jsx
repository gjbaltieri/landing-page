import React from 'react';
import SectionContainer from './SectionContainer';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consectetur odit neque, qui ad at enim cum velit omnis aliquam
          corrupti quisquam ab quis voluptatum totam rerum ea eaque iste!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: '',
      },
    },
  },
};

export const Template = (args) => <SectionContainer {...args} />;
