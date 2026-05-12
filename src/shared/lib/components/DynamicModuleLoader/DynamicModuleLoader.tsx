import { type PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReducersList, ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/store-provider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps extends PropsWithChildren {
    reducers: ReducersList
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
        });

        dispatch({ type: '@INIT loginForm reducer' });

        return () => {
            if (!removeAfterUnmount) return;

            Object.entries(reducers).forEach(([name, _reducer]: ReducersListEntry) => {
                store.reducerManager.remove(name);
            });

            dispatch({ type: '@DESTROY loginForm reducer' });
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
