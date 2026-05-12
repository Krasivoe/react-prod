import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/component-render/componentRender';
import { Counter } from '../ui/Counter';

describe('Counter', () => {
    const renderCounter = (value = 10) => componentRender(<Counter />, {
        initialState: {
            counter: { value },
        },
    });

    test('should render', () => {
        renderCounter();

        const title = screen.getByTestId('title-value');

        expect(title).toHaveTextContent('10');
    });

    test('should increment value', () => {
        renderCounter();

        const title = screen.getByTestId('title-value');
        const btn = screen.getByTestId('increment-btn');

        fireEvent.click(btn);

        expect(title).toHaveTextContent('11');
    });

    test('should increment value', () => {
        renderCounter();

        const title = screen.getByTestId('title-value');
        const btn = screen.getByTestId('decrement-btn');

        fireEvent.click(btn);

        expect(title).toHaveTextContent('9');
    });
});
