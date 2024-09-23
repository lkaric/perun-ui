import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva('badge', {
  variants: {
    variant: {
      default: 'badge-default',
      secondary: 'badge-secondary',
      destructive: 'badge-destructive',
      outline: 'badge-outline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export { badgeVariants, type BadgeVariantProps };
