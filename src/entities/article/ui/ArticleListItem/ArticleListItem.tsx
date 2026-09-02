import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlockData,
    ArticleView,
    ArticleViewValue,
} from '../../model/types/article';
import { RoutePath } from '@/shared/config/route-config/routeConfig';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/common/eye.svg';
import { classNames } from '@/shared/lib/class-names/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { ArticleTextBlock } from '../ArticleBlocks/ArticleTextBlock/ArticleTextBlock';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleViewValue;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation('article');

    const types = (
        <Text
            className={cls.types}
            text={article.type.join(', ')}
            hint={article.type.join(', ')}
        />
    );

    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </div>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlockData;

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <div className={cls.headerInfo}>
                            <Avatar size={30} src={article.user.avatar} />

                            <Text text={article.user.username} />
                        </div>

                        <Text text={article.createdAt} className={cls.date} />
                    </div>

                    <Text title={article.title} className={cls.title} />

                    {types}

                    <img src={article.img} alt={article.title} className={cls.image} />

                    {textBlock && (
                        <ArticleTextBlock block={textBlock} className={cls.textBlock} />
                    )}

                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.articleDetails + article.id}
                        >
                            <Button label={t('Читать далее')} />
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.articleDetails + article.id}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.image} loading="lazy" />

                    <Text text={article.createdAt} className={cls.date} />
                </div>

                <div className={cls.infoWrapper}>
                    {types}

                    {views}
                </div>

                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
