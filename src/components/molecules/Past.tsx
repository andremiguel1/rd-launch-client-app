import React, { Component, ReactNode } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchTable from "../atoms/LaunchTable";

class Past extends Component {
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
    const rows = [];

    return (
      <React.Fragment>
        <LaunchTable title="Past Launches" launches={rows}></LaunchTable>
      </React.Fragment>
    );
  }
}
export default Past;
