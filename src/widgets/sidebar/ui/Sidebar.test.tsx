import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/sidebar';
import { renderWithTranslation } from '@/shared/lib/tests/render-with-translation/renderWithTranslation';

describe('Sidebar', () => {
    test('should render', () => {
        renderWithTranslation(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toBeInTheDocument();
    });

    test('should have collapsed class when toggled', () => {
        renderWithTranslation(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleBtn);

        expect(sidebar).toHaveClass('collapsed');
    });
});
