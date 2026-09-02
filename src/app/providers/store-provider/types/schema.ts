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
import { AddCommentFormSchema } from '@/features/add-comment-form';
import { ArticlesSchema } from '@/pages/articles';
import { ScrollSaveSchema } from '@/features/scroll-save';
import { ArticleDetailsPageSchema } from '@/pages/article-details';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave: ScrollSaveSchema;

    // async
    loginForm?: LoginSchema
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articles?: ArticlesSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
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
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
