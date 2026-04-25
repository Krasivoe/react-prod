import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '@/shared/ui/Button';

describe('Button', () => {
    test('should render', () => {
        render(<Button>TEST</Button>);

        const button = screen.getByText('TEST');

        expect(button).toBeInTheDocument();
    });

    test('should apply clear theme class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);

        const button = screen.getByText('TEST');

        expect(button).toHaveClass('clear');
    });

    test('should render with label', () => {
        render(<Button label="LABEL" data-testid="btn-with-label" />);

        const button = screen.getByTestId('btn-with-label');

        expect(button).toHaveTextContent('LABEL');
    });
});
