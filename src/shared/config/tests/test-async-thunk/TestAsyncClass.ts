import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema, ThunkConfig } from '@/app/providers/store-provider';

type ActionCreatorArgs<Arg> = [Arg] extends [void] ? [] : [arg: Arg];

type ActionCreatorType<Returned, Arg, RejectValue> = (
    ...args: ActionCreatorArgs<Arg>
) => AsyncThunkAction<Returned, Arg, ThunkConfig<RejectValue>>

interface Extra {
    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;
}

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncClass<Returned, Arg, RejectValue> {
    actionCreator: ActionCreatorType<Returned, Arg, RejectValue>;

    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    readonly extra: Extra;

    constructor(
        actionCreator: ActionCreatorType<Returned, Arg, RejectValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };
    }

    async callThunk(...args: ActionCreatorArgs<Arg>) {
        const action = this.actionCreator(...args);

        return action(this.dispatch, this.getState, this.extra);
    }
}
