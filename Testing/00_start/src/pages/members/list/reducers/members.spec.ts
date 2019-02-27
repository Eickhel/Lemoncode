import deepFreeze from "deep-freeze";
import { actionIds } from "../actions/actionIds";
import { membersReducer, MembersState } from "./members";

describe("members/list/reducers/membersReducer tests", () => {
  it("should return initial state when passing undefined state and some action type", () => {
    // Arrange
    const state = undefined;
    const action = { type: "some type" };

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState).toEqual([]);
  });

  it("should return same state without mutate it when passing state and some action type", () => {
    // Arrange
    const state: MembersState = [
      { id: 14540103, login: "antonio06", avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4" }
    ];
    const action = { type: "some type" };
    deepFreeze(state);

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState).toEqual([
      { id: 14540103, login: "antonio06", avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4" }
    ]);
  });

  it(`should return updated state without mutate it when passing state, actionIds.UPDATE_MEMBERS action type and members payload`, () => {
    // Arrange
    const state: MembersState = [
      { id: 14540103, login: "antonio06", avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4" }
    ];

    const payload = [
      { id: 1457912, login: "brauliodiez", avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4" },
      { id: 13205689, login: "crsanti", avatar_url: "https://avatars1.githubusercontent.com/u/13205689?v=4" }
    ];

    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload
    };
    deepFreeze(state);

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState).toEqual(payload);
  });
});
