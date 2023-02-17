import * as React from 'react';

import { IPmProps } from './IPmProps';
import PermissionManagement from './Permission_management';


export default class Pm extends React.Component<IPmProps, {}> {
  public render(): React.ReactElement<IPmProps> {
   
     
    return(
      <PermissionManagement props={this.props}/>
    );
   
  }
}
