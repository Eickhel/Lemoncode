import { State } from "../reducers";
import * as mappers from "./mappers";
import { getLogin, getLoginVM } from "./selectors";
import * as vm from "./viewModel";

describe("pages/login/selectors specs", () => {
  describe("getLogin", () => {
    it("should return login info from state", () => {
      // Arrange
      const state = {
        login: { loginEntity: { login: "admin", password: "pass" } }
      } as State;

      // Act
      const result = getLogin(state);

      // Assert
      expect(result).toEqual(state.login.loginEntity);
    });
  });

  describe("getLoginVM", () => {
    it("should return the expected mapped login info", () => {
      // Arrange
      const state = {
        login: { loginEntity: { login: "admin", password: "pass" } }
      } as State;

      const expectedMappedLogin: vm.LoginEntity = {
        login: "admin",
        password: "pass"
      };

      const mapLoginEntityVMToModelStub = jest
        .spyOn(mappers, "mapLoginEntityVMToModel")
        .mockReturnValue(expectedMappedLogin);

      // Act
      const result = getLoginVM(state);

      // Assert
      expect(mapLoginEntityVMToModelStub).toHaveBeenCalledWith(state.login.loginEntity);
      expect(result).toEqual(expectedMappedLogin);
    });
  });
});
