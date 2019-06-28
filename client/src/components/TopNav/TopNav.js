import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const TopNav = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" style={{marginRight: '20px'}}>
            Google Book Search
          </Typography>
          <Button href='./' variant="h6" color="inherit">
            Search
          </Button>
          <Button href='/saved' variant="h6" color="inherit">
            Saved
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNav
