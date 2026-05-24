import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './Text.module.scss';
import { TextTheme, TextThemeValue } from '@/shared/ui/Text/types';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextThemeValue;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames((cls.textWrapper), {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}

            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
