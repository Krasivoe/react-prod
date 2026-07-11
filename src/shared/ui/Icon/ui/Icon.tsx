import React, { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames('ui-icon', {}, [className])} />
    );
});
