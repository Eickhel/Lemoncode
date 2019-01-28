import * as React from "react";
import { ApiResponse } from "./viewModel";
import { MemberLookupComponent, MemberListComponent } from "./components";

interface Props {
  apiResponse: ApiResponse;
  fetchMemberList: (organization: string, pageLimit: number, offset: number) => void;
  clearMemberList: () => void;
}

export class MemberListPage extends React.Component<Props> {
  public pageLimit = 5;
  public currentOffset = 0;
  public currentOrgName = "";

  loadOrganization = (orgName: string) => {
    this.currentOrgName = orgName;
    this.props.fetchMemberList(this.currentOrgName, this.pageLimit, this.currentOffset);
  };

  setPageLimit = (pageLimit: number) => {
    this.pageLimit = pageLimit;
  };

  handlePaging = (offset: number) => {
    this.currentOffset = offset;
    this.props.fetchMemberList(this.currentOrgName, this.pageLimit, this.currentOffset);
  };

  public render() {
    return (
      <>
        <MemberLookupComponent
          loadOrganization={this.loadOrganization}
          resetOrganization={this.props.clearMemberList}
          setPageLimit={this.setPageLimit}
        />
        <MemberListComponent
          pageLimit={this.pageLimit}
          currentOffset={this.currentOffset}
          apiResponse={this.props.apiResponse}
          handlePaging={this.handlePaging}
        />
      </>
    );
  }
}
