import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField, ArticleSortFieldValue } from '../../model/types/article';
import { SortOrder, SortOrderValue } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortFieldValue;
    order: SortOrderValue;
    onChangeSort: (sort: ArticleSortFieldValue) => void;
    onChangeOrder: (order: SortOrderValue) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ArticleSortFieldValue>[]>(() => [
        {
            label: t('дате создания'),
            value: ArticleSortField.CREATED,
        },
        {
            label: t('названию'),
            value: ArticleSortField.TITLE,
        },
        {
            label: t('просмотрам'),
            value: ArticleSortField.VIEWS,
        },
    ], [t]);

    const orderOptions = useMemo<SelectOption<SortOrderValue>[]>(() => [
        {
            label: t('сначала новые'),
            value: SortOrder.ASC,
        },
        {
            label: t('сначала старые'),
            value: SortOrder.DESC,
        },
    ], [t]);

    return (
        <div className={classNames((cls.articleSortSelector), {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />

            <Select
                options={orderOptions}
                label={t('Порядок')}
                value={order}
                className={cls.order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
