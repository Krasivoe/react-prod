import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { AdditionalClasses, classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { Nullable } from '@/shared/types/common';
import { InputType, InputTypeValue } from '@/shared/ui/Input/types';

type OmittedAttrs = 'value' | 'onChange' | 'type' | 'readOnly';
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, OmittedAttrs>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: InputTypeValue;
    autoFocus?: boolean;
    readonly?: boolean;
}

const NUMBER_REGEX = /^-?\d*\.?\d*$/;

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = InputType.TEXT,
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<Nullable<HTMLInputElement>>(null);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (!autoFocus) return;

        setIsFocused(true);

        inputRef.current?.focus();

        setCaretPosition(inputRef.current?.value.length || 0);
    }, [autoFocus, value]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (type === InputType.NUMBER) {
            const isValidNumber = NUMBER_REGEX.test(newValue);

            if (!isValidNumber && newValue !== '') return;
        }

        onChange?.(newValue);

        setCaretPosition(newValue.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart || 0);
    };

    const additionalClasses: AdditionalClasses = [
        className,
        readonly && 'ui-input_readonly',
    ];

    return (
        <div className={classNames('ui-input', {}, additionalClasses)}>
            {placeholder
                && (
                    <div className="ui-input__placeholder">
                        {`${placeholder}﹥`}
                    </div>
                )}

            <div className="ui-input__caret-wrapper">
                <input
                    ref={inputRef}
                    type={InputType.TEXT}
                    value={value}
                    onChange={onChangeHandler}
                    className="ui-input__input"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />

                {isCaretVisible
                    && (
                        <span
                            className="ui-input__caret"
                            style={{ left: `${caretPosition}ch` }}
                        />
                    )}
            </div>
        </div>
    );
});
