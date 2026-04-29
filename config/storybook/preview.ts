import type { Preview } from '@storybook/react-webpack5';
import '../../src/shared/assets/styles/storybook.scss';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [],
};

export default preview;
