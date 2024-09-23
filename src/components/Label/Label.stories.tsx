import type { Meta, StoryObj } from '@storybook/react';

import { Label, type LabelProps } from './Label';
import { Checkbox } from '../Checkbox';

const meta = {
  title: 'components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<LabelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label {...args}>Accept terms and conditions</Label>
      </div>
    </div>
  ),
  args: {
    htmlFor: 'terms',
  },
};
