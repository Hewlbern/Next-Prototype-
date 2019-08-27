import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 300,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'red',
    height: 48,
    padding: '0 30px',
  },
  List: {
    position: 'absolute',
    height: '122243px',
    left: '111110px',
    right: '1px',
    top: '788px',
    color:'red',
  },

}));

export default function herpity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
<Button className={classes.root}>Higher-order component</Button>
    <List className={classes.List} component="nav" aria-label="main mailbox folders">
        <li>FLERPITYYYY DUERPITYOIERNAE</li>
      </List>
    </div>
  );
}
