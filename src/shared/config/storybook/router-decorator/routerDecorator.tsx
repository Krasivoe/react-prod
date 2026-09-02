import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator: Decorator = (StoryComponent, { parameters }) => {
    const route = parameters.route ?? '/';
    const path = parameters.path ?? route;

    return (
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path={path} element={<StoryComponent />} />
            </Routes>
        </MemoryRouter>
    );
};
