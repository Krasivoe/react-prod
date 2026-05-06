import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '@/entities/counter';

describe('counterSlice', () => {
    let state: Partial<CounterSchema>;

    beforeEach(() => {
        state = { value: 10 };
    });

    test('should decrement counter', () => {
        const reducer = counterReducer(state as CounterSchema, counterActions.decrement());

        expect(reducer).toEqual({ value: 9 });
    });

    test('should increment counter', () => {
        const reducer = counterReducer(state as CounterSchema, counterActions.increment());

        expect(reducer).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        const reducer = counterReducer(undefined, counterActions.increment());

        expect(reducer).toEqual({ value: 1 });
    });
});
