import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleTextBlock.module.scss';
import { ArticleTextBlockData } from '../../../model/types/article';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlockData
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { className, block } = props;

    return (
        <div className={classNames((cls.articleTextBlock), {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}

            {block.paragraphs.length && block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
