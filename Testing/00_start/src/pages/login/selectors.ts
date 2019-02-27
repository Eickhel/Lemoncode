import { createSelector } from "reselect";
import * as model from "../../rest-api/model";
import { State } from "../reducers";
import { mapLoginEntityVMToModel } from "./mappers";

export const getLogin = (state: State): model.LoginEntity => state.login.loginEntity;

export const getLoginVM = createSelector(
  getLogin,
  loginEntity => mapLoginEntityVMToModel(loginEntity)
);
