import React from 'react';
import MenuLink from './MenuLink';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: { children: 'MenuLink', link: 'http://google.com' },
  argTypes: {
    children: { type: 'string' },
    newTab: { type: 'boolean' },
  },
};

export const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
);
