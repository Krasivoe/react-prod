import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    let state: Partial<CounterSchema>;

    beforeEach(() => {
        state = { value: 10 };
    });

    test('should decrement counter', () => {
        const action = counterActions.decrement();
        const newState = counterReducer(state as CounterSchema, action);

        expect(newState).toEqual({ value: 9 });
    });

    test('should increment counter', () => {
        const action = counterActions.increment();
        const newState = counterReducer(state as CounterSchema, action);

        expect(newState).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        const action = counterActions.increment();
        const newState = counterReducer(undefined, action);

        expect(newState).toEqual({ value: 1 });
    });
});
