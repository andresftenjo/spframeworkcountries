import * as React from 'react';
import styles from './Regionwp.module.scss';
import { IRegionwpProps } from './IRegionwpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import Countrywp from './Countrywp';

import { IHelloUserPartProps } from './IHelloUserPartProps';
import { IHelloUserPartState } from './IHelloUserPartState';

export default class Regionwp extends React.Component<IHelloUserPartProps, IHelloUserPartState> {

  constructor(props: IHelloUserPartProps) {
    super(props);
    this.state = { data: null, isValid: false, countries: [], showingDetails:false , currentCountry: null};
  }

  public componentDidUpdate(): void {
    $('#countrytbl').DataTable();  
  }
  public componentDidMount(): void {
    fetch(
        'https://restcountries.eu/rest/v2/all',
        {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }
    ).then(response => {
        return response.json();
    }).then(json => {
        this.setState({ data: "json.Title", isValid: true, countries:json });
    }).catch(e => {
        console.log(e);
    });

  }

  openCountry = (code) => {

      fetch(
        "https://restcountries.eu/rest/v2/alpha/" + code,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }
        ).then(response => {
            return response.json();
        }).then(json => {
            this.setState({ showingDetails: true, currentCountry: json });
        }).catch(e => {
            console.log(e);
        });

  }

  closeDescription = () => {
    this.setState({ showingDetails: false, currentCountry: null });
  };

  public render(): React.ReactElement<IHelloUserPartProps> {
    
    return (
      <div className={ styles.regionwp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to the Countries API!</span>
              <p className={ styles.subTitle }>Check the full contry list, click each flag to go the country details.</p>
              {/* <p className={ styles.description }>{escape(this.state.data)}</p> */}
            </div>
          </div>
        </div>
        <div className={styles.spListContainer}>
          <table id="countrytbl" className="table table-striped">
            <thead>
              <tr>
                <th>Country</th>
                <th>Languages</th>
                <th>Currencies</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
                {this.state.countries.map(country => {
                  return (
                    <tr>
                      <td>
                          {country.name}
                      </td>
                      <td>
                          {
                            country.languages.map(function(item, index) {
                              return (index ? ', ' : '') + item.name;
                            })
                          }
                      </td>
                      <td>
                          {
                            country.currencies.map(function(item, index) {
                              return (index ? ', ' : '') + item.name;
                            })
                          }
                      </td>
                      <td>
                        <a onClick={() => this.openCountry(country.alpha2Code)}>
                          <img className={styles.flagImgThumb} src={country.flag}></img>
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {this.state.showingDetails ?
           <Countrywp 
              name={this.state.currentCountry.name} 
              area={this.state.currentCountry.area} 
              flag={this.state.currentCountry.flag} 
              currencies={this.state.currentCountry.currencies} 
              languages={this.state.currentCountry.languages} 
              subregion={this.state.currentCountry.subregion} 
              capital={this.state.currentCountry.capital} 
              population={this.state.currentCountry.population}  
              closeEvent={this.closeDescription}
              /> :
           null
        }
      </div>
    );
  }
}


