import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticlesFilters.module.scss';
import {
    ArticleSortFieldValue,
    ArticleSortSelector,
    ArticlesTypeTabs,
    ArticleTypeValue,
    ArticleViewSelector,
    ArticleViewValue,
} from '@/entities/article';
import { articlesActions } from '../../model/slices/articlesSlice';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
    getArticlesView,
} from '../../model/selectors/articles';
import { useDebounce } from '@/shared/lib/hooks/use-debounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetch-articles-list/fetchArticlesList';
import { SortOrderValue } from '@/shared/types/sort';
import { Input } from '@/shared/ui/Input';

interface ArticleFiltersProps {
    className?: string;
}

const FILTERS_DELAY = 500;

export const ArticlesFilters = ({ className }: ArticleFiltersProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesView);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const type = useSelector(getArticlesType);
    const search = useSelector(getArticlesSearch);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, FILTERS_DELAY);

    const onChangeView = useCallback((viewValue: ArticleViewValue) => {
        dispatch(articlesActions.setView(viewValue));
    }, [dispatch]);

    const onChangeSort = useCallback((sortValue: ArticleSortFieldValue) => {
        dispatch(articlesActions.setFilters({ sort: sortValue }));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((orderValue: SortOrderValue) => {
        dispatch(articlesActions.setFilters({ order: orderValue }));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeType = useCallback((typeValue: ArticleTypeValue) => {
        dispatch(articlesActions.setFilters({ type: typeValue }));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((searchValue: string) => {
        dispatch(articlesActions.setFilters({ search: searchValue }));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    return (
        <div className={classNames((cls.articleFilters), {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />

                <ArticleViewSelector
                    className={cls.selector}
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>

            <div className={cls.searchWrapper}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Поиск')} />
            </div>

            <ArticlesTypeTabs value={type} onChangeType={onChangeType} />
        </div>
    );
};
