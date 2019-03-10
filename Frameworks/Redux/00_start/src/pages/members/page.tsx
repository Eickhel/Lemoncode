import * as React from "react";
import { ApiResponse } from "./viewModel";
import { MemberLookupComponent, MemberListComponent } from "./components";

interface Props {
  apiResponse: ApiResponse;
  fetchMemberList: (organization: string, pageLimit: number, offset: number) => void;
  clearMemberList: () => void;
}

interface State {
  pageLimit: number;
  currentOffset: number;
  currentOrgName: string;
}

export class MemberListPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { pageLimit: 5, currentOffset: 0, currentOrgName: "" };
  }

  loadOrganization = (orgName: string, pageLimit: number) => {
    this.props.fetchMemberList(orgName, pageLimit, this.state.currentOffset);
    this.setState({ currentOrgName: orgName, pageLimit: pageLimit });
  };

  handlePaging = (offset: number) => {
    this.props.fetchMemberList(this.state.currentOrgName, this.state.pageLimit, offset);
    this.setState({ currentOffset: offset });
  };

  public render() {
    return (
      <>
        <MemberLookupComponent
          loadOrganization={this.loadOrganization}
          resetOrganization={this.props.clearMemberList}
        />
        <MemberListComponent
          pageLimit={this.state.pageLimit}
          currentOffset={this.state.currentOffset}
          apiResponse={this.props.apiResponse}
          handlePaging={this.handlePaging}
        />
      </>
    );
  }
}
