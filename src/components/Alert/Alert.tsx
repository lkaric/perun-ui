import { forwardRef } from 'react';

import { alertVariants, type AlertVariantProps } from './Alert.cva';

import { cn } from '../../utils';

import './Alert.style.css';

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertVariantProps {
  title?: string;
  description?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, children, title, description, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </>
      )}
    </div>
  ),
);
Alert.displayName = 'Alert';

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('alert-title', className)} {...props} />
));

AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('alert-description', className)} {...props} />
));

AlertDescription.displayName = 'AlertDescription';

export { Alert, type AlertProps, AlertTitle, AlertDescription };
