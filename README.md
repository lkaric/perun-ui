# perun-ui

## Install

```sh
pnpm add perun-ui
```

## Usage

Import `style.css` in the App root:

```tsx
import 'perun-ui/style.css';
```

Then use the components:

```tsx
import { Button } from 'perun-ui/ui';

export default function MyComponent() {
  return <Button>Hello world</Button>;
}
```

Use [lucide icons](https://lucide.dev/icons/):

```tsx
import { RocketIcon } from 'perun-ui/icons';

export default function MyComponent() {
  return <RocketIcon />;
}
```
