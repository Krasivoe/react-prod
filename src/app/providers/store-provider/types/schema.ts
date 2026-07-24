import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/counter';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth-by-username';
import { KeysOf, Undefinable } from '@/shared/types/common';
import { ProfileSchema } from '@/entities/profile';
import { ArticleDetailsSchema } from '@/entities/article';
import { ArticleDetailsCommentsSchema } from '@/pages/article-details';
import { AddCommentFormSchema } from '@/features/add-comment-form';
import { ArticlesSchema } from '@/pages/articles';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articles?: ArticlesSchema
}

export type StateSchemaKey = KeysOf<StateSchema>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: Undefinable<StateSchema>, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, UnknownAction> {
    reducerManager: ReducerManager;
}

export type AsyncReducersMap = {
    [name in StateSchemaKey]?: Reducer;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
