import React from 'react';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  parameters: { backgrounds: { default: 'dark' } },
  args: { children: 'qualquer coisa' },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.args = {
  children: 'tema claro',
  darkMode: false,
};
Light.parameters = {
  backgrounds: { default: 'light' },
};

Dark.parameters = {
  backgrounds: { default: 'dark' },
};
Dark.args = {
  children: 'tema escuro',
  darkMode: true,
};
