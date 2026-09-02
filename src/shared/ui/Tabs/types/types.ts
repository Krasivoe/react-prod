import { ReactNode } from 'react';

export interface TabItem<T extends string = string> {
    value: T;
    content: ReactNode
}
