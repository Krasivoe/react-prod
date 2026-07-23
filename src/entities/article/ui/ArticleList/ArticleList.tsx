import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView, ArticleViewValue } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleViewValue;
}

const getSkeletons = (view: ArticleViewValue) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} className={cls.card} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
        />
    );

    return (
        <div className={classNames((cls.articleList), {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((article) => renderArticle(article))
                : null}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
