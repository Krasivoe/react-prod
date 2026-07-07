import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/get-counter-value/getCounterValue';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';

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

            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="increment-btn" onClick={increment} label="increment" />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="decrement-btn" onClick={decrement} label="decrement" />
        </div>
    );
};
