import * as React from "react";
import { ApiResponse, createDefaultApiResponse } from "../model/member";
import { memberAPI } from "../api/memberAPI";
import { MemberLookupComponent } from "./components/memberLookup";
import { MemberListComponent } from "./components/memberList";

interface Props {}

interface State {
  apiResponse: ApiResponse;
}

export class MembersListContainer extends React.Component<Props, State> {
  public pageLimit = 5;
  public currentOffset = 0;
  public currentOrgName = "";

  constructor(props: Props) {
    super(props);
    this.state = { apiResponse: createDefaultApiResponse() };
  }

  loadOrganization = (orgName: string) => {
    this.currentOrgName = orgName;
    this.currentOffset = 0;
    this.loadMembers();
  };

  resetOrganization = () => {
    this.currentOrgName = "";
    this.currentOffset = 0;
    this.setState({ apiResponse: createDefaultApiResponse() });
  };

  setPageLimit = (pageLimit: number) => {
    this.pageLimit = pageLimit;
  };

  handlePaging = (offset: number) => {
    this.currentOffset = offset;
    this.loadMembers();
  };

  loadMembers = () => {
    if (this.currentOrgName.length > 0) {
      memberAPI
        .getAllMembers(this.currentOrgName, this.pageLimit, this.currentOffset)
        .then(apiResponse => this.setState({ apiResponse: apiResponse }));
    }
  };

  public render() {
    return (
      <>
        <MemberLookupComponent
          loadOrganization={this.loadOrganization}
          resetOrganization={this.resetOrganization}
          setPageLimit={this.setPageLimit}
        />
        <MemberListComponent
          pageLimit={this.pageLimit}
          currentOffset={this.currentOffset}
          apiResponse={this.state.apiResponse}
          handlePaging={this.handlePaging}
        />
      </>
    );
  }
}
