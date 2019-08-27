import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DraftsIcon from '@material-ui/icons/Drafts';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Divider from '@material-ui/core/Divider';
import Link from 'next/Link';



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

export default function SimpleList() {
  const classes = UseStyles();
  return (
    <div className ={classes.root}>
    <List className={classes.List} component="nav" aria-label="main mailbox folders">
        <ListItem button>
        <Link href="/Admin">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    <Divider />
    <List className={classes.root} >
      {['DERP', 'DERP', 'DERP'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>

    </div>

  );
}
