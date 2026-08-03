import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleList.module.scss';
import { Article, ArticleView, ArticleViewValue } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/Text';

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

    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames((cls.articleList), {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames((cls.articleList), {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((article) => renderArticle(article))
                : null}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
