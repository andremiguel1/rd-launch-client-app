import React, { Component, ReactNode } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchDetail from "../atoms/LaunchDetail";

class Latest extends Component {
  render(): ReactNode {
    const launch = {
      date_local: new Date().toDateString(),
      details: "Launch details",
      name: "Launch Name",
      id: "abcd1efgh2",
      flight_number: "125",
    } as LaunchModel;
    return (
      <React.Fragment>
        <LaunchDetail
          title="Latest Launch"
          date_local={launch.date_local}
          details={launch.details}
          name={launch.name}
          flight_number={launch.flight_number}
          id={launch.id}
        />
      </React.Fragment>
    );
  }
}

export default Latest;
