import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import cls from './ProfilePageHeader.module.scss';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '@/entities/profile';
import { classNames } from '@/shared/lib/class-names/classNames';
import { getUserAuthData } from '@/entities/user';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const readonly = useSelector(getProfileReadonly);

    const canEdit = useMemo(
        () => authData?.id === profileData?.id,
        [authData?.id, profileData?.id],
    );

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames((cls.header), {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div className={cls.actions}>
                    {readonly ? (
                        <Button
                            label={t('Редактировать')}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        />
                    ) : (
                        <>
                            <Button
                                className={cls.editBtn}
                                label={t('Отменить')}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancel}
                            />

                            <Button
                                className={cls.editBtn}
                                label={t('Сохранить')}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
