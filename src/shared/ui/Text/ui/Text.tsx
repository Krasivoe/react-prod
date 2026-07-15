import { memo } from 'react';
import { AdditionalClasses, classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import {
    TextAlign, TextAlignValue, TextSize, TextSizeValue, TextTheme, TextThemeValue,
} from '@/shared/ui/Text/types';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextThemeValue;
    align?: TextAlignValue;
    size?: TextSizeValue;
    hint?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        hint,
    } = props;

    const additionalClasses: AdditionalClasses = [
        className,
        `ui-text_theme_${theme}`,
        `ui-text_align_${align}`,
        `ui-text_size_${size}`,
    ];

    return (
        <div title={hint} className={classNames('ui-text', {}, additionalClasses)}>
            {title && (
                <p className={classNames('ui-text__title', { 'ui-text__title_without-subtitle': !text })}>
                    {title}
                </p>
            )}

            {text && <p className="ui-text__text">{text}</p>}
        </div>
    );
});
