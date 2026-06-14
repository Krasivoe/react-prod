import type { RouteProps } from 'react-router-dom';
import type { ValuesOf } from '@/shared/types/common';
import { NotFoundPage } from '@/pages/not-found';
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { ProfilePage } from '@/pages/profile';

type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    // last
    NOT_FOUND: 'not_found',
} as const;

type AppRoutesValue = ValuesOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutesValue, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
} as const;

export const routeConfig: Record<AppRoutesValue, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
