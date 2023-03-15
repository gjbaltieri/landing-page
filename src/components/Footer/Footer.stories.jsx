import React from 'react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="http://www.instagram.com/gjbaltieri"> @gjbaltieri</a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
