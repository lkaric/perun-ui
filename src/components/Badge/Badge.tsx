import { badgeVariants, type BadgeVariantProps } from './Badge.cva';

import { cn } from '../../utils';

import './Badge.style.css';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariantProps;

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge, type BadgeProps };
