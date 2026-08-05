import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/page';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('article');

    const { id } = useParams<{ id: string }>();

    const isEdit = !!id;

    const title = isEdit ? t('Редактирование статьи ') + id : t('Создание статьи');

    // TODO реализовать фичу создания/редактирования статьи
    return (
        <Page className={classNames((cls.articleEditPage), {}, [className])}>
            <Text title={title} size={TextSize.L} />
        </Page>
    );
};

export default ArticleEditPage;
