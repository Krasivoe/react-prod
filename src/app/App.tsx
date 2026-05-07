import { Suspense } from 'react';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/class-names/classNames';

export function App() {
    return (
        <div className={classNames('app', {}, [])}>
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
