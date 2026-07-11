import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames((cls.commentList), {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames((cls.commentList), {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}
                        className={cls.comment}
                    />
                ))
                : <Text title={t('Комментарии отсутствуют')} />}
        </div>
    );
});
