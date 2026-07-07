import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleDetails.module.scss';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleBlocks/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleBlocks/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleBlocks/ArticleTextBlock/ArticleTextBlock';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetchArticleById';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/article-detail/articleDetails';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/common/eye.svg';
import CalendarIcon from '@/shared/assets/icons/common/calendar.svg';
import { Icon } from '@/shared/ui/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/useInitialEffect';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: AsyncReducersMap = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlock key={block.id} block={block} />;

            case ArticleBlockType.IMAGE:
                return <ArticleImageBlock key={block.id} block={block} />;

            case ArticleBlockType.TEXT:
                return <ArticleTextBlock key={block.id} block={block} />;

            default:
                return null;
        }
    }, []);

    useInitialEffect(() => dispatch(fetchArticleById(id)), [id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />

                <Skeleton className={cls.titleSkeleton} width={300} height={32} />
                <Skeleton className={cls.titleSkeleton} width={600} height={24} />

                <div className={cls.articleInfo}>
                    <Skeleton width={150} height={24} />
                    <Skeleton width={150} height={24} />
                </div>

                <div className={cls.blocks}>
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                </div>
            </>
        );
    } else if (error) {
        content = (
            <Text
                className={cls.error}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>

                <Text
                    size={TextSize.L}
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                />

                <div className={cls.articleInfo}>
                    <div className={cls.articleInfoItem}>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </div>

                    <div className={cls.articleInfoItem}>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </div>
                </div>

                {article?.blocks?.length && (
                    <div className={cls.blocks}>
                        {article?.blocks.map(renderBlock)}
                    </div>
                )}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames((cls.articleDetails), {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
