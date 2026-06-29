import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { ClassMods, classNames } from '@/shared/lib/class-names/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextTheme, TextAlign } from '@/shared/ui/Text';
import { Input, InputType } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrencySelect, CurrencyValue } from '@/entities/currency';
import { CountrySelect, CountryValue } from '@/entities/country';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: CurrencyValue) => void;
    onChangeCountry?: (value: CountryValue) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const [firstFocus, setFirstFocus] = useState(false);

    const mods: ClassMods = {
        [cls.editing]: !readonly,
    };

    useEffect(() => {
        setFirstFocus(!readonly);
    }, [readonly]);

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке данных')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames((cls.profileCard), mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatar}>
                        <Avatar src={data?.avatar} alt={t('аватар')} size={100} />
                    </div>
                )}

                <Input
                    value={data?.first}
                    autoFocus={firstFocus}
                    readonly={readonly}
                    placeholder={t('Имя')}
                    onChange={onChangeFirstName}
                />

                <Input
                    value={data?.lastname}
                    readonly={readonly}
                    placeholder={t('Фамилия')}
                    onChange={onChangeLastName}
                />

                <Input
                    value={data?.age}
                    type={InputType.NUMBER}
                    readonly={readonly}
                    placeholder={t('Возраст')}
                    onChange={onChangeAge}
                />

                <Input
                    value={data?.city}
                    readonly={readonly}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                />

                <Input
                    value={data?.username}
                    readonly={readonly}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                />

                <Input
                    value={data?.avatar}
                    readonly={readonly}
                    placeholder={t('Ссылка на аватар')}
                    onChange={onChangeAvatar}
                />

                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
