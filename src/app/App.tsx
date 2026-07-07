import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/class-names/classNames';
import { getUserMounted, userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';

export function App() {
    const dispatch = useAppDispatch();

    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense>
                <Navbar />

                <div className="content-page">
                    <Sidebar />

                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
