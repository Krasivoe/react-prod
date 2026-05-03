import { Suspense } from 'react';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names/classNames';
import { useBodyTheme } from '@/shared/lib/hooks/useBodyTheme';

export function App() {
    const { theme } = useTheme();

    useBodyTheme(theme);

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
