import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/get-counter-value/getCounterValue';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const Counter = () => {
    const dispatch = useAppDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="title-value">
                {counterValue}
            </h1>

            <Button data-testid="increment-btn" onClick={increment} label="increment" />
            <Button data-testid="decrement-btn" onClick={decrement} label="decrement" />
        </div>
    );
};
