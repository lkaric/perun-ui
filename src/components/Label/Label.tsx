'use client';

import React from 'react';
import { Root } from '@radix-ui/react-label';

import { cn } from '../../utils';

import './Label.style.css';

type LabelProps = React.ComponentPropsWithoutRef<typeof Root>;

const Label = React.forwardRef<React.ElementRef<typeof Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <Root ref={ref} className={cn('label', className)} {...props} />
  ),
);
Label.displayName = Root.displayName;

export { Label, type LabelProps };
