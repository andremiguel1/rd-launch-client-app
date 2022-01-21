import React, { Component, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Latest from '../launch/Latest';
import Past from '../launch/Past';
import { PaletteMode } from '@mui/material';
import Upcoming from '../launch/Upcoming';
import Next from '../launch/Next';

const mdTheme = createTheme();

export class DafaultPage extends Component<{mode: PaletteMode}>
{

  render(): ReactNode
  {
    mdTheme.palette.mode = this.props.mode;

    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MuiAppBar position="absolute">
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
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
              backgroundColor:
                (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={1}>
                {/* Past Launches */}
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Next />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Upcoming />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={1}>
                {/* Past Launches */}
                <Grid item xs={12} md={8} lg={8}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Past />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Latest />
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
