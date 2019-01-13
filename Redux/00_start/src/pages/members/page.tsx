import * as React from "react";
import { MemberEntity } from "./viewModel";
import { MemberTable } from "./components";

interface Props {
  memberList: MemberEntity[];
  fetchMemberList: (organization: string) => void;
  clearMemberList: () => void;
}

export class MemberListPage extends React.Component<Props, {}> {
  render() {
    return <MemberTable memberList={this.props.memberList} getMembers={this.props.fetchMemberList} clearMembers={this.props.clearMemberList} />;
  }
}
