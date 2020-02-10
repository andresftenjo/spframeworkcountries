import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'RegionwpWebPartStrings';
import Regionwp from './components/Regionwp';
import { IRegionwpProps } from './components/IRegionwpProps';

import { SPComponentLoader } from '@microsoft/sp-loader'; 
import * as $ from 'jquery';
import 'DataTables.net';

import { IHelloUserPartProps } from './components/IHelloUserPartProps';
import { IHelloUserPartWebPartProps } from './IHelloUserPartWebPartProps';

export interface IRegionwpWebPartProps {
  description: string;
  name: string;
  languages: [];
  currencies: [];
  flag: string;
  countryList:[];
}
export interface ISPListRegion{
  value:IRegionwpWebPartProps[];
}
export interface ISPRegionDetailItem{
  name: string;
}

export default class RegionwpWebPart extends BaseClientSideWebPart <IHelloUserPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloUserPartProps> = React.createElement(
      Regionwp,
      {
        busyMessage: "Working on it..."
        //name: this.properties.name,
        //languages: this.properties.languages,
        //currencies: this.properties.currencies,
        //flag: this.properties.flag,
        //countryList: this.properties.countryList
      }
    );
    //this._renderListDataAsync();
    ReactDom.render(element, this.domElement);
    SPComponentLoader.loadCss("https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css");  
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
