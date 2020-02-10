import * as React from 'react';
import styles from './Regionwp.module.scss';
import { ICountryProps } from './ICountryProps';

export default class Countrywp extends React.Component<ICountryProps, {}> {

  constructor(props){
    super(props);
    this.state={ currentCountry: {}}
  }

  public render(): React.ReactElement<ICountryProps> {
    return (
      <div className={ styles.countryModal }>
        <div className={ styles.modalContent }>
          
            <h1>{ this.props.name }</h1>
              <img className={ styles.imgLarge } src={this.props.flag} />
              <p>
                <label>Region: { this.props.subregion }</label>
              </p>
              <p>
                <label>Capital: { this.props.capital }</label>
              </p>
              <p>
                <label>Population: { this.props.population.toLocaleString('en-US', { minimumFractionDigits: 0 }) }</label>
              </p>
              <p>
                <label>Area: { this.props.area.toLocaleString('en-US', { minimumFractionDigits: 0 }) } km2</label>
              </p>
              <p>
                <label>Languages:&nbsp;
                  {
                    this.props.languages.map(function(item, index) {
                      return (index ? ', ' : '') + item.name;
                    })}
                </label>
              </p>
              <p>
                <label>Currencies:&nbsp; 
                  {
                    this.props.currencies.map(function(item, index) {
                      return (index ? ', ' : '') + item.name;
                    })}
                </label>
              </p>
              <button className={ styles.closeBtn }  onClick={() => this.props.closeEvent()}>Close</button>
        </div>  
      </div>
    );
  }
}
