import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import { ArticleType, ArticleTypeValue } from '../../model/types/article';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticlesTypeTabsProps {
    className?: string;
    value: ArticleTypeValue;
    onChangeType: (type: ArticleTypeValue) => void;
}

export const ArticlesTypeTabs = memo((props: ArticlesTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem<ArticleTypeValue>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={(tab) => onChangeType(tab.value)}
        />
    );
});
