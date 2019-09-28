import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import theme from './theme';
import Header from './Header';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    textAlign: 'center',
    background: '#494A49',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    color: '#fff'
  }
});

class App extends Component {

  render() {

    const { classes } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={classes.main}>
          Hello, welcome to my website!
        </div>
      </ThemeProvider>
    );
  }
}

export default (withStyles(styles)(App));
