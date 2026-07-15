import { ValuesOf } from '@/shared/types/common';
import { User } from '@/entities/user';

export const ArticleBlockType = {
    CODE: 'CODE',
    IMAGE: 'IMAGE',
    TEXT: 'TEXT',
} as const;

type ArticleBlockTypeMap = typeof ArticleBlockType;
export type ArticleBlockTypeValue = ValuesOf<ArticleBlockTypeMap>;

export const ArticleType = {
    IT: 'IT',
    SCIENCE: 'SCIENCE',
    ECONOMICS: 'ECONOMICS',
} as const;

export type ArticleTypeValue = ValuesOf<typeof ArticleType>;

export const ArticleView = {
    SMALL: 'small',
    BIG: 'big',
} as const;

export type ArticleViewValue = ValuesOf<typeof ArticleView>;

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockTypeValue;
}

export interface ArticleCodeBlockData extends ArticleBlockBase {
    type: ArticleBlockTypeMap['CODE'];
    code: string;
}

export interface ArticleImageBlockData extends ArticleBlockBase {
    type: ArticleBlockTypeMap['IMAGE'];
    src: string;
    title: string;
}

export interface ArticleTextBlockData extends ArticleBlockBase {
    type: ArticleBlockTypeMap['TEXT'];
    title?: string;
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlockData | ArticleImageBlockData | ArticleTextBlockData;

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypeValue[];
    blocks: ArticleBlock[];
}
