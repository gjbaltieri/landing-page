import React from 'react';
import Menu from './Menu';
import { links } from '../NavLinks/mocklinks.js';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: links,
    logoData: { text: 'logo', link: '#target', srcImg: '' },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
