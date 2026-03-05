import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export function AppRouter() {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                            path={path}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
}
