import { connect } from "react-redux";
import { State } from "../reducers";
import { loginRequest } from "./actions/loginRequest";
import { updateLoginEntityField } from "./actions/updateLoginEntityField";
import { LoginPage } from "./page";
import { getLoginVM } from "./selectors";
import { LoginEntity } from "./viewModel";

const mapStateToProps = (state: State) => ({
  loginEntity: getLoginVM(state),
  loginFormErrors: state.login.loginFormErrors
});

const mapDispatchToProps = dispatch => ({
  updateField: (loginEntity: LoginEntity) => (fieldName: string, value: any) =>
    dispatch(updateLoginEntityField(loginEntity, fieldName, value)),
  doLogin: (loginEntity: LoginEntity) => () => dispatch(loginRequest(loginEntity))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  updateField: dispatchProps.updateField(stateProps.loginEntity),
  doLogin: dispatchProps.doLogin(stateProps.loginEntity)
});

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LoginPage);
