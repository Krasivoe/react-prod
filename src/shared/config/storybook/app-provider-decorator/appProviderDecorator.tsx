import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/theme-provider';
import { StoreProvider } from '@/app/providers/store-provider';

export const AppProviderDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { theme = Theme.LIGHT, position = 'centered' } = parameters;

    document.body.className = theme;

    return (
        <StoreProvider>
            <ThemeProvider initialTheme={theme}>
                <div className={`app story-wrapper ${position}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        </StoreProvider>
    );
};
