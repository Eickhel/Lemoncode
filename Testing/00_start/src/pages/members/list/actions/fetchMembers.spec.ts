import configureStore from "redux-mock-store";
import reduxThunk from "redux-thunk";
import * as apiMember from "../../../../rest-api/api/member";
import { Member } from "../../../../rest-api/model";
import { actionIds } from "./actionIds";
import { fetchMembers } from "./fetchMembers";

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe("members/list/actions/fetchMembers tests", () => {
  it("should call to apiMember.fetchMembers", done => {
    // Arrange
    const fetchMembersStub = jest.spyOn(apiMember, "fetchMembers").mockResolvedValue([]);

    // Act
    const store = getMockStore();
    store.dispatch<any>(fetchMembers()).then(() => {
      // Assert
      expect(fetchMembersStub).toHaveBeenCalled();
      done();
    });
  });

  it(`should dispatch action with type UPDATE_MEMBERS and payload with members
  when it fetch members successfully`, done => {
    // Arrange
    const members: Member[] = [
      {
        id: 14540103,
        login: "antonio06",
        avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
      }
    ];

    const fetchMembersStub = jest.spyOn(apiMember, "fetchMembers").mockResolvedValue(members);

    // Act
    const store = getMockStore();
    store.dispatch<any>(fetchMembers()).then(() => {
      // Assert
      const expectedAction = store.getActions()[0];
      expect(expectedAction.type).toEqual(actionIds.UPDATE_MEMBERS);
      expect(expectedAction.payload).toEqual(members);
      done();
    });
  });

  it("should call console.log when fail request", done => {
    // Arrange
    const error = "test error";
    const fetchMembersStub = jest.spyOn(apiMember, "fetchMembers").mockRejectedValue(error);

    const logStub = jest.spyOn(window.console, "log");

    // Act
    const store = getMockStore();
    store.dispatch<any>(fetchMembers()).then(() => {
      // Assert
      expect(logStub).toHaveBeenCalledWith(error);
      done();
    });
  });
});
