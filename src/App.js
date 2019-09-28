import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from "@material-ui/core";
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
  },
  introText: {
    fontSize: 48,
  },
  bodyText: {
    fontSize: 24
  },
  bodySubText: {
    fontSize: 18
  },
  learnMore: {
    color: "#1CF7E9"
  }
});

class App extends Component {

  state = {
    randomNumber: 0
  }

  componentDidMount() {
    this.setRandomIndex()
  }

  setRandomIndex() {
    let randomIndex = 0;
    randomIndex = Math.floor(Math.random() * 4) + 1  
    this.setState({
      randomNumber: randomIndex
    })
  }

  render() {

    const { classes } = this.props
    
    const professionalFacts = ['Empty Fact', 
      'Former senior consultant with nearly a decade of tenure in the software industry.',
      `Fluent in React, Redux, Sagas, Material-UI, and that's just scratching the surface.`,
      'Experience working alongside developers, project managers, and product owners.',
      `Throughout all of my professional roles, I've made software easier to use.`]

    const resumeLeadIn = ['Empty Message',
      'Learn how I contributed to the growth of a rising K-12 administrative software company.',
      `My list of technical skills is only growing.  See them all, and let's keep adding to it.`,
      `There isn't a department within a software company that I haven't worked with.`,
      `Making software as useable as it is functional has always been my focus.`]

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={classes.main}>
          <Grid container spacing={2} justify="center" style={{ marginTop: 50 }}>
            <Grid item sm={1}>
            </Grid>
            <Grid item sm={3} style={{ textAlign: "center" }}>
              <div class="img-wrapper">
                <img class="inner-img" src="https://i.ibb.co/Pc84qk3/Max-Maher.jpg" alt="Max-Maher" border="0" />
              </div>
            </Grid>
            <Grid item sm={7} style={{ textAlign: "center" }}>
              <span className={classes.introText}>Full Stack Software Developer</span>
              <br /><br />
              <span className={classes.bodyText}>{professionalFacts[this.state.randomNumber]}</span>
              <br/><br/>
              <span className={classes.bodySubText}><i>{resumeLeadIn[this.state.randomNumber]}</i></span>
              <br/><br/>
              <Button className={classes.learnMore} aria-label="Resume" target="_blank" href="https://www.docdroid.net/nB07ZBQ/resume-upload-to-website.pdf">
                Learn More
              </Button>
            </Grid>
            <Grid item sm={1}>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default (withStyles(styles)(App));
