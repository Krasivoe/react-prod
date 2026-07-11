import { type PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { AsyncReducersMap, ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/store-provider';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';

interface DynamicModuleLoaderProps extends PropsWithChildren {
    reducers: AsyncReducersMap
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);

            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (!removeAfterUnmount) return;

            Object.entries(reducers).forEach(([name, _reducer]) => {
                store.reducerManager.remove(name as StateSchemaKey);

                dispatch({ type: `@DESTROY ${name as StateSchemaKey} reducer` });
            });
        };
        // eslint-disable-next-line
    }, []);

    return children;
};
