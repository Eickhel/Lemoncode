import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { Button, TextField, List } from "@material-ui/core";
import { MemberEntity } from "../viewModel";
import { MemberRow } from "./memberRow";

const styles = theme =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    },
    textField: {
      margin: "8px",
      width: "400px",
      display: "block"
    },
    button: {
      margin: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {
  memberList: MemberEntity[];
  getMembers: (organization: string) => void;
  clearMembers: () => void;
}

interface State {
  organizationName: string;
  buttonDisabled: boolean;
}

export class MembersList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { organizationName: "lemoncode", buttonDisabled: false };
  }

  loadMembers = () => {
    if (this.state.organizationName.length > 0) {
      this.props.getMembers(this.state.organizationName);
    }
  };

  resetOrganizationName = () => {
    this.setState({ organizationName: "", buttonDisabled: true });
    this.props.clearMembers();
  };

  setOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ organizationName: e.target.value, buttonDisabled: !(e.target.value.length > 0) });
  };

  public render() {
    const { classes } = this.props;

    return (
      <>
        <TextField
          id="orgName"
          label="Organization's name"
          className={classes.textField}
          value={this.state.organizationName}
          onChange={this.setOrganizationName}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={this.loadMembers}
          className={classes.button}
          disabled={this.state.buttonDisabled}
        >
          Load
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={this.resetOrganizationName}
          className={classes.button}
          disabled={this.state.buttonDisabled}
        >
          Reset
        </Button>
        <List className={classes.root}>
          {this.props.memberList.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </List>
      </>
    );
  }
}

export const MemberTable = withStyles(styles)(MembersList);
