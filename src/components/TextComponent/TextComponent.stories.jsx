import React from 'react';
import TextComponent from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Eveniet fugit laboriosam dolores dolore ratione sit possimus consectetur 
    doloremque quam. Totam beatae dolorem animi eius. Quaerat molestiae fugit 
    inventore exercitationem ea?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <TextComponent {...args} />;
  </div>
);
