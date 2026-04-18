import type { Preview } from '@storybook/react-webpack5';
import '../../src/shared/assets/styles/storybook.scss';
import { AppProviderDecorator } from '../../src/shared/config/storybook/appProviderDecorator/appProviderDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

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

    decorators: [AppProviderDecorator, RouterDecorator],
};

export default preview;
