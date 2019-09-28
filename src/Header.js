import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { GoMarkGithub } from "react-icons/go";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#1CF7E9',
        height: 70,
        color: 'black',
        textAlign: 'center',
        fontSize: 28,
        verticalAlign: 'center',
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
});

class Header extends Component {

    render() {

        const { classes } = this.props

        return (
            <header className={classes.header}>
                <Grid container spacing={2} justify="center">
                    <Grid item sm={2}>
                    </Grid>
                    <Grid item sm={8}>
                        Max Maher
                    </Grid>
                    <Grid item sm={2}>
                        <GoMarkGithub/>
                    </Grid>
                </Grid>
            </header>
        );
    }
}

export default (withStyles(styles)(Header));