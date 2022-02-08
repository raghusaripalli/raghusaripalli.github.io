import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './App.css';

function App() {

  return (
    // Nav Bar 
    <AppBar position="static" color="primary">
      <Grid container columns={16}>
        <Grid item xs={3}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="" color="inherit" underline='none'>
                {"(Raghu, Saripalli)"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={1}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <div>{"=>"}</div>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={1}>
          <Toolbar>
            <Typography variant="h5" component="div">
              {"{"}
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="/skills" color="inherit" underline='none'>
                {"Skills"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="/edu" color="inherit" underline='none'>
                {"Education"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="/exp" color="inherit" underline='none'>
                {"Experience"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="/proj" color="inherit" underline='none'>
                {"Projects"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Typography variant="h5" component="div">
              <Link href="/ach" color="inherit" underline='none'>
                {"Achievements"}
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={1}>
          <Toolbar>
            <Typography variant="h5" component="div">
              {"}"}
            </Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default App;
