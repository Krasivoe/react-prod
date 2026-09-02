import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { AsyncReducersMap, ReduxStoreWithManager, StateSchema } from '../types/schema';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { scrollSaveReducer } from '@/features/scroll-save';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: AsyncReducersMap,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
    } as ReducersMapObject<StateSchema>;

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });

    (store as ReduxStoreWithManager).reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
