import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import { Country, CountryValue } from '../../model/types/country';
import { Select } from '@/shared/ui/Select';

interface CountrySelectProps {
    className?: string;
    value?: CountryValue;
    onChange?: (value: CountryValue) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RUSSIA, label: Country.RUSSIA },
    { value: Country.BELARUS, label: Country.BELARUS },
    { value: Country.KAZAKHSTAN, label: Country.KAZAKHSTAN },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string) => {
        onChange?.(val as CountryValue);
    }, [onChange]);

    return (
        <Select
            value={value}
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
