import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { getProfileReadonly, profileActions, updateProfileData } from '@/entities/profile';
import { classNames } from '@/shared/lib/class-names/classNames';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

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
        </div>
    );
};
