import type { Preview } from '@storybook/react-webpack5';
import '../../src/shared/assets/styles/storybook.scss';
import { AppProviderDecorator } from '../../src/shared/config/storybook/appProviderDecorator/appProviderDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

const preview: Preview = {
    globalTypes: {
        theme: {
            defaultValue: Theme.LIGHT,
            toolbar: {
                title: 'Theme',
                items: [
                    { value: Theme.LIGHT, title: 'Light' },
                    { value: Theme.DARK, title: 'Dark' },
                ],
            },
        },
    },

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
