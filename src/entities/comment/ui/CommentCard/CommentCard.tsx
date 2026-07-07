import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

const AVATAR_SIZE = 30;

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames((cls.commentCard), {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} border="50%" />
                    <Skeleton height={24} width={100} />
                </div>

                <Skeleton className={cls.skeletonText} width="80%" height={24} />
                <Skeleton width="60%" height={24} />
            </div>
        );
    }

    return (
        <div className={classNames((cls.commentCard), {}, [className])}>
            <div className={cls.header}>
                <Avatar src={comment.user.avatar} size={AVATAR_SIZE} />

                <Text title={comment.user.username} />
            </div>

            <Text text={comment.text} />
        </div>
    );
});
