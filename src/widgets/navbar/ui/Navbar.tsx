import React from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                </AppLink>

            </div>
        </div>
    );
}
