import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { Component, ReactNode} from 'react';
import { LaunchModel } from '../../model/LaunchModel';
import { Title } from '../global/Title';

class Upcoming extends Component
{
  render(): ReactNode
  {
    const rows = [];

    return (
      <React.Fragment>
        <Title>Upcoming Launches</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Details</TableCell>
              <TableCell align="right">Flight Number</TableCell>
              <TableCell>Date Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: LaunchModel) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell align="right">{row.flight_number}</TableCell>
                <TableCell>{row.date_local}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
export default Upcoming;