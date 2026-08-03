import { ChangeEvent, useMemo } from 'react';
import { AdditionalClasses, classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { DefaultSize, DefaultSizeValue } from '@/shared/types/components';
import { SelectOption } from '@/shared/ui/Select/types';

interface SelectProps<T extends string = string> {
    className?: string;
    size?: DefaultSizeValue
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string = string>(props: SelectProps<T>) => {
    const {
        className,
        size = DefaultSize.M,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const additionalClasses: AdditionalClasses = [
        className,
        size && `ui-select_size_${size}`,
    ];

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className="ui-select__option"
            value={opt.value}
            key={opt.value}
        >
            {opt.label}
        </option>
    )), [options]);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    return (
        <div className={classNames('ui-select', {}, additionalClasses)}>
            {label && (
                <span className="ui-select__label">
                    {`${label}﹥`}
                </span>
            )}

            <select
                className="ui-select__select"
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
