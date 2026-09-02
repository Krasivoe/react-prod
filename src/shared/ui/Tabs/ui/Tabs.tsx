import { useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { TabItem } from '../types/types';

interface TabsProps<T extends string = string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string = string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem<T>) => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames('ui-tabs', {}, [className])}>
            {tabs.map((tab) => (
                <div
                    className={classNames('ui-tabs__tab', { active: tab.value === value })}
                    key={tab.value}
                    onClick={() => clickHandle(tab)}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
};
