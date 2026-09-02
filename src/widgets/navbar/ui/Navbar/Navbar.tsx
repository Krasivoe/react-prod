import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/auth-by-username';
import { getUserAuthData, userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/route-config/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const { t: tArticle } = useTranslation('article');

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
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text className={cls.appName} title={t('Zaits App')} theme={TextTheme.INVERTED} />

                <AppLink to={RoutePath.articleCreate} theme={AppLinkTheme.SECONDARY}>
                    {tArticle('Создать статью')}
                </AppLink>

                <Button
                    className={cls.signButton}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    label={t('Выйти')}
                    onClick={onLogout}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.signButton}
                theme={ButtonTheme.CLEAR_INVERTED}
                label={t('Войти')}
                onClick={onShowModal}
            />

            {isAuthModal
                && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
        </header>
    );
});
