import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema, ThunkConfig } from '@/app/providers/store-provider';

type ActionCreatorType<Returned, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<
    Returned,
    Arg,
    ThunkConfig<RejectValue>>

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

    constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectValue>) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.extra = {
            api: mockedAxios,
            navigate: jest.fn(),
        };
    }

    async callThunk(arg?: Arg) {
        const action = this.actionCreator(arg as Arg);

        return action(this.dispatch, this.getState, this.extra);
    }
}
