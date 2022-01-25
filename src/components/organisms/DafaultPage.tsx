import React, { Component, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Past from "../molecules/Past";
import Latest from "../molecules/Latest";
import { PaletteMode } from "@mui/material";
import Upcoming from "../molecules/Upcoming";
import Next from "../molecules/Next";

const mdTheme = createTheme();

export class DafaultPage extends Component<{ mode: PaletteMode }> {
  render(): ReactNode {
    mdTheme.palette.mode = this.props.mode;

    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <MuiAppBar position="absolute">
            <Toolbar>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Lançamentos Space-X
              </Typography>
            </Toolbar>
          </MuiAppBar>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={1} columns={20}>
                {/* Past Launches */}
                <Grid item xs={16} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "inherit",
                    }}
                  >
                    <Next />
                  </Paper>
                  <br></br>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "inherit",
                    }}
                  >
                    <Latest />
                  </Paper>
                </Grid>
                <Grid item xs={16} md={8} lg={16}>
                <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "inherit",
                    }}
                  >
                    <Upcoming />
                  </Paper>
                  <br/>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "inherit",
                    }}
                  >
                    <Past />
                  </Paper>
                </Grid>
               
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default DafaultPage;
