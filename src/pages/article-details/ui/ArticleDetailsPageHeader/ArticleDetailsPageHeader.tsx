import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from '@/entities/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { t: articleT } = useTranslation('article');

    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articleDetails}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames((cls.articleDetailsPageHeader), {}, [className])}>
            <Button
                label={articleT('Назад к списку')}
                onClick={onBackToList}
            />

            {canEdit && (
                <Button
                    className={cls.buttonEdit}
                    label={t('Редактировать')}
                    onClick={onEditArticle}
                />
            )}
        </div>
    );
};
