'use client';

import React from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '../../utils';

import './Checkbox.style.css';

type CheckboxProps = React.ComponentPropsWithoutRef<typeof Root>;

const Checkbox = React.forwardRef<React.ElementRef<typeof Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <Root ref={ref} className={cn('peer', 'checkbox', className)} {...props}>
      <Indicator className={cn('checkbox-indicator')}>
        <Check className="checkbox-indicator-icon" />
      </Indicator>
    </Root>
  ),
);

Checkbox.displayName = Root.displayName;

export { Checkbox, type CheckboxProps };
