import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@material-ui/core";
import { DoubleArrow, OpenInNew } from '@material-ui/icons';
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
    background: '#696565',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 375
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
  },
  title: {
    fontSize: 36
  },
  projectName: {
    fontSize: 24,
    color: "#1CF7E9"
  },
  projectDescription: {
    fontSize: 18
  },
  // projectLearnMore: {
  //   marginLeft: "auto",
  //   marginRight: 0
  // }
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
      `Learn how I contributed to a rising K-12 administrative software company's success.`,
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
              <span className={classes.introText}>Software Developer, Full Stack</span>
              <br /><br />
              <span className={classes.bodyText}>{professionalFacts[this.state.randomNumber]}</span>
              <br /><br />
              <span className={classes.bodySubText}><i>{resumeLeadIn[this.state.randomNumber]}</i></span>
              <br /><br />
              <Button className={classes.learnMore} aria-label="Resume" target="_blank" href="https://www.docdroid.net/nB07ZBQ/resume-upload-to-website.pdf">
                Learn More<DoubleArrow/>
              </Button>
            </Grid>
            <Grid item sm={1}>
            </Grid>
          </Grid>
          <Grid container spacing={4} justify="center" style={{ marginTop: 60 }}>
            
            <Grid item sm={1}>
            </Grid>
            <Grid item sm={5}>
              <Card className={classes.card}>
                <CardContent style={{height: 321}}>
                  <span className={classes.title}>Trivia Team Management System</span>
                  <br/>
                  <span className={classes.projectName}>Trivia Weekend</span>
                  <br /><br />
                  <span className={classes.projectDescription}>Managing a trivia team may not sound like hard work, but what if you're playing in a 50-hour contest, and team members can jump in from anywhere?  My unique solution allows team captains to enter questions, answers, and scores, while team players can view exactly what they need to work on next.</span>
                  </CardContent>
                  <CardActions className={classes.projectLearnMore}>
                    {/* Display button to navigate into movie details page */}
                  <Button className={classes.learnMore} aria-label="Trivia Weekend" target="_blank" href="https://github.com/maxwmaher/trivia-weekend" style={{ marginLeft: "auto", marginRight: 0}}>
                      Open Project<OpenInNew style={{marginLeft: 3}}/>
              </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item sm={5}>
              <Card>
                <Button target="_blank" href="https://github.com/maxwmaher/trivia-weekend" style={{padding:"0", border: "none", background: "none"}}>
                <CardMedia
                  className="projectImage"
                  component="img"
                  alt="Trivia Weekend"
                  image="https://i.imgur.com/WV7Hdc5.png"
                  title="Trivia Weekend"
                  style={{height: 375}}
                />
                </Button>
              </Card>
            </Grid>
            <Grid item sm={1}>
            </Grid>

            <Grid item sm={1}>
            </Grid>
            <Grid item sm={5}>
              <Card>
                <Button target="_blank" href="https://github.com/maxwmaher/movie-gallery" style={{ padding: "0", border: "none", background: "none" }}>
                  <CardMedia
                    className="projectImage"
                    component="img"
                    alt="Movies and Genres"
                    image="https://i.imgur.com/eg5wrzC.png"
                    title="Movies and Genres"
                    style={{ height: 375 }}
                  />
                </Button>
              </Card>
            </Grid>
            <Grid item sm={5}>
              <Card className={classes.card}>
                <CardContent style={{ height: 321 }}>
                  <span className={classes.title}>Interactive Film Library</span>
                  <br />
                  <span className={classes.projectName}>Movies and Genres</span>
                  <br /><br />
                  <span className={classes.projectDescription}>Using React and Redux, I designed a gallery of a person's favorite movies.  Using SQL junction tables, the application provides details on the many genres that could be attached to different movies and grants the ability to edit details about each film.</span>
                </CardContent>
                <CardActions className={classes.projectLearnMore}>
                  {/* Display button to navigate into movie details page */}
                  <Button className={classes.learnMore} aria-label="Movies and Genres" target="_blank" href="https://github.com/maxwmaher/movie-gallery" style={{ marginLeft: "auto", marginRight: 0 }}>
                    Open Project<OpenInNew style={{ marginLeft: 3 }} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={1}>
            </Grid>

            <Grid item sm={1}>
            </Grid>
            <Grid item sm={5}>
              <Card className={classes.card}>
                <CardContent style={{ height: 321 }}>
                  <span className={classes.title}>Gallery of My Life</span>
                  <br />
                  <span className={classes.projectName}>(this) awesome life</span>
                  <br /><br />
                  <span className={classes.projectDescription}>In my first foray into React, I developed a gallery of my life that invites user interaction.  Visitors to the application can insert images, like photos, and delete.  To get more information about a photo, users can simply hover over an image.</span>
                </CardContent>
                <CardActions className={classes.projectLearnMore}>
                  {/* Display button to navigate into movie details page */}
                  <Button className={classes.learnMore} aria-label="Gallery of My Life" target="_blank" href="https://github.com/maxwmaher/react-gallery" style={{ marginLeft: "auto", marginRight: 0 }}>
                    Open Project<OpenInNew style={{ marginLeft: 3 }} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={5}>
              <Card>
                <Button target="_blank" href="https://github.com/maxwmaher/react-gallery" style={{ padding: "0", border: "none", background: "none" }}>
                  <CardMedia
                    className="projectImage"
                    component="img"
                    alt="Gallery of My Life"
                    image="https://i.imgur.com/qhZY280.jpg"
                    title="Gallery of My Life"
                    style={{ height: 375 }}
                  />
                </Button>
              </Card>
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
