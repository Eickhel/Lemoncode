import { FieldValidationResult } from "lc-form-validation";
import { routes } from "../../../common/constants/routes";
import { history } from "../../../history";
import { login } from "../../../rest-api/api/login";
import { mapLoginEntityVMToModel } from "../mappers";
import { validations } from "../validations";
import { LoginEntity } from "../viewModel";
import { actionIds } from "./actionIds";

export const loginRequest = (loginEntity: LoginEntity) => dispatch =>
  validations.validateForm(loginEntity).then(formValidationResult => {
    formValidationResult.succeeded
      ? doLogin(loginEntity)
      : dispatch(updateLoginFormErrors(formValidationResult.fieldErrors));
  });

const doLogin = (loginEntity: LoginEntity) => {
  const loginEntityModel = mapLoginEntityVMToModel(loginEntity);
  login(loginEntityModel)
    .then(() => {
      history.push(routes.members);
    })
    .catch(console.log);
};

const updateLoginFormErrors = (fieldErrors: { [key: string]: FieldValidationResult }) => ({
  type: actionIds.UPDATE_LOGIN_FORM_ERRORS,
  payload: fieldErrors
});
