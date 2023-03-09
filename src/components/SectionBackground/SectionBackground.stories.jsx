import React from 'react';
import SectionBackground from './SectionBackground';
import SectionContainer from '../SectionContainer/SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>Section Container</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            consectetur odit neque, qui ad at enim cum velit omnis aliquam
            corrupti quisquam ab quis voluptatum totam rerum ea eaque iste!
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: '',
      },
    },

    background: { type: 'boolean' },
  },
};

export const Template = (args) => (
  <div>
    <SectionBackground {...args} />
  </div>
);
