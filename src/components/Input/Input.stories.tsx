import type { Meta, StoryObj } from '@storybook/react';

import { Input, type InputProps } from './Input';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Email',
  },
};
