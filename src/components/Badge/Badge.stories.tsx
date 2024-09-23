import type { Meta, StoryObj } from '@storybook/react';

import { Badge, type BadgeProps } from './Badge';

const meta = {
  title: 'components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: { variant: 'default' },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
      ] satisfies Array<BadgeProps['variant']>,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};
