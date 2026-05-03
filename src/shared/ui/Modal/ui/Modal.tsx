import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';
import { classNames } from '@/shared/lib/class-names/classNames';
import { ClassModifiers } from '@/shared/types/common';
import { Portal } from '@/shared/ui/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    closeOnEsc?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        closeOnEsc = true,
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const closeHandler = useCallback(() => {
        if (!onClose) return;

        setIsClosing(true);

        timerRef.current = setTimeout(() => {
            onClose();

            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen && closeOnEsc) {
            document.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);

            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown, closeOnEsc]);

    const mods: ClassModifiers = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames((cls.modal), mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
