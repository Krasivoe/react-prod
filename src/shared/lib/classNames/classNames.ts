type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mode: Mods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([_, value]) => !!value)
            .map(([className]) => className),
    ].join(' ');
};
