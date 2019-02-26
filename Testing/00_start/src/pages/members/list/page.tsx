import * as React from "react";
import { Table } from "./components";
import { Member } from "./viewModel";

interface Props {
  members: Member[];
}

export const MemberListPage: React.StatelessComponent<Props> = props => (
  <>
    <h2>Members</h2>
    <Table members={props.members} />
  </>
);
