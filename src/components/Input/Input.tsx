import React from 'react';

import { cn } from '../../utils';

import './Index.style.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn('input', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input, type InputProps };
