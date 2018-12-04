import * as React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { MemberEntity } from '../../model/member';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: '10px',
    cursor: 'pointer'
  }
});

interface Props extends WithStyles<typeof styles> {
  member: MemberEntity;
}

const MemberItem = (props: Props) => {
  const openURL = (url: string) => {
    window.open(url);
  };

  return (
    <Paper className={props.classes.root} elevation={1} onClick={() => openURL(props.member.url)}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={props.member.login} src={props.member.avatar_url} />
        </ListItemAvatar>
        <ListItemText primary={props.member.login} />
      </ListItem>{' '}
    </Paper>
  );
};

export const MemberRow = withStyles(styles)(MemberItem);
