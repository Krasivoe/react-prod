import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { AsyncReducersMap, StateSchema } from '../types/schema';

interface StoreProviderProps extends PropsWithChildren {
    initialState?: Partial<StateSchema>;
    asyncReducers?: AsyncReducersMap;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
