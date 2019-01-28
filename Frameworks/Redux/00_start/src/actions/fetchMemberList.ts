import { ApiResponse } from "../api/model";
import { actionDefs } from "../const";
import { memberAPI } from "../api";

export const fetchMemberListRequestStart = (organization: string, pageLimit: number, offset: number) => dispatcher => {
  const promise = memberAPI.getAllMembers(organization, pageLimit, offset);

  promise.then(apiResponse => {
    dispatcher(fetchMemberListCompleted(apiResponse));
  });
};

const fetchMemberListCompleted = (apiResponse: ApiResponse) => ({
  type: actionDefs.FETCH_MEMBERS_COMPLETED,
  payload: apiResponse
});
