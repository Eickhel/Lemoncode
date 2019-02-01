import * as React from "react";
import classNames from "classnames";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { Button, TextField, MenuItem } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    textField: {
      marginRight: "8px",
      width: "250px"
    },
    pageField: {
      width: "120px"
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {
  loadOrganization: (orgName: string) => void;
  resetOrganization: () => void;
  setPageLimit: (pageLimit: number) => void;
}

interface State {
  organizationName: string;
  buttonDisabled: boolean;
  pageLimit: number;
}

class MemberLookup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { organizationName: "lemoncode", pageLimit: 5, buttonDisabled: false };
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

  setPageLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    this.setState({ pageLimit: value });
    this.props.setPageLimit(value);
  };

  public render() {
    const { classes } = this.props;

    const pages = [
      { value: 5, label: "5" },
      { value: 10, label: "10" },
      { value: 15, label: "15" },
      { value: 20, label: "20" }
    ];

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
          variant="outlined"
        />
        <TextField
          id="pageLimit"
          select
          label="Rows per page"
          className={classNames(classes.textField, classes.pageField)}
          SelectProps={{ MenuProps: { className: classes.menu } }}
          value={this.state.pageLimit}
          onChange={this.setPageLimit}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        >
          {pages.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
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
        </div>
      </>
    );
  }
}

export const MemberLookupComponent = withStyles(styles)(MemberLookup);
