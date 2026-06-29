import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/article';
import { PROJECT } from '@/shared/constants/global';

interface ArticleDetailsPageProps {
    className?: string;
}

const DEFAULT_ID = '1';

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    const { id: idFromRoute } = useParams<{ id: string }>();

    const isStory = __PROJECT__ === PROJECT.storybook;
    const id = isStory ? DEFAULT_ID : idFromRoute;

    if (id) {
        return (
            <div className={classNames(cls.notFound, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames((cls.articleDetailsPage), {}, [className])}>
            <ArticleDetails id={id!} />
        </div>

    );
};

export default memo(ArticleDetailsPage);
