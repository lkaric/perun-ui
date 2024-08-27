import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChevronRightIcon } from 'lucide-react';

import { Button, type ButtonProps } from './Button';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), variant: 'primary', size: 'md', asChild: false },
  argTypes: {
    asChild: {
      control: {
        type: 'radio',
        disable: true,
      },
      type: 'boolean',
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon'] satisfies Array<ButtonProps['size']>,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: [
        'primary',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'outline',
      ] satisfies Array<ButtonProps['variant']>,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: <ChevronRightIcon className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: 'Link as a Button',
  },
  render: ({ children, ...args }) => (
    <Button {...args}>
      <a>{children}</a>
    </Button>
  ),
};
