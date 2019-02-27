import { State } from "../../reducers";
import * as mappers from "./mappers";
import { getMembers, getMembersVM } from "./selectors";
import * as vm from "./viewModel";

describe("pages/members/list/selectors specs", () => {
  describe("getMembers", () => {
    it("should return members from state", () => {
      // Arrange
      const state = {
        members: [
          {
            id: 14540103,
            login: "antonio06",
            avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
          },
          {
            id: 1457912,
            login: "brauliodiez",
            avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4"
          },
          {
            id: 13205689,
            login: "crsanti",
            avatar_url: "https://avatars1.githubusercontent.com/u/13205689?v=4"
          }
        ]
      } as State;

      // Act
      const result = getMembers(state);

      // Assert
      expect(result).toEqual(state.members);
    });
  });

  describe("getMembersVM", () => {
    it("should return the expected mapped member list", () => {
      // Arrange
      const state = {
        members: [
          {
            id: 14540103,
            login: "antonio06",
            avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
          },
          {
            id: 1457912,
            login: "brauliodiez",
            avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4"
          },
          {
            id: 13205689,
            login: "crsanti",
            avatar_url: "https://avatars1.githubusercontent.com/u/13205689?v=4"
          }
        ]
      } as State;
      const expectedMappedMemberList: vm.Member[] = [
        {
          id: 14540103,
          name: "antonio06",
          avatarUrl: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        },
        {
          id: 1457912,
          name: "brauliodiez",
          avatarUrl: "https://avatars1.githubusercontent.com/u/1457912?v=4"
        },
        {
          id: 13205689,
          name: "crsanti",
          avatarUrl: "https://avatars1.githubusercontent.com/u/13205689?v=4"
        }
      ];

      const mapMemberListModelToVMStub = jest
        .spyOn(mappers, "mapMemberListModelToVM")
        .mockReturnValue(expectedMappedMemberList);

      // Act
      const result = getMembersVM(state);

      // Assert
      expect(mapMemberListModelToVMStub).toHaveBeenCalledWith(state.members);
      expect(result).toEqual(expectedMappedMemberList);
    });
  });
});
