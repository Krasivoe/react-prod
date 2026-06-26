import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserAuthData } from '@/entities/user';
import { RoutePath } from '@/shared/config/route-config/routeConfig';

interface RequiredAuthParams {
    children: JSX.Element
}

export const RequiredAuth = ({ children }: RequiredAuthParams) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    return !auth
        ? <Navigate to={RoutePath.main} state={{ from: location }} replace />
        : children;
};
