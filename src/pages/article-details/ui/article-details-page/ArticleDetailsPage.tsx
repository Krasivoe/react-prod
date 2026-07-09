import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/article';
import { PROJECT } from '@/shared/constants/global';
import { Text } from '@/shared/ui/Text';
import { CommentList } from '@/entities/comment';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/useInitialEffect';
import {
    articleDetailsCommentsReducer, getArticleComments,
} from '@/pages/article-details/model/article-details-page/slices/articleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '@/pages/article-details/model/article-details-page/services/fetch-comments-by-article-id/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '@/pages/article-details/model/article-details-page/selectors/comments';

interface ArticleDetailsPageProps {
    className?: string;
}

const DEFAULT_ID = '1';

const reducers: AsyncReducersMap = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    const { id: idFromRoute } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const isStory = __PROJECT__ === PROJECT.storybook;
    const id = isStory ? DEFAULT_ID : idFromRoute;

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) {
        return (
            <div className={classNames(cls.notFound, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {id
                ? (
                    <div className={classNames((cls.articleDetailsPage), {}, [className])}>
                        <ArticleDetails id={id!} />

                        <div className={cls.comments}>
                            <Text className={cls.commentsTitle} title={t('Комментарии')} />

                            <CommentList
                                isLoading={commentsIsLoading}
                                comments={comments}
                            />
                        </div>
                    </div>
                )
                : (
                    <div className={classNames(cls.notFound, {}, [className])}>
                        {t('Статья не найдена')}
                    </div>
                )}
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
