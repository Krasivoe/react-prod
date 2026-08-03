import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticlesPage.module.scss';
import { ArticleList } from '@/entities/article';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { articlesReducer, getArticles } from '../../model/slices/articlesSlice';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/useInitialEffect';
import { fetchNextArticles } from '../../model/services/fetch-next-articles/fetchNextArticles';
import { initArticlesPage } from '@/pages/articles/model/services/init-articles-page/initArticlesPage';
import { Page } from '@/widgets/page';
import { ArticlesFilters } from '../ArticlesFilters/ArticlesFilters';

interface ArticlesPageProps {
    className?: string;
}

const reducers: AsyncReducersMap = {
    articles: articlesReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const isLoading = useSelector(getArticlesIsLoading);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch]);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPage}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesFilters className={cls.filters} />

                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
