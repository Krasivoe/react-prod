import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div data-testid="sidebar" className={classNames((cls.sidebar), { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                label={t('Переключить')}
                onClick={onToggle}
            />

            <div className={cls.switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
}
