export type KeysOf<T> = keyof T;
export type ValuesOf<T> = T[KeysOf<T>];

export type ClassModifiers = Record<string, boolean>;
