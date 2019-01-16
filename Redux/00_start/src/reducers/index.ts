import { combineReducers } from "redux";
import { MemberListReducer, MemberListState } from "./memberListReducer";

export interface State {
  memberListReducer: MemberListState;
}

export const reducers = combineReducers<State>({
  memberListReducer: MemberListReducer
});
