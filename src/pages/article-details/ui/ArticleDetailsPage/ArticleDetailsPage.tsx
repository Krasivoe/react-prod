import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails, ArticleList } from '@/entities/article';
import { PROJECT } from '@/shared/constants/global';
import { Text, TextSize } from '@/shared/ui/Text';
import { CommentList } from '@/entities/comment';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/useInitialEffect';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetch-comments-by-article-id/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { AddCommentForm } from '@/features/add-comment-form';
import { addCommentForArticle } from '../../model/services/add-comment-for-article/addCommentForArticle';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import { Button } from '@/shared/ui/Button';
import { Page } from '@/widgets/page';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendations } from '@/pages/article-details/model/slices/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '@/pages/article-details/model/selectors/recommendations';
import {
    fetchArticleRecommendations,
} from '@/pages/article-details/model/services/fetch-article-recommedations/fetchArticleRecommendations';

interface ArticleDetailsPageProps {
    className?: string;
}

const DEFAULT_ID = '1';

const reducers: AsyncReducersMap = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    const { id: idFromRoute } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const isStory = __PROJECT__ === PROJECT.storybook;
    const id = isStory ? DEFAULT_ID : idFromRoute;

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <Page className={classNames(cls.notFound, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {id
                ? (
                    <Page className={classNames((cls.articleDetailsPage), {}, [className])}>
                        <Button
                            className={cls.buttonBack}
                            label={t('Назад к списку')}
                            onClick={onBackToList}
                        />

                        <ArticleDetails id={id!} />

                        <div className={cls.recommendations}>
                            <Text size={TextSize.L} className={cls.blockTitle} title={t('Рекомендуем')} />

                            <ArticleList
                                articles={recommendations}
                                isLoading={recommendationsIsLoading}
                                className={cls.recommendationsList}
                                target="_blank"
                                nowrap
                            />
                        </div>

                        <div className={cls.comments}>
                            <Text size={TextSize.L} className={cls.blockTitle} title={t('Комментарии')} />

                            <AddCommentForm className={cls.commentForm} onSendComment={onSendComment} />

                            <CommentList
                                isLoading={commentsIsLoading}
                                comments={comments}
                            />
                        </div>
                    </Page>
                )
                : (
                    <Page className={classNames(cls.notFound, {}, [className])}>
                        {t('Статья не найдена')}
                    </Page>
                )}
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
