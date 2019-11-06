import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../Storybook_Stories', true, /\.stories\.js$/), module);
