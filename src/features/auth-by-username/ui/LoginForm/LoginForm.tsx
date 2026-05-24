import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/login-by-username/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { getLoginUsername } from '../../model/selectors/get-login-username/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/get-login-password/getLoginPassword';
import { getLoginError } from '../../model/selectors/get-login-error/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/get-login-is-loading/getLoginIsLoading';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const reducers: AsyncReducersMap = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));

        if (res.meta.requestStatus === 'fulfilled' && onSuccess) onSuccess();
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames((cls.form), {}, [className])}>
                <Text className={cls.title} title={t('Форма авторизации')} />

                {error && (
                    <Text
                        className={cls.error}
                        text={t('Неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
                )}

                <div className={cls.fields}>
                    <Input
                        autoFocus
                        placeholder={t('Введите username')}
                        value={username}
                        onChange={onChangeUsername}
                    />

                    <Input
                        placeholder={t('Введите пароль')}
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

                <Button
                    className={cls.submit}
                    label={t('Войти')}
                    theme={ButtonTheme.OUTLINE}
                    disabled={isLoading}
                    onClick={onLoginClick}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
