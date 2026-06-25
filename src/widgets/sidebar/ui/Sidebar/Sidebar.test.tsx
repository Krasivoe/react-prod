import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/sidebar';
import { componentRender } from '@/shared/config/tests/component-render/componentRender';

describe('Sidebar', () => {
    test('should render', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toBeInTheDocument();
    });

    test('should have collapsed class when toggled', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleBtn);

        expect(sidebar).toHaveClass('collapsed');
    });
});
