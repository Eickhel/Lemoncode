import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { Button, TextField, List } from '@material-ui/core';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import {} from 'core-js';

const styles = theme =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline'
    },
    button: {
      margin: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  organizationName: string;
  members: Array<MemberEntity>;
  buttonDisabled: boolean;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { organizationName: 'lemoncode', members: [], buttonDisabled: false };
  }

  loadMembers = () => {
    if (this.state.organizationName.length > 0) {
      memberAPI.getAllMembers(this.state.organizationName).then(members => this.setState({ members: members }));
    }
  };

  resetOrganizationName = () => {
    this.setState({ organizationName: '', members: [], buttonDisabled: true });
  };

  setOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ organizationName: e.target.value, members: [], buttonDisabled: !(e.target.value.length > 0) });
  };

  public render() {
    const { classes } = this.props;

    return (
      <>
        <TextField
          id='orgName'
          label="Organization's name"
          style={{ margin: 8, width: '400px', display: 'block' }}
          value={this.state.organizationName}
          onChange={this.setOrganizationName}
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={this.loadMembers}
          className={classes.button}
          disabled={this.state.buttonDisabled}
        >
          Load
        </Button>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          onClick={this.resetOrganizationName}
          className={classes.button}
          disabled={this.state.buttonDisabled}
        >
          Reset
        </Button>
        <div className='row'>
          <List className={classes.root}>
            {this.state.members.map((member: MemberEntity) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </List>
        </div>
      </>
    );
  }
}

export const MembersComponent = withStyles(styles)(MembersList);
