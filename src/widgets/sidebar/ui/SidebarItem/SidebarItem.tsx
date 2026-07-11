import { useTranslation } from 'react-i18next';
import { memo, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemData } from '../../model/types/sidebar';
import { classNames } from '@/shared/lib/class-names/classNames';
import { getUserAuthData } from '@/entities/user';

interface SidebarItemProps extends PropsWithChildren {
    item: SidebarItemData;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation(item.textNS);

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={cls.linkIcon} />

            <span className={cls.linkText}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
