import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames((cls.sidebar), { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
}
