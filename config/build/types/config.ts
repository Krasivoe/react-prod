import type { ValuesOf } from '@/shared/types/common';

export const BuildMode = {
    DEV: 'development',
    PROD: 'production',
} as const;

export type BuildModeValue = ValuesOf<typeof BuildMode>;

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildModeValue;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildModeValue,
    port: number;
}
