import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div style={styles} className={classNames('ui-skeleton', {}, [className])} />
    );
});
