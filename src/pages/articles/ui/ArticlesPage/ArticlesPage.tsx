import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames((cls.articlesPage), {}, [className])} />
);

export default memo(ArticlesPage);
