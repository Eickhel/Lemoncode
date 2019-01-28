import { combineReducers } from "redux";
import { ApiResponseReducer, ApiResponseState } from "./apiResponseReducer";

export interface State {
  apiResponseReducer: ApiResponseState;
}

export const reducers = combineReducers<State>({
  apiResponseReducer: ApiResponseReducer
});
