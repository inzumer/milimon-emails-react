import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    // Documentation first: it's what opens at the root of the published Storybook.
    options: {
      storySort: {
        order: ['Documentation', ['Introduction', 'Translations', 'Adding An Email'], 'Pages'],
      },
    },
  },
};

export default preview;
