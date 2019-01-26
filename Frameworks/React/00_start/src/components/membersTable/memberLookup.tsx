import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

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
  loadOrganization: (orgName: string) => void;
  resetOrganization: () => void;
}

interface State {
  organizationName: string;
  buttonDisabled: boolean;
}

class MemberLookup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { organizationName: "lemoncode", buttonDisabled: false };
  }

  loadOrganization = () => {
    this.props.loadOrganization(this.state.organizationName);
  };

  resetOrganizationName = () => {
    this.setState({ organizationName: "", buttonDisabled: true });
    this.props.resetOrganization();
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
          InputLabelProps={{ shrink: true }}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={this.loadOrganization}
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
      </>
    );
  }
}

export const MemberLookupComponent = withStyles(styles)(MemberLookup);
