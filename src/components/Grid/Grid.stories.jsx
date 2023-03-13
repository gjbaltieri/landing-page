import React from 'react';
import Grid from './Grid';

export default {
  title: 'Grid',
  component: Grid,
  args: {
    title: 'Grid',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed hendrerit quam non turpis fringilla, id varius odio aliquet. 
    Curabitur posuere odio et purus consectetur, vel molestie mauris pulvinar. 
    Morbi id lectus id velit suscipit consequat sit amet eget mauris. Nam nec ex ac nunc mattis malesuada. 
    Pellentesque eu libero vitae risus facilisis imperdiet sed sit amet velit.`,
    srcImg: 'https://www.svgrepo.com/show/476982/bridge.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Grid {...args} />
  </div>
);
