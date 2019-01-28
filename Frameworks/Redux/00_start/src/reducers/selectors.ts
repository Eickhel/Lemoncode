import { createSelector } from "reselect";
import { State } from "./index";

export const getApiResponseReducer = (state: State) => state.apiResponseReducer;

export const getMemberList = createSelector(
  getApiResponseReducer,
  memberListReducer => memberListReducer.apiResponse
);
