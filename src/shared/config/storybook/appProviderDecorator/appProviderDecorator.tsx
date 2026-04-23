import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/theme-provider';

export const AppProviderDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { theme = Theme.LIGHT, position = 'centered' } = parameters;

    return (
        <ThemeProvider>
            <div className={`app story-wrapper ${position} ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
