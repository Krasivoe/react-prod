import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleImageBlock.module.scss';
import { ArticleImageBlockData } from '../../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlockData
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames((cls.articleImageBlock), {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />

            {block.title && (
                <Text className={cls.title} text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
