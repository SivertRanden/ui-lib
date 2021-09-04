import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Default button' };
