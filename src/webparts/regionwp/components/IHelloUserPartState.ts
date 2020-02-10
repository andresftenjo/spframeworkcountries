export interface IHelloUserPartState {
    data: string;
    isValid: boolean; 
    countries:IRegionwpProps[];
    showingDetails: boolean;
    currentCountry: ICountryProps;
}

export interface ICountryProps {
    name: string;
    languages: ICountryItem[];
    currencies: ICountryItem[];
    flag: string;
    subregion: string;
    capital: string;
    population: number;
    area: number;
  } 

export interface IRegionwpProps {
    description: string;
    name: string;
    languages: ICountryItem[];
    currencies: ICountryItem[];
    flag: string;
    alpha2Code: string;
}
export interface ICountryItem {
    name: string;
}
