import React, { Component, ReactNode } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Title } from "../atoms/Title";
import { LaunchModel } from "../../model/LaunchModel";

class LaunchTable extends Component<{
  title: string;
  launches: Array<LaunchModel>;
}> {
  // Generate Order Data
  createData(
    id: string,
    name: string,
    details: string,
    flight_number: string,
    date_local: string
  ): LaunchModel {
    return { id, name, details, flight_number, date_local } as LaunchModel;
  }

  render(): ReactNode {
    return (
      <React.Fragment>
        <Title>{this.props.title}</Title>
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
            {this.props.launches.map((row: LaunchModel) => (
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
    );
  }
}
export default LaunchTable;
