import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      destructive: 'btn-destructive',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      icon: 'btn-icon',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export { buttonVariants, type ButtonVariantProps };
