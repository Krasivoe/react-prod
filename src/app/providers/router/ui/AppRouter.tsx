import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import { AppRouterProps, routeConfig } from '@/shared/config/route-config/routeConfig';
import { RequiredAuth } from '@/app/providers/router/ui/RequiredAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly
                        ? <RequiredAuth>{element}</RequiredAuth>
                        : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});
