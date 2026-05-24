import {
    combineReducers, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from '../types/schema';
import { Undefinable } from '@/shared/types/common';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;

    let keysToRemove: StateSchemaKey[] = [];

    const rebuildReducer = () => {
        combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
    };

    return {
        getReducerMap: () => reducers,

        reduce: (state: Undefinable<StateSchema>, action: UnknownAction) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state![key];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) return;

            reducers[key] = reducer;

            rebuildReducer();
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) return;

            delete reducers[key];
            keysToRemove.push(key);

            rebuildReducer();
        },
    };
}
