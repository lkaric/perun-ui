import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('alert', {
  variants: {
    variant: {
      default: 'alert-default',
      destructive: 'alert-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type AlertVariantProps = VariantProps<typeof alertVariants>;

export { alertVariants, type AlertVariantProps };
