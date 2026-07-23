import { ArticlesSchema } from '../../types/articlesSchema';
import { TestAsyncClass } from '@/shared/config/tests/test-async-thunk/TestAsyncClass';
import { fetchArticlesList } from '../fetch-articles-list/fetchArticlesList';
import { fetchNextArticles } from './fetchNextArticles';

const articlesState: DeepPartial<ArticlesSchema> = {
    page: 2,
    ids: [],
    entities: {},
    limit: 5,
    isLoading: false,
};

jest.mock('../fetch-articles-list/fetchArticlesList');

describe('fetchNextArticles', () => {
    test('should fetch articles with next page param', async () => {
        const thunk = new TestAsyncClass(fetchNextArticles, {
            articles: {
                ...articlesState,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('should not be called', async () => {
        const thunk = new TestAsyncClass(fetchNextArticles, {
            articles: {
                ...articlesState,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('should not be called when loading is true', async () => {
        const thunk = new TestAsyncClass(fetchNextArticles, {
            articles: {
                ...articlesState,
                hasMore: true,
                isLoading: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
