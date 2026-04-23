import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import { routeConfig } from '@/shared/config/route-config/routeConfig';

export function AppRouter() {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({ element, path }) => (
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
}
