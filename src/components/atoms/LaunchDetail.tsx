import { Typography } from "@mui/material";
import React, { Component, ReactNode } from "react";
import { LaunchModel } from "../../model/LaunchModel";
import { Title } from "../atoms/Title";

class LaunchDetail extends Component<LaunchModel> {
  render(): ReactNode {
    return (
      <React.Fragment>
        <Title>{this.props.title}</Title>
        <Typography color="#000000">{this.props.date_local}</Typography>
        <Typography component="p">
          Number: #{this.props.flight_number}
        </Typography>
        <Typography>Name: {this.props.name}</Typography>
        <hr />
        <Typography color="#000000">{this.props.details}</Typography>
      </React.Fragment>
    );
  }
}

export default LaunchDetail;
