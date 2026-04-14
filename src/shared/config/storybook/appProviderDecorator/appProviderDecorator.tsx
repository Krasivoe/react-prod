import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const AppProviderDecorator: Decorator = (StoryComponent, { globals, parameters }) => {
    const { theme = Theme.LIGHT } = globals;
    const { position = 'centered' } = parameters;

    return (
        <ThemeProvider>
            <div className={`app story-wrapper ${position} ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
