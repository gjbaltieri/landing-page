import React from 'react';
import LogoLink from './LogoLink';

export default {
  title: 'LogoLink',
  component: LogoLink,
  argTypes: {
    imgSrc: { type: 'string' },
    text: { type: 'string' },
    link: { type: 'string' },
  },
};

export const ImageOnly = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);
ImageOnly.args = {
  imgSrc:
    'https://i2.wp.com/www.verifiedmom.com/wp-content/uploads/2014/07/Netflix_Logo_Print_OneColorPMS.png?fit=8685%2C2333&ssl=1',
  link: 'http://google.com',
  text: 'netflix',
};
export const TextOnly = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);
TextOnly.args = {
  link: 'http://google.com',
  text: 'netflix',
};
