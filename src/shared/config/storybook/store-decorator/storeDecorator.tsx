import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { AsyncReducersMap, StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { loginReducer } from '@/features/auth-by-username/model/slices/loginSlice';
import { profileReducer } from '@/entities/profile';
import { articleDetailsReducer } from '@/entities/article/model/slices/ArticleDetailsSlice';
import { addCommentFormReducer } from '@/features/add-comment-form/model/slices/addCommentFormSlice';
import { articlesReducer } from '@/pages/articles/model/slices/articlesSlice';
import { articleDetailsPageReducer } from '@/pages/article-details/model/slices';

interface StoreDecoratorParameters {
    state: Partial<StateSchema>;
    asyncReducers?: AsyncReducersMap
}

const ASYNC_REDUCERS: AsyncReducersMap = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articles: articlesReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { state, asyncReducers } = parameters as StoreDecoratorParameters;

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...ASYNC_REDUCERS, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};
