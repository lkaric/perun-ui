import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle, type AlertProps } from './Alert';

const meta = {
  title: 'components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  args: { variant: 'default' },
  argTypes: {
    variant: {
      options: ['default', 'destructive'] satisfies Array<
        AlertProps['variant']
      >,
      control: {
        type: 'select',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<AlertProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
    description:
      'Whereas disregard and contempt for human rights have resulted',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Destructive',
    description:
      'Whereas disregard and contempt for human rights have resulted',
  },
};

export const Composite: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Composite</AlertTitle>
      <AlertDescription>Composable alert</AlertDescription>
    </Alert>
  ),
  args: {},
};
