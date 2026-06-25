import React, {
    type PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';
import { ClassMods, classNames } from '@/shared/lib/class-names/classNames';
import { Nullable } from '@/shared/types/common';
import { Portal } from '@/shared/ui/Portal';

interface ModalProps extends PropsWithChildren {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    closeOnEsc?: boolean;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        closeOnEsc = true,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<Nullable<ReturnType<typeof setTimeout>>>(null);

    const shouldRender = useMemo(() => !lazy || isMounted, [isMounted, lazy]);

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
        if (isOpen) setIsMounted(isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && closeOnEsc) {
            document.addEventListener('keydown', onKeyDown);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);

            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown, closeOnEsc]);

    const mods: ClassMods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        shouldRender
            ? (
                <Portal>
                    <div className={classNames((cls.modal), mods, [className])}>
                        <div className={cls.overlay} onClick={closeHandler}>
                            <div className={cls.content} onClick={onContentClick}>
                                {children}
                            </div>
                        </div>
                    </div>
                </Portal>
            )
            : null
    );
};
