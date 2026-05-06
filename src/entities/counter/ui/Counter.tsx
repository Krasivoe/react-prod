import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '@/entities/counter/model/slice/counterSlice';
import { getCounterValue } from '@/entities/counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();

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
