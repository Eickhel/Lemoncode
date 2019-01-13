import { connect } from "react-redux";
import { fetchMemberListRequestStart, clearMemberListRequestStart } from "../../actions";
import { State } from "../../reducers";
import { MemberListPage } from "./page";
import { getMemberListVM } from "./selectors";

const mapStateToProps = (state: State) => ({
  memberList: getMemberListVM(state)
});

const mapDispatchToProps = (dispatch)=> ({
  fetchMemberList: (organization: string) => {
    dispatch(fetchMemberListRequestStart(organization));
  },
  clearMemberList: () => {
    dispatch(clearMemberListRequestStart());
  }
});

export const MemberListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberListPage);
