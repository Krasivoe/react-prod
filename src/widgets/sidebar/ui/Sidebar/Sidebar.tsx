import { memo, useMemo, useState } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/class-names/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { DefaultSize } from '@/shared/types/components';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    const sidebarLinks = useMemo(() => SidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        >
            {item.text}
        </SidebarItem>
    )), [collapsed]);

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
                    {sidebarLinks}
                </div>

                <div className={cls.switchers}>
                    <ThemeSwitcher />

                    <LangSwitcher short={collapsed} />
                </div>
            </div>
        </div>
    );
});
