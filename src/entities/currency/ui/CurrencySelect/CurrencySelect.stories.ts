import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
