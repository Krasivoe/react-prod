import '@/app/styles/index.scss';
import type { Decorator, StoryContext } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import { loginReducer } from '@/features/auth-by-username/model/slice/loginSlice';

interface StoreDecoratorParameters {
    state: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}

type StoreDecoratorContext = StoryContext & {
    parameters: StoryContext['parameters'] & StoreDecoratorParameters;
};

const ASYNC_REDUCERS: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator: Decorator = (StoryComponent, { parameters }: StoreDecoratorContext) => {
    const { state, asyncReducers } = parameters;

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...ASYNC_REDUCERS, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};
