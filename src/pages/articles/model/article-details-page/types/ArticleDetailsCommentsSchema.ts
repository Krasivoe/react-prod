import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment, string> {
    isLoading?: boolean;
    error?: string;
}
