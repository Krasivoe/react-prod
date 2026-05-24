import { CountyValue, CurrencyValue } from '@/shared/types/model';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: CurrencyValue;
    country: CountyValue;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
