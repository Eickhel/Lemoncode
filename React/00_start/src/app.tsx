import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MembersComponent } from './components';

const styles = theme =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: '0 auto'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {}

export class AppForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
              Github members directory
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>Use this page to browse public Github's organizations members.</Typography>
          <MembersComponent />
        </main>
      </>
    );
  }
}

export const App = withStyles(styles)(AppForm);
