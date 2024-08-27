import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';

import type { Preview } from '@storybook/react';

import './preview.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      return (
        <div className="sr-min-h-[350px] sr-flex sr-justify-center sr-items-center">
          <style>
            {`
            .docs-story {
              background: hsl(var(--background));
            }
          `}
          </style>
          <Story />
        </div>
      );
    },
  ],

  tags: ['autodocs'],
};

export default preview;
