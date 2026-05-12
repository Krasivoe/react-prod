import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/auth-by-username';
import { getUserAuthData, userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={cls.signButton}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    label={t('Выйти')}
                    onClick={onLogout}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.signButton}
                theme={ButtonTheme.CLEAR_INVERTED}
                label={t('Войти')}
                onClick={onShowModal}
            />

            {isAuthModal
                && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
        </div>
    );
}
