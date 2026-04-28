import type { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
    storybookShots: {
        storybookUrl: './storybook-static',
    },
    generateOnly: false,
    breakpoints: [430, 1440],
    compareConcurrency: 500,
};
