import type { Preview } from '@storybook/react-webpack5';
import { AppProviderDecorator } from '../../src/shared/config/storybook/app-provider-decorator/appProviderDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator/routerDecorator';

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
