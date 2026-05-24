export type KeysOf<T> = keyof T;
export type ValuesOf<T> = T[KeysOf<T>];

export type Maybe<T> = T | undefined | null
export type Undefinable<T> = T | undefined;
export type Nullable<T> = T | null;
