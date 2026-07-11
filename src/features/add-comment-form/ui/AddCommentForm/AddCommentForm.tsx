import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './AddCommentForm.module.scss';
import { AsyncReducersMap } from '@/app/providers/store-provider';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getAddCommentFormText } from '../../model/selectors/commentForm';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: AsyncReducersMap = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text);
        dispatch(addCommentFormActions.setText(''));
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames((cls.addCommentForm), {}, [className])}>
                <Input
                    value={text}
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                />

                <Button label={t('Отправить')} onClick={onSendCommentHandler} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
