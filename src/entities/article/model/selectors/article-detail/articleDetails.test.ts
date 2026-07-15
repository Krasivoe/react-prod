import { StateSchema } from '@/app/providers/store-provider';
import {
    Article,
    ArticleBlockType,
    ArticleType,
} from '../../types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

const mockArticle: Article = {
    id: '1',
    user: { id: '1', username: 'Petya' },
    title: 'title',
    subtitle: 'subtitle',
    img: 'imagePath',
    views: 10,
    createdAt: '05.05.2005',
    type: [ArticleType.IT],
    blocks: [
        {
            id: 'block_1',
            type: ArticleBlockType.CODE,
            code: 'code',
        },
    ],
};

describe('articleDetails', () => {
    describe('getArticleDetailsData', () => {
        test('should return data', () => {
            const state: DeepPartial<StateSchema> = {
                articleDetails: {
                    data: mockArticle,
                },
            };

            const article = getArticleDetailsData(state as StateSchema);

            expect(article).toEqual(mockArticle);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};

            const article = getArticleDetailsData(state as StateSchema);

            expect(article).toBeUndefined();
        });
    });

    describe('getArticleDetailsIsLoading', () => {
        test('should return isLoading', () => {
            const state: DeepPartial<StateSchema> = {
                articleDetails: {
                    isLoading: true,
                },
            };

            const isLoading = getArticleDetailsIsLoading(state as StateSchema);

            expect(isLoading).toBe(true);
        });

        test('should work with empty state', () => {
            const state: DeepPartial<StateSchema> = {};

            const isLoading = getArticleDetailsIsLoading(state as StateSchema);

            expect(isLoading).toBe(false);
        });
    });

    describe('getArticleDetailsError', () => {
        describe('getArticleDetailsError', () => {
            test('should return error', () => {
                const state: DeepPartial<StateSchema> = {
                    articleDetails: {
                        error: 'error',
                    },
                };

                const error = getArticleDetailsError(state as StateSchema);

                expect(error).toEqual('error');
            });

            test('should work with empty state', () => {
                const state: DeepPartial<StateSchema> = {};

                const error = getArticleDetailsError(state as StateSchema);

                expect(error).toBeUndefined();
            });
        });
    });
});
