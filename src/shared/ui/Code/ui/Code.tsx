import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/common/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames('ui-code', {}, [className])}>
            <Button
                className="ui-code__copy"
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className="ui-code__copy-icon" />
            </Button>

            <code>
                {text}
            </code>
        </pre>
    );
});
