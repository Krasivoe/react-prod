import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesFilters } from './ArticlesFilters';

const meta = {
    title: 'pages/ArticlesFilters',
    component: ArticlesFilters,
} satisfies Meta<typeof ArticlesFilters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
