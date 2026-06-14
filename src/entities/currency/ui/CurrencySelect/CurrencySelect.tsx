import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import { Currency, CurrencyValue } from '../../model/types/currency';
import { Select } from '@/shared/ui/Select';

interface CurrencySelectProps {
    className?: string;
    value?: CurrencyValue;
    onChange?: (value: CurrencyValue) => void
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, label: Currency.RUB },
    { value: Currency.EUR, label: Currency.EUR },
    { value: Currency.USD, label: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string) => {
        onChange?.(val as CurrencyValue);
    }, [onChange]);

    return (
        <Select
            value={value}
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
