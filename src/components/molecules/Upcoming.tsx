import React, { Component, ReactNode } from "react";
import LaunchTable from "../atoms/LaunchTable";

class Upcoming extends Component {
  render(): ReactNode {
    const rows = [];

    return (
      <React.Fragment>
        <LaunchTable title="Upcoming Launches" launches={rows}></LaunchTable>
      </React.Fragment>
    );
  }
}
export default Upcoming;
