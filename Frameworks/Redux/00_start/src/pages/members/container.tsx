import { connect } from "react-redux";
import { clearMemberListRequestStart, fetchMemberListRequestStart } from "../../actions";
import { State } from "../../reducers";
import { MemberListPage } from "./page";
import { getMemberListVM } from "./selectors";

const mapStateToProps = (state: State) => ({
  apiResponse: getMemberListVM(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMemberList: (organization: string, pageLimit: number, offset: number) => {
    dispatch(fetchMemberListRequestStart(organization, pageLimit, offset));
  },
  clearMemberList: () => {
    dispatch(clearMemberListRequestStart());
  }
});

export const MemberListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberListPage);
