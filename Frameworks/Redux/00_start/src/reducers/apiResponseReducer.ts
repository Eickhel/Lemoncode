import { ApiResponse } from "../api/model";
import { actionDefs } from "../const";

export interface ApiResponseState {
  apiResponse: ApiResponse;
}

interface BaseAction {
  type: string;
  payload: any;
}

const createDefaultState = () => ({
  apiResponse: {
    pagesCount: 0,
    members: []
  }
});

export const ApiResponseReducer = (
  state: ApiResponseState = createDefaultState(),
  action: BaseAction
): ApiResponseState => {
  switch (action.type) {
    case actionDefs.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload);
    case actionDefs.CLEAR_MEMBERS_COMPLETED:
      return handleClearMembersCompleted(state, action.payload);
  }

  return state;
};

const handleFetchMembersCompleted = (state: ApiResponseState, apiResponse: ApiResponse): ApiResponseState => ({
  ...state,
  apiResponse
});

const handleClearMembersCompleted = (state: ApiResponseState, apiResponse: ApiResponse): ApiResponseState => ({
  ...state,
  apiResponse: { pagesCount: 0, members: [] }
});
