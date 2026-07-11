import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticleCodeBlock.module.scss';
import { ArticleCodeBlockData } from '../../../model/types/article';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlockData
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { className, block } = props;

    return (
        <div className={classNames((cls.articleCodeBlock), {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
