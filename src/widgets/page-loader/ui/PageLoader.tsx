import React from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames((cls.pageLoader), {}, [className])}>
        <Loader />
    </div>
);
