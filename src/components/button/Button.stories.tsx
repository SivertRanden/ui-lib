import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Solid' };

export const Outline = Template.bind({});
Outline.args = { text: 'Outline', variant: 'outline' };

export const Text = Template.bind({});
Text.args = { text: 'Text', variant: 'text' };
