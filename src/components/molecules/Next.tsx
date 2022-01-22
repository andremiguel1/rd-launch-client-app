import React, { Component, ReactNode } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import LaunchDetail from "../atoms/LaunchDetail";

class Next extends Component {
  render(): ReactNode {
    const launch = {
      date_local: new Date().toDateString(),
      details: "Next Launch details",
      name: "Next Launch Name",
      id: "abcd1efgh2",
      flight_number: "42",
    } as LaunchModel;
    return (
      <React.Fragment>
        <LaunchDetail
          title="Next Launch"
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
export default Next;
