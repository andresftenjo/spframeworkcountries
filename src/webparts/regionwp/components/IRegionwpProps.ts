import { ICountryProps } from './ICountryProps';

export interface IRegionwpProps {
  description: string;
  name: string;
  languages: [];
  currencies: [];
  flag: string;
  countryList: ICountryItem[];
  showingDetails: boolean;
  currentCountry:ICountryProps,
  getCountryDetail:void
}
export interface ICountryItem {
  alpha2Code: string;
  name: string;
  flag: string;
  languages: ICountryItemDetail[];
  currencies: ICountryItemDetail[];
}
export interface ICountryItemDetail {
  name: string;
}
