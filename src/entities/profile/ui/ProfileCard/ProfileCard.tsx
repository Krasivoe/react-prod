import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '@/entities/profile/model/selectors/get-profile-data/getProfileData';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profile = useSelector(getProfileData);
    // const isLoading = useSelector(getLoginIsLoading);
    // const error = useSelector(getProfileError);

    return (
        <div className={classNames((cls.profileCard), {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />

                <Button className={cls.editBtn} label={t('Редактировать')} theme={ButtonTheme.OUTLINE} />
            </div>

            <div className={cls.data}>
                <Input value={profile?.first} placeholder={t('Имя')} />

                <Input value={profile?.lastname} placeholder={t('Фамилия')} />
            </div>
        </div>
    );
};
