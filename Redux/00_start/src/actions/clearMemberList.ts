import { actionDefs } from "../const";

export const clearMemberListRequestStart = () => dispatcher => {
  dispatcher(clearMemberListCompleted());
};

const clearMemberListCompleted = () => ({
  type: actionDefs.CLEAR_MEMBERS_COMPLETED,
  payload: []
});
