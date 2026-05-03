import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/theme-provider';
import { useBodyTheme } from '@/shared/lib/hooks/useBodyTheme';

export const AppProviderDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { theme = Theme.LIGHT, position = 'centered' } = parameters;

    useBodyTheme(theme);

    return (
        <ThemeProvider initialTheme={theme}>
            <div id="app" className={`app story-wrapper ${position} ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
