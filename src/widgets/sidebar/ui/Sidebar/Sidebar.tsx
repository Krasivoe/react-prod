import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/class-names/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { DefaultSize } from '@/shared/types/components';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemList = useSelector(getSidebarItems);

    const onToggle = () => setCollapsed((prev) => !prev);

    const sidebarLinks = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        >
            {item.text}
        </SidebarItem>
    )), [collapsed, sidebarItemList]);

    return (
        <menu data-testid="sidebar" className={classNames((cls.sidebar), { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.contentWrapper}>
                <div className={cls.content}>
                    <div className={cls.links}>
                        {sidebarLinks}
                    </div>

                    <div className={cls.switchers}>
                        <ThemeSwitcher />

                        <LangSwitcher short={collapsed} />
                    </div>
                </div>
            </div>

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
        </menu>
    );
});
