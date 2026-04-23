import React, { Suspense } from 'react';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar />

                <div className="content-page">
                    <Sidebar />

                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
