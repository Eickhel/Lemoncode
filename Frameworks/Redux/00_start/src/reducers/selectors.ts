import { createSelector } from "reselect";
import { State } from "./index";

export const getMemberListReducer = (state: State) => state.memberListReducer;

export const getMemberList = createSelector(
  getMemberListReducer,
  memberListReducer => memberListReducer.memberList
);