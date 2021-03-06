import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'primary',
  backgroundColor: 'red',
};
