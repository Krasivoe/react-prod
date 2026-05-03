import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/class-names/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { DefaultSize } from '@/shared/types/components';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t: tMain } = useTranslation('main');
    const { t: tAbout } = useTranslation('about');

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div data-testid="sidebar" className={classNames((cls.sidebar), { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={DefaultSize.M}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.content}>
                <div className={cls.links}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.link}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.linkIcon} />

                        <span className={cls.linkText}>
                            {tMain('Главная страница')}
                        </span>
                    </AppLink>

                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.link}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.linkIcon} />

                        <span className={cls.linkText}>
                            {tAbout('О сайте')}
                        </span>
                    </AppLink>
                </div>

                <div className={cls.switchers}>
                    <ThemeSwitcher />

                    <LangSwitcher short={collapsed} />
                </div>
            </div>
        </div>
    );
}
