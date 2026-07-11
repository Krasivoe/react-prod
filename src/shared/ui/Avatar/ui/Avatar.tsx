import './styles.scss';
import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import defaultAvatar from '@/shared/assets/icons/ui/default_avatar.jpg';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
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
            src={src || defaultAvatar}
            style={styles}
            alt={alt}
        />
    );
});
