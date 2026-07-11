import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/user';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import MainIcon from '@/shared/assets/icons/sidebar/main.svg';
import AboutIcon from '@/shared/assets/icons/sidebar/about.svg';
import ProfileIcon from '@/shared/assets/icons/sidebar/profile.svg';
import ArticleIcon from '@/shared/assets/icons/sidebar/article.svg';
import { SidebarItemData } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItems: SidebarItemData[] = [
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
        ];

        if (userData) {
            sidebarItems.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    textNS: 'profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    textNS: 'article',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItems;
    },
);
