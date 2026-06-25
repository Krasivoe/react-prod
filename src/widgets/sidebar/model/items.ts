import React from 'react';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export interface SidebarItemData {
    path: string;
    text: string;
    textNS: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemData[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        textNS: 'main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        textNS: 'about',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        textNS: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
