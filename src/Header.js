import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#1CF7E9',
        height: 70,
        color: 'black',
        textAlign: 'center',
        fontSize: 34,
        verticalAlign: 'center',
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
});

class Header extends Component {

    render() {

        const { classes } = this.props

        return (
            <header className={classes.header}>
                <Grid container spacing={2} justify="center">
                    <Grid item sm={10} style={{textAlign: "left", paddingLeft: 30}}>
                        Max Maher
                    </Grid>
                    <Grid item sm={2} style={{textAlign: 'right'}}>
                        <Tooltip title="Email">
                            <IconButton aria-label="Email" target="_blank" href="mailto:maxwmaher@gmail.com?subject=Inquiry from Max Maher's Portfolio&body=Hello Max,">
                                <IoIosMail style={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Github">
                            <IconButton aria-label="Github" target="_blank" href="https://github.com/maxwmaher">
                                <GoMarkGithub style={{color: 'black'}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn">
                            <IconButton aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/max-maher/">
                                <FaLinkedin style={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </header>
        );
    }
}

export default (withStyles(styles)(Header));