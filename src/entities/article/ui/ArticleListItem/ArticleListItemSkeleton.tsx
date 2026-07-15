import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '@/entities/article';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Card } from '@/shared/ui/Card';
import { ArticleViewValue } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleViewValue
}

const UI_HEIGHT = 24;

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames((cls.articleListItem), {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <div className={cls.headerInfo}>
                            <Skeleton round height={30} width={30} />
                            <Skeleton width={150} height={UI_HEIGHT} />
                        </div>

                        <Skeleton width={100} height={UI_HEIGHT} className={cls.date} />
                    </div>

                    <Skeleton width={400} height={UI_HEIGHT} className={cls.title} />
                    <Skeleton width={200} height={UI_HEIGHT} className={cls.types} />

                    <Skeleton height={200} className={[cls.image, cls.imageSkeleton].join(' ')} />

                    <Skeleton height={200} className={cls.textBlock} />

                    <div className={cls.footer}>
                        <Skeleton height={40} width={200} />

                        <Skeleton height={UI_HEIGHT} width={60} />
                    </div>

                </Card>
            </div>
        );
    }

    return (
        <div className={classNames((cls.articleListItem), {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width="100%" height={200} className={cls.image} />
                </div>

                <div className={cls.infoWrapper}>
                    <Skeleton width={114} height={UI_HEIGHT} />
                    <Skeleton width={50} height={UI_HEIGHT} />
                </div>

                <Skeleton width="100%" height={UI_HEIGHT} className={cls.title} />
            </Card>
        </div>
    );
});
