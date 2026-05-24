import { useTranslation } from 'react-i18next';
import { memo, PropsWithChildren, useMemo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemData } from '../../model/items';
import { classNames } from '@/shared/lib/class-names/classNames';

interface SidebarItemProps extends PropsWithChildren {
    item: SidebarItemData;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation(item.textNS);

    const className = useMemo(
        () => classNames(cls.link, { [cls.collapsed]: collapsed }),
        [collapsed],
    );
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={className}
            to={item.path}
        >
            <item.Icon className={cls.linkIcon} />

            <span className={cls.linkText}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
