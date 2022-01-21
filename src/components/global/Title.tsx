import Typography from '@mui/material/Typography';
import React, { Component, ReactNode } from 'react';

export class Title extends Component {
  render(): ReactNode {
    return (
        <Typography>{this.props.children}</Typography>
    )
  }
}
