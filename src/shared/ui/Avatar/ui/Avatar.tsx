import './styles.scss';
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={classNames('ui-avatar', {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    );
};
