import type { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/about';
import MainPage from '@/pages/main/ui/MainPage';
import type { ValuesOf } from '@/shared/types/common';
import { NotFoundPage } from '@/pages/not-found';

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'not_found',
} as const;

type AppRoutesValue = ValuesOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutesValue, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutesValue, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
