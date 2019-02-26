import { createSelector } from "reselect";
import * as model from "../../../rest-api/model";
import { State } from "../../reducers";
import { mapMemberListModelToVM } from "./mappers";

export const getMembers = (state: State): model.Member[] => state.members;

export const getMembersVM = createSelector(
  getMembers,
  members => mapMemberListModelToVM(members)
);
