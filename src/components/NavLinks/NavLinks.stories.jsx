import React from 'react';
import NavLinks from './NavLinks';
import { links } from './mocklinks';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: { links: links },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div>
    <NavLinks {...args} />
  </div>
);
