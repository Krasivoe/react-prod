import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/theme-provider';

export const AppProviderDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { theme = Theme.LIGHT, position = 'centered' } = parameters;

    document.body.className = theme;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app story-wrapper ${position}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
