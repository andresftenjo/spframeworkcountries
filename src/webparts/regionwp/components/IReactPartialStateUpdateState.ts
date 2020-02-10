export interface ICountryItemDetail {
    name: string;
}
export interface ICountryItem {
    alpha2Code: string;
    name: string;
    flag: string;
    languages: ICountryItemDetail[];
    currencies: ICountryItemDetail[];
}

export interface IReactPartialStateUpdateState {  
    /* currentDate: Date;  
    randomNumber: number; */  
    name: string;  
    countryList: ICountryItem[];
} 