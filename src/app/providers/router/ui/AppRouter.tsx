import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageLoader } from '@/widgets/page-loader';
import { routeConfig } from '@/shared/config/route-config/routeConfig';
import { getUserAuthData } from '@/entities/user';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(
        () => Object.values(routeConfig).filter((route) => !route.authOnly || !!isAuth),
        [isAuth],
    );

    return (
        <Routes>
            {
                routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                        path={path}
                    />
                ))
            }
        </Routes>
    );
});
