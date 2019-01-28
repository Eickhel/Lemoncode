import { createSelector } from "reselect";
import { getMemberList } from "../../reducers/selectors";

export const getMemberListVM = createSelector(
  getMemberList,
  apiResponse => apiResponse
);
