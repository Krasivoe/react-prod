import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { AsyncReducersMap, StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';
import { profileReducer } from '@/entities/profile';
import { articleDetailsReducer } from '@/entities/article/model/slice/ArticleDetailsSlice';

interface StoreDecoratorParameters {
    state: Partial<StateSchema>;
    asyncReducers?: AsyncReducersMap
}

const ASYNC_REDUCERS: AsyncReducersMap = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator: Decorator = (StoryComponent, { parameters }) => {
    const { state, asyncReducers } = parameters as StoreDecoratorParameters;

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...ASYNC_REDUCERS, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};
