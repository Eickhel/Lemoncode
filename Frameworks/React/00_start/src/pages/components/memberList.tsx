import * as React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { MemberEntity, ApiResponse } from "../../model/member";
import Pagination from "material-ui-flat-pagination";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: "10px",
    cursor: "pointer"
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  pagination: {
    align: "center"
  }
});

interface Props extends WithStyles<typeof styles> {
  pageLimit: number;
  currentOffset: number;
  handlePaging: (offset: number) => void;
  apiResponse: ApiResponse;
}

const MemberList = (props: Props) => {
  const openURL = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <List className={props.classes.list}>
        {props.apiResponse.members.map((member: MemberEntity) => (
          <Paper className={props.classes.root} elevation={1} key={member.id} onClick={() => openURL(member.html_url)}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={member.login} src={member.avatar_url} />
              </ListItemAvatar>
              <ListItemText primary={member.login} />
            </ListItem>
          </Paper>
        ))}
      </List>
      {props.apiResponse.pagesCount > 0 && (
        <Pagination
          className={props.classes.pagination}
          limit={props.pageLimit}
          offset={props.currentOffset}
          total={props.apiResponse.pagesCount * props.pageLimit}
          onClick={(e, offset) => props.handlePaging(offset)}
        />
      )}
    </>
  );
};

export const MemberListComponent = withStyles(styles)(MemberList);
