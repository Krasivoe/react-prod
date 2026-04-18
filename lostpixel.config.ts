import type { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
    storybookShots: {
        storybookUrl: 'http://localhost:6006',
    },
    generateOnly: false,
    breakpoints: [430, 1440],
    compareConcurrency: 500,
};
