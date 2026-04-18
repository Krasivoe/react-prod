import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames((cls.pageError), {}, [className])}>
            <div className={cls.content}>
                <p className={cls.text}>{t('У нас что-то сломалось...')}</p>

                <Button className={cls.action} label={t('Обновить страницу')} onClick={reloadPage} />
            </div>
        </div>
    );
};
