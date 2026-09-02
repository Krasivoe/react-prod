import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
    round?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
        round,
    } = props;

    const roundStyle = round ? { borderRadius: '50%' } : {};

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        ...roundStyle,
    };

    return (
        <div style={styles} className={classNames('ui-skeleton', {}, [className])} />
    );
});
