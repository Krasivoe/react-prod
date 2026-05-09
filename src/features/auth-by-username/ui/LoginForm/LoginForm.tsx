import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames((cls.loginForm), {}, [className])}>
            <div className={cls.loginFields}>
                <Input autoFocus placeholder={t('Введите username')} type="text" />

                <Input placeholder={t('Введите пароль')} type="text" />
            </div>

            <Button className={cls.loginBtn} label={t('Войти')} />
        </div>
    );
};
