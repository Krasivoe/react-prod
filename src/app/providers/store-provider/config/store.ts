import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/counter';
import { StateSchema } from '@/app/providers/store-provider';
import { userReducer } from '@/entities/user';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
