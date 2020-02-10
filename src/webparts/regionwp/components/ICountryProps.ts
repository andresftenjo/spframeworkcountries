export interface ICountryProps {
  name: string;
  languages: ICountryItemDetail[];
  currencies: ICountryItemDetail[];
  flag: string;
  subregion: string;
  capital: string;
  population: number;
  area: number;
  closeEvent: Function
} 
export interface ICountryItemDetail {
  name: string;
}
