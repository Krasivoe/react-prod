export type KeysOf<T> = keyof T;

export type ValuesOf<T> = T[KeysOf<T>];
