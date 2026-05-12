import type { Preview } from '@storybook/react-webpack5';
import '../../src/shared/assets/styles/storybook.scss';
import { AppProviderDecorator } from '../../src/shared/config/storybook/app-provider-decorator/appProviderDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator/routerDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/store-decorator/storeDecorator';

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

    decorators: [
        AppProviderDecorator,
        RouterDecorator,
        StoreDecorator,
    ],
};

export default preview;
