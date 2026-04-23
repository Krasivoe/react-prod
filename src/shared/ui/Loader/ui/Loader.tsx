import React from 'react';
import cls from './Loader.module.scss';
import { classNames } from '@/shared/lib/class-names/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <div />
        <div />
    </div>
);
