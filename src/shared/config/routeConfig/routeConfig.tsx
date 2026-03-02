import { AboutPage } from '@/pages/AboutPage';
import MainPage from '@/pages/MainPage/ui/MainPage';
import type { ValuesOf } from '@/shared/types/common';
import type { RouteProps } from 'react-router-dom';

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
} as const;

type AppRoutesValue = ValuesOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutesValue, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutesValue, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: '/about',
        element: <AboutPage />,
    },
};

