import Typography from "@mui/material/Typography";
import React, { Component, ReactNode } from "react";

export class Title extends Component {
  render(): ReactNode {
    return (
      <React.Fragment>
        <Typography component="p" variant="h4">
          {this.props.children}
        </Typography>
      </React.Fragment>
    );
  }
}
