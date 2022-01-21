import { Typography } from '@mui/material';
import React, { Component, ReactNode} from 'react';
import { LaunchModel } from '../../model/LaunchModel';
import { Title } from '../global/Title';

class Next extends Component
{ 
  render(): ReactNode
  {
    const launch = {
      date_local: new Date().toDateString(),
      details: 'Launch details',
      name: 'Launch Name',
      id: 'abcd1efgh2',
      flight_number: '125'
    } as LaunchModel;
    return (
      <React.Fragment>
        <Title>Next Launch #{launch.id}</Title>
        <Typography component="p" variant="h4">
          {launch.name}
        </Typography>
        <hr />
        <Typography color="text.secondary">
          {launch.details}
        </Typography>
        <hr />
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {launch.date_local}
        </Typography>
      </React.Fragment>
    );
  }
}
export default Next;