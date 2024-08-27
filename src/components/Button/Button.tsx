import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { buttonVariants, type ButtonVariantProps } from './Button.cva';

import { cn } from '../../utils';

import './Button.style.css';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, type ButtonProps, buttonVariants };
