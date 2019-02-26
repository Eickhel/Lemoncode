import * as apiMember from "../../../../rest-api/api/member";
import { Member } from "../../../../rest-api/model";
import { actionIds } from "./actionIds";

export const fetchMembers = () => dispatch =>
  apiMember
    .fetchMembers()
    .then(members => dispatch(fetchMembersCompleted(members)))
    .catch(console.log);

const fetchMembersCompleted = (members: Member[]) => ({
  type: actionIds.UPDATE_MEMBERS,
  payload: members
});
