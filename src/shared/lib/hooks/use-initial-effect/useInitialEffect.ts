import { DependencyList, useEffect } from 'react';
import { PROJECT } from '@/shared/constants/global';

export const useInitialEffect = (callback: () => void, deps: DependencyList = []) => {
    useEffect(() => {
        if (__PROJECT__ !== PROJECT.storybook) callback();

        // eslint-disable-next-line
    }, deps);
};
